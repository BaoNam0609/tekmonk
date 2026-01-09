
// Add missing React and hook imports
import React, { useState, useEffect, useRef } from 'react';
import { searchVietnamPlaces, MapDiscoveryResult, getTransportAdvice } from '../services/geminiService';
import { VIETNAM_PLACES } from '../constants';
import { Place, Attraction, Language } from '../types';
import { translations } from '../locales';

declare var L: any;

// Helper to calculate distance in KM
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; 
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c;
};

const VietnamMap: React.FC<{ lang?: Language }> = ({ lang = 'vi' }) => {
  const t = translations[lang];
  const mapRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersLayerRef = useRef<any>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [discoveryResult, setDiscoveryResult] = useState<MapDiscoveryResult | null>(null);
  
  const [viewMode, setViewMode] = useState<'national' | 'province'>('national');
  const [selectedProvince, setSelectedProvince] = useState<Place | null>(null);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  
  const [showDirections, setShowDirections] = useState(false);
  const [directionDest, setDirectionDest] = useState<{name: string, lat?: number, lng?: number} | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [currentDistance, setCurrentDistance] = useState<number | null>(null);
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const VIETNAM_BOUNDS = [[8.0, 102.0], [24.0, 110.0]];

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapRef.current = L.map(containerRef.current, {
      center: [16.0, 107.5],
      zoom: 6,
      minZoom: 5.5,
      maxBounds: VIETNAM_BOUNDS,
      zoomControl: false, 
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(mapRef.current);
    markersLayerRef.current = L.layerGroup().addTo(mapRef.current);
    renderMarkers();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.debug("Geolocation error:", err)
      );
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      renderMarkers();
    }
  }, [viewMode, selectedProvince]);

  const renderMarkers = () => {
    if (!markersLayerRef.current) return;
    markersLayerRef.current.clearLayers();

    if (viewMode === 'national') {
      VIETNAM_PLACES.forEach(place => {
        const icon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="w-6 h-6 bg-red-600 border-2 border-white rounded-full shadow-[0_5px_15px_rgba(220,38,38,0.4)] pulse-marker flex items-center justify-center"><div class="w-2 h-2 bg-white rounded-full"></div></div>`,
          iconSize: [24, 24]
        });
        const marker = L.marker([place.lat, place.lng], { icon });
        marker.on('click', () => handleProvinceSelect(place));
        marker.bindTooltip(`<b>${place.name}</b>`, { direction: 'top', offset: [0, -10] });
        marker.addTo(markersLayerRef.current);
      });
    } else if (viewMode === 'province' && selectedProvince) {
      selectedProvince.attractions.forEach(attr => {
        const icon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="w-8 h-8 bg-yellow-500 border-2 border-white rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.15)] transform rotate-45 transition-transform hover:scale-110 active:scale-95"><div class="-rotate-45 text-sm">📍</div></div>`,
          iconSize: [32, 32]
        });
        const marker = L.marker([attr.lat, attr.lng], { icon });
        marker.on('click', () => handleAttractionSelect(attr));
        marker.bindTooltip(`<b>${attr.name}</b>`, { direction: 'top', offset: [0, -15] });
        marker.addTo(markersLayerRef.current);
      });
    }
  };

  const handleProvinceSelect = (place: Place) => {
    setSelectedProvince(place);
    setViewMode('province');
    mapRef.current.flyTo([place.lat, place.lng], place.zoom, { duration: 1.5 });
  };

  const handleAttractionSelect = (attr: Attraction) => {
    setSelectedAttraction(attr);
    setShowDetail(true);
    mapRef.current.flyTo([attr.lat, attr.lng], 17, { duration: 1.2 });
  };

  const goBackToNational = () => {
    setViewMode('national');
    setSelectedProvince(null);
    setSelectedAttraction(null);
    setShowDetail(false);
    mapRef.current.flyTo([16.0, 107.5], 6, { duration: 1.5 });
  };

  const handleNextAttraction = () => {
    if (!selectedProvince || !selectedAttraction) return;
    const currentIndex = selectedProvince.attractions.findIndex(a => a.id === selectedAttraction.id);
    const nextIndex = (currentIndex + 1) % selectedProvince.attractions.length;
    handleAttractionSelect(selectedProvince.attractions[nextIndex]);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    const location = (viewMode === 'province' && selectedProvince) ? { lat: selectedProvince.lat, lng: selectedProvince.lng } : undefined;
    const result = await searchVietnamPlaces(searchQuery, location, lang as Language);
    setDiscoveryResult(result);
    setLoading(false);
  };

  const handleOpenDirections = async (destName: string, destLat?: number, destLng?: number) => {
    setDirectionDest({ name: destName, lat: destLat, lng: destLng });
    setShowDirections(true);
    setAiAdvice('');
    setLoadingAdvice(true);
    
    let dist = 0;
    if (userLocation && destLat && destLng) {
      dist = calculateDistance(userLocation.lat, userLocation.lng, destLat, destLng);
      setCurrentDistance(dist);
    } else {
      setCurrentDistance(null);
    }
    
    const origin = userLocation ? `${userLocation.lat},${userLocation.lng}` : (lang === 'en' ? 'Current City' : 'Thành phố hiện tại');
    const advice = await getTransportAdvice(origin, destName, dist || 0, lang as Language);
    setAiAdvice(advice);
    setLoadingAdvice(false);
  };

  const getEmbedDirectionsUrl = (destName: string, destLat?: number, destLng?: number) => {
    const origin = userLocation ? `${userLocation.lat},${userLocation.lng}` : 'current+location';
    const destination = (destLat && destLng) ? `${destLat},${destLng}` : encodeURIComponent(destName);
    return `https://www.google.com/maps?saddr=${origin}&daddr=${destination}&output=embed`;
  };

  return (
    <div className="relative w-full h-[85vh] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/50">
      <div ref={containerRef} className="w-full h-full z-0" />

      {/* Back Button */}
      <div className="absolute top-20 left-4 z-[1000] flex flex-col gap-2">
        {viewMode === 'province' && (
          <button 
            onClick={goBackToNational}
            className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-700 active:scale-95 transition-all"
          >
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            {lang === 'en' ? 'National Map' : 'Quay lại'}
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-[1000]">
        <form onSubmit={handleSearch} className="flex items-center bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 border border-white/40">
          <div className="p-2 text-red-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input 
            type="text" 
            placeholder={viewMode === 'province' ? (lang === 'en' ? `Search in ${selectedProvince?.name}...` : `Tìm tại ${selectedProvince?.name}...`) : (lang === 'en' ? "Explore Vietnam..." : "Khám phá Việt Nam...")} 
            className="flex-grow bg-transparent border-none focus:ring-0 text-xs font-bold py-2 placeholder:text-slate-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="bg-red-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-200 active:scale-95 transition-all">
            {loading ? "..." : (lang === 'en' ? "Ask AI" : "Hỏi AI")}
          </button>
        </form>
      </div>

      {/* Attraction Detail View */}
      {showDetail && selectedAttraction && (
        <div className="absolute inset-0 z-[2000] bg-slate-900/60 backdrop-blur-[4px] flex flex-col justify-end">
          <div className="absolute inset-0 -z-10" onClick={() => setShowDetail(false)}></div>
          <div className="w-full bg-white rounded-t-[3.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.4)] flex flex-col max-h-[90vh]">
            <div className="w-full flex justify-center py-4 shrink-0"><div className="w-12 h-1.5 bg-slate-200 rounded-full"></div></div>
            
            <div className="px-8 pb-4 flex justify-between items-center shrink-0">
              <div className="flex flex-col">
                <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">{selectedAttraction.category}</p>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">{selectedAttraction.name}</h3>
              </div>
              <button onClick={() => setShowDetail(false)} className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            
            <div className="flex-grow overflow-y-auto px-8 pb-32 no-scrollbar space-y-8">
              {/* Header Image */}
              <div className="relative mb-2">
                <img src={selectedAttraction.image} className="w-full h-56 rounded-[2.5rem] object-cover shadow-xl" />
                <div className="absolute -bottom-4 right-6 bg-yellow-400 text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-xl border-4 border-white flex items-center gap-1">★ {selectedAttraction.rating}</div>
              </div>

              {/* Golden Hour Reason */}
              {selectedAttraction.goldenHours && (
                <div className="p-6 bg-yellow-50 rounded-[2.5rem] border border-yellow-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🌅</span>
                    <h4 className="font-black text-sm text-yellow-800 uppercase tracking-widest">{t.bestTimeTitle}</h4>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-yellow-200 shrink-0">
                      <p className="text-[10px] font-black text-yellow-600 uppercase mb-1">{t.bestDayTime}</p>
                      <p className="text-sm font-black text-yellow-900">{selectedAttraction.goldenHours}</p>
                    </div>
                    <div className="flex-grow">
                      <p className="text-xs text-yellow-800 font-bold leading-relaxed">
                        {selectedAttraction.goldenHourReason || (lang === 'en' ? "Perfect timing for photography." : "Khoảnh khắc đẹp nhất để tham quan và ghi hình.")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Nearby Restaurants (Clickable Cards) */}
              {selectedAttraction.nearbyRestaurants && selectedAttraction.nearbyRestaurants.length > 0 && (
                <div>
                  <h4 className="font-black text-sm text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-xl">🍛</span> {lang === 'en' ? 'Nearby Dining' : 'Nhà hàng lân cận'}
                  </h4>
                  <div className="grid gap-3">
                    {selectedAttraction.nearbyRestaurants.map((res, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleOpenDirections(res.name)}
                        className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all text-left w-full"
                      >
                        <div>
                          <p className="text-xs font-black text-slate-900 group-hover:text-red-600 transition-colors">{res.name}</p>
                          <p className="text-[10px] text-slate-500 font-bold italic">{res.dish}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black text-yellow-600">★ {res.rating}</span>
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-red-600 shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby Attractions (Clickable Scroll) */}
              {selectedAttraction.nearbyAttractions && selectedAttraction.nearbyAttractions.length > 0 && (
                <div>
                  <h4 className="font-black text-sm text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-xl">📍</span> {lang === 'en' ? 'Nearby Attractions' : 'Địa điểm tham quan lân cận'}
                  </h4>
                  <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2">
                    {selectedAttraction.nearbyAttractions.map((point, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleOpenDirections(point.name)}
                        className="bg-white shrink-0 p-4 rounded-3xl border-2 border-slate-100 shadow-sm flex flex-col gap-1 min-w-[150px] hover:border-red-100 transition-colors text-left"
                      >
                        <p className="text-[11px] font-black text-slate-800 truncate">{point.name}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-[10px] font-bold text-red-600 tracking-widest">{point.distance}</p>
                          <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5-5 5M18 12H6" /></svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="pb-4">
                <p className="text-sm text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-200 pl-4">
                  {selectedAttraction.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent flex gap-3 shrink-0">
              <button onClick={handleNextAttraction} className="flex-grow bg-slate-900 text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                {lang === 'en' ? 'Explore Next' : 'Điểm tiếp theo'}
              </button>
              <button onClick={() => handleOpenDirections(selectedAttraction.name, selectedAttraction.lat, selectedAttraction.lng)} className="w-20 bg-red-600 text-white py-5 rounded-[2rem] font-black shadow-xl active:scale-95 transition-all flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Directions Overlay */}
      {showDirections && directionDest && (
        <div className="absolute inset-0 z-[3000] bg-slate-900 flex flex-col animate-in fade-in duration-300">
          <header className="shrink-0 bg-slate-900 p-4 pt-8 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg></div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{lang === 'en' ? 'Directions to' : 'Chỉ đường tới'}</p>
                <h4 className="text-white font-black truncate text-sm">{directionDest.name}</h4>
              </div>
            </div>
            <button onClick={() => setShowDirections(false)} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
          </header>
          
          <div className="flex-grow relative bg-slate-100 overflow-y-auto no-scrollbar">
            <div className="w-full h-80 shrink-0">
              <iframe src={getEmbedDirectionsUrl(directionDest.name, directionDest.lat, directionDest.lng)} className="w-full h-full border-none" allowFullScreen loading="lazy"></iframe>
              {currentDistance !== null && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl border border-white shadow-xl flex items-center gap-2">
                  <span className="text-xs font-black text-red-600">{currentDistance.toFixed(1)} km</span>
                </div>
              )}
            </div>
            
            <div className="p-6 space-y-6 pb-20">
              <div className="bg-gradient-to-br from-indigo-600 to-slate-900 p-6 rounded-[2.5rem] shadow-2xl">
                 <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🤖</span>
                    <h4 className="font-black text-sm text-indigo-100 uppercase tracking-widest">{t.transportAdvisory.aiRecommendation}</h4>
                 </div>
                 {loadingAdvice ? (
                   <p className="text-xs text-indigo-200 italic">{t.transportAdvisory.calculating}</p>
                 ) : (
                   <p className="text-sm text-white font-bold leading-relaxed">{aiAdvice}</p>
                 )}
              </div>

              {/* Ride Hailing Apps */}
              <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100">
                <h4 className="font-black text-sm text-slate-900 mb-4">{t.transportAdvisory.rideHailing.label}</h4>
                <div className="grid grid-cols-3 gap-2">
                   {t.transportAdvisory.rideHailing.apps.map((app: any) => (
                      <a key={app.name} href={app.url} className="bg-slate-50 p-3 rounded-2xl flex flex-col items-center gap-1 border border-slate-100 active:scale-95 transition-all">
                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] text-white font-black ${app.color.split(' ')[0]}`}>{app.name[0]}</div>
                         <span className="text-[9px] font-black text-slate-800">{app.name}</span>
                      </a>
                   ))}
                </div>
              </div>
            </div>
          </div>
          
          <footer className="shrink-0 p-6 bg-slate-900 border-t border-white/10 flex justify-center">
            <button onClick={() => setShowDirections(false)} className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95">Đóng</button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default VietnamMap;
