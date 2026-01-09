
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { TripPlan, Language } from "../types";

export interface MapDiscoveryResult {
  text: string;
  places: {
    title: string;
    uri: string;
  }[];
}

/**
 * Generates a detailed trip plan for Vietnam using Gemini 3 Pro.
 */
export const generateTripPlan = async (params: {
  days: number;
  numPeople: number;
  destination: string;
  budget: string;
  interests: string[];
  transport: string;
  accommodation: string;
  people: string;
}, lang: Language = 'vi'): Promise<TripPlan | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const langNote = lang === 'en' ? 'Respond strictly in English.' : 'Trả lời hoàn toàn bằng tiếng Việt.';
    
    const prompt = `Plan a detailed travel itinerary for ${params.destination} in ${params.days} days for ${params.numPeople} people.
    Total Budget: ${params.budget} VNĐ. 
    Interests: ${params.interests.join(', ')}. 
    Primary Transport: ${params.transport}. 
    Accommodation: ${params.accommodation}. 
    Group type: ${params.people}.
    
    Instructions:
    1. Provide a daily schedule with specific locations, times, and estimated costs in VND.
    2. The costs should be realistic for the total number of people (${params.numPeople}) and fit within the budget (${params.budget}).
    3. Include 3 important travel tips. ${langNote}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            itinerary: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.INTEGER },
                  activities: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        time: { type: Type.STRING },
                        description: { type: Type.STRING },
                        location: { type: Type.STRING },
                        cost: { type: Type.NUMBER, description: "Total cost for the entire group for this activity" }
                      },
                      required: ["time", "description", "location", "cost"]
                    }
                  }
                },
                required: ["day", "activities"]
              }
            },
            totalBudget: { type: Type.NUMBER, description: "Total actual calculated budget for all people" },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["itinerary", "totalBudget", "tips"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as TripPlan;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

/**
 * Provides AI transport advice based on origin, destination and distance.
 * Strictly excludes airplane for short distances or same-city travel.
 */
export const getTransportAdvice = async (origin: string, destination: string, distanceKm: number = 0, lang: Language = 'vi'): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Bạn là chuyên gia tư vấn di chuyển thực tế tại Việt Nam. 
    Người dùng muốn đi từ "${origin}" đến "${destination}".
    Khoảng cách (nếu có): ${distanceKm.toFixed(1)} km.
    
    QUY TẮC CỰC KỲ QUAN TRỌNG:
    - Nếu khoảng cách dưới 100km HOẶC di chuyển trong cùng một thành phố: TUYỆT ĐỐI KHÔNG được nhắc đến phương tiện "Máy bay" (Airplane). Hãy khuyên dùng Grab, Xanh SM, xe buýt điện VinBus.
    - Chỉ gợi ý Máy bay cho các chuyến đi xuyên tỉnh có khoảng cách lớn (>300km).
    
    Hãy đưa ra lời khuyên tối ưu, ngắn gọn súc tích trong 2 câu. Ngôn ngữ: ${lang === 'en' ? 'English' : 'Tiếng Việt'}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || (lang === 'en' ? "Consulting AI..." : "Đang lấy ý kiến AI...");
  } catch (error) {
    console.error("Advice Error:", error);
    return "";
  }
};

/**
 * Searches for places in Vietnam using Google Maps grounding.
 */
export const searchVietnamPlaces = async (query: string, location?: { lat: number, lng: number }, lang: Language = 'vi'): Promise<MapDiscoveryResult | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const langNote = lang === 'en' ? 'Respond in English.' : 'Trả lời bằng tiếng Việt.';
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Search for this in Vietnam: ${query}. ${langNote}`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: location ? { latitude: location.lat, longitude: location.lng } : undefined
          }
        }
      },
    });

    const places = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.filter((chunk: any) => chunk.maps)
      ?.map((chunk: any) => ({
        title: chunk.maps.title,
        uri: chunk.maps.uri
      })) || [];

    return {
      text: response.text || (lang === 'en' ? "Here's what I found." : "Đây là những gì tôi tìm thấy."),
      places: places
    };
  } catch (error) {
    console.error("Maps Grounding Error:", error);
    return null;
  }
};

/**
 * Generates speech for a given text in Vietnamese.
 */
export const speakVietnamese = async (text: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Phát âm câu tiếng Việt này một cách tự nhiên: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

/**
 * Evaluates user's pronunciation accuracy compared to a target phrase.
 */
export const evaluatePronunciation = async (targetPhrase: string, audioBase64: string, lang: Language = 'vi'): Promise<{ score: number, feedback: string } | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Evaluate the pronunciation of the Vietnamese phrase: "${targetPhrase}". 
    Compare the audio to standard native Vietnamese pronunciation.
    Return a JSON object with:
    - score: a number from 0 to 100 representing accuracy.
    - feedback: a short sentence in ${lang === 'en' ? 'English' : 'Vietnamese'}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { text: prompt },
          { inlineData: { mimeType: 'audio/wav', data: audioBase64 } }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            feedback: { type: Type.STRING }
          },
          required: ["score", "feedback"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result;
  } catch (error) {
    console.error("Pronunciation Eval Error:", error);
    return null;
  }
};
