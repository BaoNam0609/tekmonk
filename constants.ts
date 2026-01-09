
import { Region, Place, Food } from './types';

export const VIETNAM_PLACES: Place[] = [
  {
    id: 'hanoi',
    name: 'Hà Nội',
    region: Region.NORTH,
    lat: 21.0285,
    lng: 105.8542,
    zoom: 13,
    description: 'Thủ đô nghìn năm văn hiến với nét đẹp cổ kính pha lẫn hiện đại.',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=800',
    rating: 4.9,
    bestTime: 'Tháng 9 - Tháng 11',
    specialties: ['Phở', 'Bún chả', 'Bún thang', 'Chả cá Lã Vọng'],
    attractions: [
      { id: 'hn-1', name: 'Hồ Hoàn Kiếm', description: 'Trái tim của thủ đô.', image: 'https://images.unsplash.com/photo-1509030464152-c23898ad172a?q=80&w=600', lat: 21.0286, lng: 105.8521, rating: 4.9, category: 'History', goldenHours: '05:00 - 07:00', goldenHourReason: 'Ngắm bình minh và nhịp sống tập dưỡng sinh của người Hà Nội.', nearbyRestaurants: [{ name: 'Phở Thìn Bờ Hồ', dish: 'Phở bò', rating: 4.8 }], nearbyAttractions: [{ name: 'Đền Ngọc Sơn', distance: '0.1km' }] },
      { id: 'hn-2', name: 'Văn Miếu Quốc Tử Giám', description: 'Đại học đầu tiên VN.', image: 'https://images.unsplash.com/photo-1620216447192-d61053df28d8?q=80&w=600', lat: 21.0293, lng: 105.8355, rating: 4.8, category: 'History', goldenHours: '08:30 - 10:00', goldenHourReason: 'Nắng sớm chiếu qua tán cây cổ thụ.', nearbyRestaurants: [{ name: 'Koto Van Mieu', dish: 'Bún chả', rating: 4.7 }], nearbyAttractions: [{ name: 'Bảo tàng Mỹ thuật', distance: '0.3km' }] },
      { id: 'hn-3', name: 'Lăng Bác', description: 'Nơi an nghỉ của Bác Hồ.', image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=600', lat: 21.0368, lng: 105.8346, rating: 5.0, category: 'History', goldenHours: '06:00 - 07:30', goldenHourReason: 'Xem lễ thượng cờ trang nghiêm.', nearbyRestaurants: [{ name: 'Bánh tôm Hồ Tây', dish: 'Bánh tôm', rating: 4.5 }], nearbyAttractions: [{ name: 'Chùa Một Cột', distance: '0.1km' }] },
      { id: 'hn-4', name: 'Nhà thờ Lớn', description: 'Kiến trúc Gothic cổ.', image: 'https://images.unsplash.com/photo-1599708153386-62e2d062860a?q=80&w=600', lat: 21.0287, lng: 105.8490, rating: 4.7, category: 'History', goldenHours: '16:00 - 17:30', goldenHourReason: 'Rất đẹp khi nắng chiều chiếu vào mặt kính.', nearbyRestaurants: [{ name: 'Trà chanh Nhà Thờ', dish: 'Trà chanh', rating: 4.6 }], nearbyAttractions: [{ name: 'Phố Lý Quốc Sư', distance: '0.1km' }] },
      { id: 'hn-5', name: 'Hoàng thành Thăng Long', description: 'Di sản lịch sử nghìn năm.', image: 'https://images.unsplash.com/photo-1596402184320-417d717867cd?q=80&w=600', lat: 21.0355, lng: 105.8394, rating: 4.8, category: 'History', goldenHours: '15:00 - 16:30', goldenHourReason: 'Nắng vàng chiếu rọi lên các bức tường gạch cũ.', nearbyRestaurants: [{ name: 'Quán Ăn Ngon', dish: 'Bánh xèo', rating: 4.4 }], nearbyAttractions: [{ name: 'Cột cờ Hà Nội', distance: '0.2km' }] },
      { id: 'hn-6', name: 'Bảo tàng Dân tộc học', description: 'Văn hóa 54 dân tộc.', image: 'https://images.unsplash.com/photo-1620216447192-d61053df28d8?q=80&w=600', lat: 21.0406, lng: 105.7985, rating: 4.9, category: 'History', goldenHours: '09:00 - 11:00', goldenHourReason: 'Thăm các khu nhà ngoài trời mát mẻ.', nearbyRestaurants: [{ name: 'Vua Chả Cá', dish: 'Chả cá', rating: 4.6 }], nearbyAttractions: [{ name: 'Công viên Nghĩa Đô', distance: '0.5km' }] },
      { id: 'hn-7', name: 'Chùa Trấn Quốc', description: 'Chùa cổ nhất Hà Nội.', image: 'https://images.unsplash.com/photo-1582236171542-f04b122e9603?q=80&w=600', lat: 21.0478, lng: 105.8368, rating: 4.8, category: 'History', goldenHours: '17:30 - 18:30', goldenHourReason: 'Hoàng hôn trên Hồ Tây cực kỳ rực rỡ.', nearbyRestaurants: [{ name: 'Bánh tôm Thanh Mai', dish: 'Bánh tôm', rating: 4.3 }], nearbyAttractions: [{ name: 'Đường Thanh Niên', distance: '0.1km' }] },
      { id: 'hn-8', name: 'Nhà hát Lớn', description: 'Kiến trúc Pháp tiêu biểu.', image: 'https://images.unsplash.com/photo-1599708153386-62e2d062860a?q=80&w=600', lat: 21.0242, lng: 105.8576, rating: 4.7, category: 'History', goldenHours: '19:00 - 20:30', goldenHourReason: 'Lúc nhà hát lên đèn lung linh nhất.', nearbyRestaurants: [{ name: 'Press Club', dish: 'Ẩm thực Pháp', rating: 4.5 }], nearbyAttractions: [{ name: 'Khách sạn Metropole', distance: '0.2km' }] }
    ]
  },
  {
    id: 'sapa',
    name: 'Sa Pa',
    region: Region.NORTH,
    lat: 22.3364,
    lng: 103.8438,
    zoom: 13,
    description: 'Thị trấn trong mây hùng vĩ.',
    image: 'https://images.unsplash.com/photo-1504457047772-27fb181ccc43?q=80&w=800',
    rating: 4.9,
    bestTime: 'Tháng 3 - Tháng 5',
    specialties: ['Cá hồi', 'Lợn cắp nách'],
    attractions: [
      { id: 'sp-1', name: 'Đỉnh Fansipan', description: 'Nóc nhà Đông Dương.', image: 'https://images.unsplash.com/photo-1581060144944-88981977799d?q=80&w=600', lat: 22.3033, lng: 103.7750, rating: 5.0, category: 'Nature', goldenHours: '06:00 - 08:00', goldenHourReason: 'Săn mây bình minh tuyệt đẹp.', nearbyRestaurants: [{ name: 'Fansipan Legend', dish: 'Lẩu cá', rating: 4.5 }], nearbyAttractions: [{ name: 'Chùa Kim Sơn', distance: '0.1km' }] },
      { id: 'sp-2', name: 'Bản Cát Cát', description: 'Làng cổ người Mông.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600', lat: 22.3283, lng: 103.8317, rating: 4.7, category: 'History', goldenHours: '15:00 - 17:00', goldenHourReason: 'Nắng chiều chiếu ruộng bậc thang.', nearbyRestaurants: [{ name: 'The Haven', dish: 'Coffee', rating: 4.8 }], nearbyAttractions: [{ name: 'Thác Tiên Sa', distance: '0.2km' }] },
      { id: 'sp-3', name: 'Nhà thờ Đá', description: 'Biểu tượng Sa Pa.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600', lat: 22.3347, lng: 103.8415, rating: 4.6, category: 'History', goldenHours: '19:00 - 20:30', goldenHourReason: 'Lung linh dưới ánh đèn đêm.', nearbyRestaurants: [{ name: 'A Phủ', dish: 'Thắng cố', rating: 4.4 }], nearbyAttractions: [{ name: 'Chợ tình', distance: '0.1km' }] },
      { id: 'sp-4', name: 'Thung lũng Mường Hoa', description: 'Ruộng bậc thang kỳ vĩ.', image: 'https://images.unsplash.com/photo-1504457047772-27fb181ccc43?q=80&w=600', lat: 22.3025, lng: 103.8752, rating: 4.8, category: 'Nature', goldenHours: '16:30 - 17:30', goldenHourReason: 'Ngắm hoàng hôn lúa chín.', nearbyRestaurants: [{ name: 'Lá Đỏ', dish: 'Cơm lam', rating: 4.5 }], nearbyAttractions: [{ name: 'Suối Mường Hoa', distance: '0.3km' }] },
      { id: 'sp-5', name: 'Thác Bạc', description: 'Dòng thác trắng xóa.', image: 'https://images.unsplash.com/photo-1581060144944-88981977799d?q=80&w=600', lat: 22.3582, lng: 103.7801, rating: 4.5, category: 'Nature', goldenHours: '09:00 - 10:30', goldenHourReason: 'Ánh nắng rọi bụi nước tạo cầu vồng.', nearbyRestaurants: [{ name: 'Song Nhi', dish: 'Gỏi cá hồi', rating: 4.6 }], nearbyAttractions: [{ name: 'Đèo Ô Quy Hồ', distance: '5km' }] },
      { id: 'sp-6', name: 'Núi Hàm Rồng', description: 'Vườn sinh thái.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600', lat: 22.3385, lng: 103.8465, rating: 4.6, category: 'Nature', goldenHours: '08:00 - 10:00', goldenHourReason: 'Không khí mát mẻ nhất.', nearbyRestaurants: [{ name: 'Quán Liên', dish: 'Bún chả', rating: 4.2 }], nearbyAttractions: [{ name: 'Vườn Đá', distance: '0.1km' }] },
      { id: 'sp-7', name: 'Bản Tả Phìn', description: 'Nổi tiếng tắm lá thuốc.', image: 'https://images.unsplash.com/photo-1504457047772-27fb181ccc43?q=80&w=600', lat: 22.3789, lng: 103.8795, rating: 4.7, category: 'History', goldenHours: '14:00 - 16:00', goldenHourReason: 'Thời điểm thích hợp để thư giãn.', nearbyRestaurants: [{ name: 'Sapa Hill', dish: 'Gà đen', rating: 4.4 }], nearbyAttractions: [{ name: 'Hang Tả Phìn', distance: '0.5km' }] },
      { id: 'sp-8', name: 'Ô Quy Hồ', description: 'Đỉnh đèo hùng vĩ.', image: 'https://images.unsplash.com/photo-1581060144944-88981977799d?q=80&w=600', lat: 22.3551, lng: 103.7584, rating: 4.9, category: 'Nature', goldenHours: '17:00 - 18:00', goldenHourReason: 'Ngắm hoàng hôn trên đỉnh đèo.', nearbyRestaurants: [{ name: 'Cổng Trời', dish: 'Nướng', rating: 4.7 }], nearbyAttractions: [{ name: 'Thác Tình Yêu', distance: '2km' }] }
    ]
  },
  {
    id: 'halong',
    name: 'Hạ Long',
    region: Region.NORTH,
    lat: 20.9501,
    lng: 107.0733,
    zoom: 12,
    description: 'Kỳ quan thiên nhiên thế giới.',
    image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=800',
    rating: 4.9,
    bestTime: 'Tháng 4 - Tháng 10',
    specialties: ['Chả mực', 'Hải sản'],
    attractions: [
      { id: 'hl-1', name: 'Vịnh Hạ Long', description: 'Trải nghiệm du thuyền.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.9101, lng: 107.1833, rating: 5.0, category: 'Nature', goldenHours: '05:30 - 06:30', goldenHourReason: 'Đón bình minh giữa các đảo đá.', nearbyRestaurants: [{ name: 'Cua Vàng', dish: 'Lẩu cua', rating: 4.7 }], nearbyAttractions: [{ name: 'Hang Luồn', distance: '1km' }] },
      { id: 'hl-2', name: 'Đảo Ti Tốp', description: 'Bãi tắm vầng trăng.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.8492, lng: 107.0811, rating: 4.8, category: 'Nature', goldenHours: '16:30 - 17:30', goldenHourReason: 'Hoàng hôn nhìn từ đỉnh núi Ti Tốp.', nearbyRestaurants: [{ name: 'Nhà hàng nổi', dish: 'Hải sản', rating: 4.2 }], nearbyAttractions: [{ name: 'Hang Sửng Sốt', distance: '2km' }] },
      { id: 'hl-3', name: 'Hang Sửng Sốt', description: 'Hang đẹp nhất vịnh.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.8458, lng: 107.0905, rating: 4.9, category: 'Nature', goldenHours: '09:00 - 11:00', goldenHourReason: 'Ánh nắng len lỏi vào hang.', nearbyRestaurants: [{ name: 'Gia đình ngư dân', dish: 'Mực hấp', rating: 4.4 }], nearbyAttractions: [{ name: 'Hang Bồ Nâu', distance: '0.5km' }] },
      { id: 'hl-4', name: 'Bảo tàng Quảng Ninh', description: 'Viên ngọc đen.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.9492, lng: 107.0965, rating: 4.8, category: 'History', goldenHours: '16:00 - 17:00', goldenHourReason: 'Ánh chiều rực rỡ phản chiếu lên kính.', nearbyRestaurants: [{ name: 'Hồng Hạnh 3', dish: 'Hải sản', rating: 4.6 }], nearbyAttractions: [{ name: 'Cung Cá Heo', distance: '0.2km' }] },
      { id: 'hl-5', name: 'Sun World', description: 'Tổ hợp vui chơi.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.9575, lng: 107.0375, rating: 4.7, category: 'Entertainment', goldenHours: '17:30 - 19:30', goldenHourReason: 'Cáp treo ngắm thành phố lên đèn.', nearbyRestaurants: [{ name: 'Phố Bãi Cháy', dish: 'Sam biển', rating: 4.5 }], nearbyAttractions: [{ name: 'Cầu Bãi Cháy', distance: '1km' }] },
      { id: 'hl-6', name: 'Tuần Châu', description: 'Đảo du lịch cao cấp.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.9325, lng: 107.0125, rating: 4.6, category: 'Entertainment', goldenHours: '19:00 - 20:30', goldenHourReason: 'Xem biểu diễn nhạc nước.', nearbyRestaurants: [{ name: '1958 Restaurant', dish: 'Hải sản', rating: 4.4 }], nearbyAttractions: [{ name: 'Cảng Tuần Châu', distance: '0.5km' }] },
      { id: 'hl-7', name: 'Núi Bài Thơ', description: 'Di tích lịch sử.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.9525, lng: 107.0825, rating: 4.7, category: 'History', goldenHours: '05:30 - 07:00', goldenHourReason: 'Bình minh cực đẹp từ đỉnh núi.', nearbyRestaurants: [{ name: 'Phở Hòn Gai', dish: 'Phở hải sản', rating: 4.3 }], nearbyAttractions: [{ name: 'Chùa Long Tiên', distance: '0.3km' }] },
      { id: 'hl-8', name: 'Động Thiên Cung', description: 'Hang động lung linh.', image: 'https://images.unsplash.com/photo-1552596880-9758d095906b?q=80&w=600', lat: 20.9158, lng: 107.0215, rating: 4.8, category: 'Nature', goldenHours: '10:00 - 11:30', goldenHourReason: 'Ánh sáng màu sắc huyền ảo.', nearbyRestaurants: [{ name: 'Nhà hàng Tuần Châu', dish: 'Hàu nướng', rating: 4.2 }], nearbyAttractions: [{ name: 'Hang Đầu Gỗ', distance: '0.1km' }] }
    ]
  },
  {
    id: 'danang',
    name: 'Đà Nẵng',
    region: Region.CENTRAL,
    lat: 16.0544,
    lng: 108.2022,
    zoom: 12,
    description: 'Thành phố của những cây cầu.',
    image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=800',
    rating: 4.8,
    bestTime: 'Tháng 2 - Tháng 8',
    specialties: ['Mì Quảng', 'Bánh tráng thịt heo'],
    attractions: [
      { id: 'dn-1', name: 'Cầu Rồng', description: 'Phun lửa cuối tuần.', image: 'https://images.unsplash.com/photo-1582236171542-f04b122e9603?q=80&w=600', lat: 16.0611, lng: 108.2272, rating: 4.9, category: 'Entertainment', goldenHours: '21:00 - 21:15', goldenHourReason: 'Xem phun lửa và nước.', nearbyRestaurants: [{ name: 'Cardamom', dish: 'Mì Quảng', rating: 4.5 }], nearbyAttractions: [{ name: 'Cầu Tình Yêu', distance: '0.2km' }] },
      { id: 'dn-2', name: 'Bà Nà Hills', description: 'Cầu Vàng bàn tay.', image: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=600', lat: 15.9951, lng: 107.9968, rating: 5.0, category: 'Entertainment', goldenHours: '07:30 - 08:30', goldenHourReason: 'Tránh đông đúc và đón nắng sớm.', nearbyRestaurants: [{ name: 'Arapang', dish: 'Buffet', rating: 4.4 }], nearbyAttractions: [{ name: 'Làng Pháp', distance: '0.2km' }] },
      { id: 'dn-3', name: 'Sơn Trà', description: 'Chùa Linh Ứng.', image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=800', lat: 16.1205, lng: 108.2785, rating: 4.8, category: 'Nature', goldenHours: '16:00 - 17:30', goldenHourReason: 'Ngắm hoàng hôn trên biển.', nearbyRestaurants: [{ name: 'Năm Đảnh', dish: 'Hải sản', rating: 4.7 }], nearbyAttractions: [{ name: 'Cây đa nghìn năm', distance: '2km' }] },
      { id: 'dn-4', name: 'Ngũ Hành Sơn', description: '5 ngọn núi đá vôi.', image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=600', lat: 16.0028, lng: 108.2635, rating: 4.7, category: 'Nature', goldenHours: '08:00 - 10:00', goldenHourReason: 'Leo núi lúc mát mẻ nhất.', nearbyRestaurants: [{ name: 'Mì Quảng Ếch', dish: 'Mì quảng', rating: 4.5 }], nearbyAttractions: [{ name: 'Làng Non Nước', distance: '0.1km' }] },
      { id: 'dn-5', name: 'Biển Mỹ Khê', description: 'Biển đẹp nhất hành tinh.', image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=600', lat: 16.0645, lng: 108.2452, rating: 4.9, category: 'Nature', goldenHours: '05:00 - 06:00', goldenHourReason: 'Đón bình minh trên biển.', nearbyRestaurants: [{ name: 'Hải sản Bé Mặn', dish: 'Hải sản', rating: 4.6 }], nearbyAttractions: [{ name: 'Công viên Biển Đông', distance: '0.5km' }] },
      { id: 'dn-6', name: 'Cầu Tình Yêu', description: 'Biểu tượng tình yêu.', image: 'https://images.unsplash.com/photo-1582236171542-f04b122e9603?q=80&w=600', lat: 16.0615, lng: 108.2315, rating: 4.6, category: 'Entertainment', goldenHours: '18:30 - 20:00', goldenHourReason: 'Lung linh đèn lồng cá chép.', nearbyRestaurants: [{ name: 'Bà Dưỡng', dish: 'Bánh xèo', rating: 4.8 }], nearbyAttractions: [{ name: 'Tượng Cá Chép', distance: '0.05km' }] },
      { id: 'dn-7', name: 'Asia Park', description: 'Vòng quay Mặt trời.', image: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=600', lat: 16.0405, lng: 108.2255, rating: 4.6, category: 'Entertainment', goldenHours: '17:00 - 19:00', goldenHourReason: 'Ngắm thành phố từ trên cao.', nearbyRestaurants: [{ name: 'Indochine', dish: 'Buffet', rating: 4.4 }], nearbyAttractions: [{ name: 'Lotte Mart', distance: '0.5km' }] },
      { id: 'dn-8', name: 'Chợ Hàn', description: 'Chợ du lịch nổi tiếng.', image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=800', lat: 16.0682, lng: 108.2245, rating: 4.5, category: 'Food', goldenHours: '09:00 - 11:00', goldenHourReason: 'Chợ sầm uất đầy đủ nhất.', nearbyRestaurants: [{ name: 'Bún chả cá Ông Tạ', dish: 'Bún cá', rating: 4.7 }], nearbyAttractions: [{ name: 'Nhà thờ Con Gà', distance: '0.3km' }] }
    ]
  },
  {
    id: 'hoian',
    name: 'Hội An',
    region: Region.CENTRAL,
    lat: 15.8801,
    lng: 108.3273,
    zoom: 14,
    description: 'Thương cảng cổ rực rỡ đèn lồng.',
    image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=800',
    rating: 4.9,
    bestTime: 'Tháng 2 - Tháng 4',
    specialties: ['Cao lầu', 'Cơm gà'],
    attractions: [
      { id: 'ha-1', name: 'Chùa Cầu', description: 'Biểu tượng Hội An.', image: 'https://images.unsplash.com/photo-1616484173745-07f25fd0547f?q=80&w=600', lat: 15.8771, lng: 108.3259, rating: 4.8, category: 'History', goldenHours: '16:00 - 18:00', goldenHourReason: 'Nắng chiều vàng rêu phong.', nearbyRestaurants: [{ name: 'Bánh mì Phượng', dish: 'Bánh mì', rating: 4.9 }], nearbyAttractions: [{ name: 'Nhà cổ Tân Ký', distance: '0.1km' }] },
      { id: 'ha-2', name: 'Nhà cổ Tân Ký', description: 'Kiến trúc cổ điển.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.8775, lng: 108.3275, rating: 4.7, category: 'History', goldenHours: '09:00 - 10:30', goldenHourReason: 'Ánh sáng rọi giếng trời.', nearbyRestaurants: [{ name: 'Morning Glory', dish: 'Cao lầu', rating: 4.6 }], nearbyAttractions: [{ name: 'Hội quán Phúc Kiến', distance: '0.2km' }] },
      { id: 'ha-3', name: 'Hội quán Phúc Kiến', description: 'Kiến trúc Trung Hoa.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.8778, lng: 108.3298, rating: 4.8, category: 'History', goldenHours: '08:30 - 09:30', goldenHourReason: 'Không gian tâm linh u tịch.', nearbyRestaurants: [{ name: 'Cơm gà Bà Buội', dish: 'Cơm gà', rating: 4.7 }], nearbyAttractions: [{ name: 'Chợ Hội An', distance: '0.4km' }] },
      { id: 'ha-4', name: 'Chợ Hội An', description: 'Thiên đường ẩm thực.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.8785, lng: 108.3325, rating: 4.6, category: 'Food', goldenHours: '07:30 - 09:00', goldenHourReason: 'Thưởng thức bữa sáng sầm uất.', nearbyRestaurants: [{ name: 'Cao lầu Thanh', dish: 'Cao lầu', rating: 4.8 }], nearbyAttractions: [{ name: 'Sông Hoài', distance: '0.1km' }] },
      { id: 'ha-5', name: 'Rừng dừa Bảy Mẫu', description: 'Múa thúng độc đáo.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.8752, lng: 108.3755, rating: 4.7, category: 'Nature', goldenHours: '15:30 - 17:00', goldenHourReason: 'Xem múa thúng lúc mát trời.', nearbyRestaurants: [{ name: 'Nhà hàng Bến Tre', dish: 'Cơm dừa', rating: 4.3 }], nearbyAttractions: [{ name: 'Biển Cửa Đại', distance: '2km' }] },
      { id: 'ha-6', name: 'Biển An Bàng', description: 'Biển bình yên.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.9125, lng: 108.3552, rating: 4.8, category: 'Nature', goldenHours: '16:30 - 18:30', goldenHourReason: 'Hoàng hôn bên bờ biển cực chill.', nearbyRestaurants: [{ name: 'The Deck House', dish: 'Pizza', rating: 4.6 }], nearbyAttractions: [{ name: 'Biển Cửa Đại', distance: '2km' }] },
      { id: 'ha-7', name: 'Làng gốm Thanh Hà', description: 'Làng nghề truyền thống.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.8855, lng: 108.2955, rating: 4.5, category: 'History', goldenHours: '14:30 - 16:00', goldenHourReason: 'Xem nghệ nhân làm gốm.', nearbyRestaurants: [{ name: 'Gốm Việt', dish: 'Trà thảo mộc', rating: 4.2 }], nearbyAttractions: [{ name: 'Công viên Đất nung', distance: '0.1km' }] },
      { id: 'ha-8', name: 'VinWonders', description: 'Vui chơi giải trí.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 15.8255, lng: 108.3555, rating: 4.8, category: 'Entertainment', goldenHours: '17:00 - 19:30', goldenHourReason: 'Nhạc nước và show thực cảnh.', nearbyRestaurants: [{ name: 'Safari Restaurant', dish: 'Buffet', rating: 4.5 }], nearbyAttractions: [{ name: 'River Safari', distance: '0.2km' }] }
    ]
  },
  {
    id: 'nhatrang',
    name: 'Nha Trang',
    region: Region.CENTRAL,
    lat: 12.2388,
    lng: 109.1967,
    zoom: 13,
    description: 'Vịnh biển đẹp bậc nhất.',
    image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=800',
    rating: 4.8,
    bestTime: 'Tháng 1 - Tháng 9',
    specialties: ['Bún sứa', 'Nem nướng'],
    attractions: [
      { id: 'nt-1', name: 'Tháp Bà Ponagar', description: 'Đền tháp Chăm.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2655, lng: 109.1958, rating: 4.9, category: 'History', goldenHours: '08:00 - 09:30', goldenHourReason: 'Nắng ban mai rọi tháp gạch rực rỡ.', nearbyRestaurants: [{ name: 'Bún cá Cô Ba', dish: 'Bún sứa', rating: 4.7 }], nearbyAttractions: [{ name: 'Suối khoáng I-resort', distance: '2km' }] },
      { id: 'nt-2', name: 'VinWonders', description: 'Đảo giải trí.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2155, lng: 109.2355, rating: 5.0, category: 'Entertainment', goldenHours: '17:00 - 20:00', goldenHourReason: 'Ngắm hoàng hôn từ cáp treo.', nearbyRestaurants: [{ name: 'Imperial Club', dish: 'Dimsum', rating: 4.6 }], nearbyAttractions: [{ name: 'Vịnh Nha Trang', distance: '0.1km' }] },
      { id: 'nt-3', name: 'Chùa Long Sơn', description: 'Tượng Phật trắng khổng lồ.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2505, lng: 109.1815, rating: 4.7, category: 'History', goldenHours: '06:30 - 08:00', goldenHourReason: 'Không gian tĩnh lặng sáng sớm.', nearbyRestaurants: [{ name: 'Quán chay', dish: 'Cơm chay', rating: 4.5 }], nearbyAttractions: [{ name: 'Chợ Đầm', distance: '1.5km' }] },
      { id: 'nt-4', name: 'Viện Hải dương học', description: 'Sinh vật biển đa dạng.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2015, lng: 109.2155, rating: 4.7, category: 'Nature', goldenHours: '09:00 - 11:00', goldenHourReason: 'Ánh nắng đẹp xuyên bể cá.', nearbyRestaurants: [{ name: 'Thanh Sương', dish: 'Tôm hùm', rating: 4.4 }], nearbyAttractions: [{ name: 'Cảng Nha Trang', distance: '0.5km' }] },
      { id: 'nt-5', name: 'Đảo Hòn Tre', description: 'Hòn đảo lớn nhất vịnh.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=800', lat: 12.2055, lng: 109.2555, rating: 4.8, category: 'Nature', goldenHours: '15:30 - 17:00', goldenHourReason: 'Tắm biển nước trong vắt.', nearbyRestaurants: [{ name: 'Lagoon Restaurant', dish: 'Hải sản', rating: 4.5 }], nearbyAttractions: [{ name: 'Bãi Trũ', distance: '0.2km' }] },
      { id: 'nt-6', name: 'Hòn Chồng', description: 'Khối đá chồng tự nhiên.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2715, lng: 109.2055, rating: 4.6, category: 'Nature', goldenHours: '17:00 - 18:30', goldenHourReason: 'Điểm ngắm hoàng hôn vịnh tuyệt nhất.', nearbyRestaurants: [{ name: 'Đặng Văn Quyên', dish: 'Nem nướng', rating: 4.7 }], nearbyAttractions: [{ name: 'Hòn Đỏ', distance: '0.5km' }] },
      { id: 'nt-7', name: 'Chợ Đầm', description: 'Mua sắm sầm uất.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2515, lng: 109.1915, rating: 4.5, category: 'Food', goldenHours: '08:30 - 10:00', goldenHourReason: 'Lúc hải sản khô phong phú nhất.', nearbyRestaurants: [{ name: 'Bún cá Ông Ninh', dish: 'Bún sứa', rating: 4.7 }], nearbyAttractions: [{ name: 'Nhà thờ Núi', distance: '1km' }] },
      { id: 'nt-8', name: 'Nhà thờ Núi', description: 'Kiến trúc Gothic.', image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600', lat: 12.2465, lng: 109.1885, rating: 4.6, category: 'History', goldenHours: '16:00 - 17:30', goldenHourReason: 'Ánh nắng xuyên kính màu huyền ảo.', nearbyRestaurants: [{ name: 'Rain Forest', dish: 'Coffee', rating: 4.8 }], nearbyAttractions: [{ name: 'Ga Nha Trang', distance: '0.3km' }] }
    ]
  },
  {
    id: 'hcmc',
    name: 'TP. Hồ Chí Minh',
    region: Region.SOUTH,
    lat: 10.7769,
    lng: 106.7009,
    zoom: 12,
    description: 'Trung tâm năng động bậc nhất.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800',
    rating: 4.7,
    bestTime: 'Tháng 12 - Tháng 3',
    specialties: ['Cơm tấm', 'Bánh mì'],
    attractions: [
      { id: 'hcm-1', name: 'Dinh Độc Lập', description: 'Di tích lịch sử.', image: 'https://images.unsplash.com/photo-1594917631343-855c7096d2e0?q=80&w=600', lat: 10.7769, lng: 106.6953, rating: 4.8, category: 'History', goldenHours: '09:00 - 10:30', goldenHourReason: 'Nắng chiếu qua rừng cây trong khuôn viên.', nearbyRestaurants: [{ name: 'Cơm tấm Thuận Kiều', dish: 'Cơm tấm', rating: 4.5 }], nearbyAttractions: [{ name: 'Nhà thờ Đức Bà', distance: '0.5km' }] },
      { id: 'hcm-2', name: 'Nhà thờ Đức Bà', description: 'Biểu tượng gạch đỏ.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7797, lng: 106.6991, rating: 4.7, category: 'History', goldenHours: '16:00 - 17:30', goldenHourReason: 'Nắng chiều vàng rực lên gạch Pháp.', nearbyRestaurants: [{ name: 'Cafe Bưu Điện', dish: 'Cafe sữa đá', rating: 4.6 }], nearbyAttractions: [{ name: 'Bưu điện Thành phố', distance: '0.1km' }] },
      { id: 'hcm-3', name: 'Bưu điện Thành phố', description: 'Kiến trúc Pháp cổ.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7799, lng: 106.6999, rating: 4.7, category: 'History', goldenHours: '08:30 - 10:00', goldenHourReason: 'Ánh sáng vòm mái đẹp nhất.', nearbyRestaurants: [{ name: 'Pizza 4Ps', dish: 'Pizza', rating: 4.9 }], nearbyAttractions: [{ name: 'Đường sách', distance: '0.05km' }] },
      { id: 'hcm-4', name: 'Chợ Bến Thành', description: 'Biểu tượng giao thương.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7719, lng: 106.6983, rating: 4.6, category: 'Food', goldenHours: '19:00 - 21:00', goldenHourReason: 'Chợ đêm sầm uất với đủ món ăn.', nearbyRestaurants: [{ name: 'Bếp Mẹ Ỉn', dish: 'Bánh xèo', rating: 4.7 }], nearbyAttractions: [{ name: 'Phố Bùi Viện', distance: '1km' }] },
      { id: 'hcm-5', name: 'Bảo tàng Chứng tích', description: 'Lịch sử chiến tranh.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7795, lng: 106.6922, rating: 4.9, category: 'History', goldenHours: '14:30 - 16:30', goldenHourReason: 'Thời điểm ít đông đúc nhất.', nearbyRestaurants: [{ name: 'Workshop Coffee', dish: 'Coffee', rating: 4.8 }], nearbyAttractions: [{ name: 'Dinh Độc Lập', distance: '0.6km' }] },
      { id: 'hcm-6', name: 'Phố đi bộ Nguyễn Huệ', description: 'Quảng trường hiện đại.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7745, lng: 106.7035, rating: 4.8, category: 'Entertainment', goldenHours: '19:30 - 21:00', goldenHourReason: 'Nhịp sống sôi động, xem nhạc nước.', nearbyRestaurants: [{ name: 'Chung cư 42', dish: 'Trà sữa', rating: 4.7 }], nearbyAttractions: [{ name: 'UBND TP', distance: '0.1km' }] },
      { id: 'hcm-7', name: 'Landmark 81', description: 'Tòa nhà cao nhất VN.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7951, lng: 106.7218, rating: 4.8, category: 'Entertainment', goldenHours: '17:30 - 19:00', goldenHourReason: 'Ngắm thành phố lúc rực sáng.', nearbyRestaurants: [{ name: 'Ussina', dish: 'Bò Wagyu', rating: 4.6 }], nearbyAttractions: [{ name: 'Công viên Vinhomes', distance: '0.1km' }] },
      { id: 'hcm-8', name: 'Bitexco', description: 'Biểu tượng hoa sen.', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600', lat: 10.7715, lng: 106.7045, rating: 4.7, category: 'Entertainment', goldenHours: '18:00 - 20:00', goldenHourReason: 'Ngắm đèn khu quận 1 từ tầng cao.', nearbyRestaurants: [{ name: 'EON51', dish: 'Cocktail', rating: 4.5 }], nearbyAttractions: [{ name: 'Sông Sài Gòn', distance: '0.2km' }] }
    ]
  },
  {
    id: 'phuquoc',
    name: 'Phú Quốc',
    region: Region.SOUTH,
    lat: 10.2289,
    lng: 103.9572,
    zoom: 11,
    description: 'Đảo Ngọc xinh đẹp.',
    image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=800',
    rating: 4.9,
    bestTime: 'Tháng 11 - Tháng 4',
    specialties: ['Gỏi cá trích', 'Bún quậy'],
    attractions: [
      { id: 'pq-1', name: 'VinWonders & Safari', description: 'Tổ hợp vui chơi Safari.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.3345, lng: 103.8555, rating: 5.0, category: 'Entertainment', goldenHours: '09:00 - 11:00', goldenHourReason: 'Thú hoạt động mạnh nhất sáng sớm.', nearbyRestaurants: [{ name: 'The Giraffe', dish: 'Burger', rating: 4.4 }], nearbyAttractions: [{ name: 'Grand World', distance: '2km' }] },
      { id: 'pq-2', name: 'Grand World', description: 'Thành phố không ngủ.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.3315, lng: 103.8575, rating: 4.7, category: 'Entertainment', goldenHours: '20:00 - 21:30', goldenHourReason: 'Show Tinh hoa Việt Nam rực rỡ.', nearbyRestaurants: [{ name: 'Phố hải sản', dish: 'Ghẹ', rating: 4.5 }], nearbyAttractions: [{ name: 'Gấu Teddy', distance: '0.1km' }] },
      { id: 'pq-3', name: 'Cáp treo Hòn Thơm', description: 'Cáp treo dài nhất thế giới.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 9.9985, lng: 104.0125, rating: 4.9, category: 'Nature', goldenHours: '16:30 - 17:30', goldenHourReason: 'Hoàng hôn từ cabin vượt biển.', nearbyRestaurants: [{ name: 'Buffet Hòn Thơm', dish: 'Hải sản', rating: 4.3 }], nearbyAttractions: [{ name: 'Aquatopia', distance: '0.1km' }] },
      { id: 'pq-4', name: 'Bãi Sao', description: 'Cát trắng mịn như kem.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.0575, lng: 104.0375, rating: 4.8, category: 'Nature', goldenHours: '08:00 - 10:00', goldenHourReason: 'Nước biển xanh ngọc bích rõ nhất.', nearbyRestaurants: [{ name: 'Mỹ Lan', dish: 'Gỏi cá trích', rating: 4.4 }], nearbyAttractions: [{ name: 'Mũi Ông Đội', distance: '3km' }] },
      { id: 'pq-5', name: 'Chùa Hộ Quốc', description: 'Thiền viện hướng biển.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.0875, lng: 104.0555, rating: 4.8, category: 'History', goldenHours: '05:30 - 06:30', goldenHourReason: 'Đón bình minh rực rỡ từ cửa thiền.', nearbyRestaurants: [{ name: 'Trúc Lâm', dish: 'Bún quậy', rating: 4.6 }], nearbyAttractions: [{ name: 'Bãi Khem', distance: '5km' }] },
      { id: 'pq-6', name: 'Nhà tù Phú Quốc', description: 'Di tích lịch sử.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.0455, lng: 104.0175, rating: 4.7, category: 'History', goldenHours: '09:00 - 10:30', goldenHourReason: 'Mát mẻ để thăm quan ngoài trời.', nearbyRestaurants: [{ name: 'Út Lượm', dish: 'Bún kèn', rating: 4.5 }], nearbyAttractions: [{ name: 'Nhà thùng Nước mắm', distance: '1km' }] },
      { id: 'pq-7', name: 'Chợ đêm', description: 'Thiên đường ẩm thực.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.2175, lng: 103.9575, rating: 4.6, category: 'Food', goldenHours: '19:30 - 21:00', goldenHourReason: 'Hải sản nướng thơm nức cả khu phố.', nearbyRestaurants: [{ name: 'Quán Việt', dish: 'Gỏi cá trích', rating: 4.7 }], nearbyAttractions: [{ name: 'Dinh Cậu', distance: '0.5km' }] },
      { id: 'pq-8', name: 'Sunset Sanato', description: 'Nghệ thuật bên bờ biển.', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600', lat: 10.1655, lng: 103.9675, rating: 4.7, category: 'Entertainment', goldenHours: '17:00 - 18:30', goldenHourReason: 'Địa điểm ngắm mặt trời lặn nổi tiếng nhất.', nearbyRestaurants: [{ name: 'Sunset Cafe', dish: 'Cocktail', rating: 4.4 }], nearbyAttractions: [{ name: 'Bãi Trường', distance: '0.1km' }] }
    ]
  }
];

export const FOOD_LIST: Food[] = [
  {
    id: 'f1',
    name: 'Phở Bò',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=600',
    description: 'Phở bò Hà Nội thanh cảnh, tinh tế với bánh phở mềm và nước dùng ngọt từ xương.',
    priceRange: '45,000 - 90,000 VND',
    type: 'Street Food',
    tags: ['Hanoi', 'Signature'],
    recommendedPlaces: [
      { name: 'Phở Bát Đàn', address: '49 Bát Đàn, Hà Nội', phone: '024 3828 0124' },
      { name: 'Phở Thìn Lò Đúc', address: '13 Lò Đúc, Hà Nội', phone: '097 508 19 86' }
    ]
  },
  {
    id: 'f_hanoi_bc',
    name: 'Bún Chả Hà Nội',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600',
    description: 'Thịt nướng xém cạnh thơm phức, nước chấm chua ngọt đặc trưng Hà Nội.',
    priceRange: '40,000 - 100,000 VND',
    type: 'Street Food',
    tags: ['Hanoi', 'Must-try'],
    recommendedPlaces: [
      { name: 'Bún chả Hương Liên', address: '24 Lê Văn Hưu, Hà Nội', phone: '024 3943 4106' },
      { name: 'Bún chả Cửa Đông', address: '41 Cửa Đông, Hà Nội', phone: '090 458 91 91' }
    ]
  },
  {
    id: 'f3',
    name: 'Bún Bò Huế',
    region: Region.CENTRAL,
    image: 'https://images.unsplash.com/photo-1620216447192-d61053df28d8?q=80&w=600',
    description: 'Nước dùng đậm đà vị mắm ruốc, sả và ớt, linh hồn ẩm thực Cố Đô.',
    priceRange: '40,000 - 80,000 VND',
    type: 'Restaurant',
    tags: ['Hue', 'Spicy'],
    recommendedPlaces: [
      { name: 'Bún bò Huế Mỹ Tâm', address: '24 Lê Duẩn, Huế', phone: '090 523 00 24' },
      { name: 'Bún bò Huế O Phụng', address: '5 Nguyễn Du, Huế', phone: '093 516 33 22' }
    ]
  },
  {
    id: 'f6',
    name: 'Mì Quảng',
    region: Region.CENTRAL,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=600',
    description: 'Sợi mì vàng óng, nước lèo xâm xấp, ăn kèm bánh tráng nướng giòn rụm.',
    priceRange: '30,000 - 60,000 VND',
    type: 'Street Food',
    tags: ['Danang', 'Quang Nam'],
    recommendedPlaces: [
      { name: 'Mì Quảng Ếch Bếp Trang', address: '24 Pasteur, Đà Nẵng', phone: '090 658 83 23' },
      { name: 'Mì Quảng Bà Mua', address: '19 Trần Bình Trọng, Đà Nẵng', phone: '098 500 00 75' }
    ]
  },
  {
    id: 'f4',
    name: 'Cơm Tấm Sài Gòn',
    region: Region.SOUTH,
    image: 'https://images.unsplash.com/photo-1555948256-2a4074828100?q=80&w=600',
    description: 'Sườn nướng mật ong thơm ngất, bì thính, chả trứng hấp, linh hồn người Sài Gòn.',
    priceRange: '35,000 - 150,000 VND',
    type: 'Restaurant',
    tags: ['Saigon', 'Signature'],
    recommendedPlaces: [
      { name: 'Cơm tấm Ba Ghiền', address: '84 Đặng Văn Ngữ, Phú Nhuận, HCM', phone: '028 3846 1073' },
      { name: 'Cơm tấm Kiều Giang', address: '192 Trần Quang Khải, Q1, HCM', phone: '028 3848 4249' }
    ]
  },
  {
    id: 'f10',
    name: 'Chả Mực Hạ Long',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=600',
    description: 'Mực tươi giã tay công phu, chiên vàng thơm nức, đặc sản vùng Vịnh.',
    priceRange: '350,000 - 500,000 VND/kg',
    type: 'Restaurant',
    tags: ['Halong', 'Seafood'],
    recommendedPlaces: [
      { name: 'Chả mực Quang Phong', address: 'Kiot 46, chợ Hạ Long 1, Quảng Ninh', phone: '097 864 66 99' },
      { name: 'Chả mực Thoan', address: 'Kiot 36, chợ Hạ Long 1, Quảng Ninh', phone: '0203 362 56 10' }
    ]
  },
  {
    id: 'f11',
    name: 'Bún Cá Sứa Nha Trang',
    region: Region.CENTRAL,
    image: 'https://images.unsplash.com/photo-1596395817188-511f07578746?q=80&w=600',
    description: 'Sứa trắng giòn sần sật, nước dùng cá dầm thanh mát đặc trưng xứ Trầm.',
    priceRange: '35,000 - 60,000 VND',
    type: 'Street Food',
    tags: ['Nhatrang', 'Fresh'],
    recommendedPlaces: [
      { name: 'Bún cá Nguyên Loan', address: '123 Ngô Gia Tự, Nha Trang', phone: '0258 351 01 96' },
      { name: 'Bún cá lá Ninh Hòa', address: '02 Lãn Ông, Nha Trang', phone: '0258 381 21 82' }
    ]
  },
  {
    id: 'f_saigon_bm',
    name: 'Bánh Mì Sài Gòn',
    region: Region.SOUTH,
    image: 'https://images.unsplash.com/photo-1620216447192-d61053df28d8?q=80&w=600',
    description: 'Ổ bánh mì giòn tan với pate béo ngậy, thịt nguội, bơ và dưa chua.',
    priceRange: '15,000 - 65,000 VND',
    type: 'Street Food',
    tags: ['Saigon', 'Global'],
    recommendedPlaces: [
      { name: 'Bánh mì Huỳnh Hoa', address: '26 Lê Thị Riêng, Q1, HCM', phone: '028 3925 3153' },
      { name: 'Bánh mì Hồng Hoa', address: '54 Nguyễn Văn Tráng, Q1, HCM', phone: '090 311 01 23' }
    ]
  },
  {
    id: 'f12',
    name: 'Bún Quậy Phú Quốc',
    region: Region.SOUTH,
    image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=600',
    description: 'Trải nghiệm tự pha nước chấm độc đáo, chả tôm mực xay tươi tại chỗ.',
    priceRange: '40,000 - 80,000 VND',
    type: 'Restaurant',
    tags: ['Phuquoc', 'Unique'],
    recommendedPlaces: [
      { name: 'Bún Quậy Kiến Xây', address: '28 Bạch Đằng, Phú Quốc', phone: '093 333 11 11' },
      { name: 'Bún Quậy Thanh Hùng', address: '75 Ba Mươi Tháng Tư, Phú Quốc', phone: '091 111 22 22' }
    ]
  },
  {
    id: 'f13',
    name: 'Cao Lầu Hội An',
    region: Region.CENTRAL,
    image: 'https://images.unsplash.com/photo-1616484173745-07f25fd0547f?q=80&w=600',
    description: 'Sợi mì tro giòn dai, thịt xá xíu đậm đà, hương vị cổ kính của Hội An.',
    priceRange: '35,000 - 55,000 VND',
    type: 'Street Food',
    tags: ['Hoian', 'Heritage'],
    recommendedPlaces: [
      { name: 'Cao lầu Thanh', address: '26 Thái Phiên, Hội An', phone: '090 511 22 33' },
      { name: 'Cao lầu Trung Bắc', address: '87 Trần Phú, Hội An', phone: '0235 386 14 62' }
    ]
  },
  {
    id: 'f14',
    name: 'Bánh Xèo Miền Tây',
    region: Region.SOUTH,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600',
    description: 'Vỏ bánh vàng giòn, nhân tôm thịt giá đỗ, cuộn cùng hàng chục loại rau rừng.',
    priceRange: '25,000 - 60,000 VND',
    type: 'Restaurant',
    tags: ['South', 'Crispy'],
    recommendedPlaces: [
      { name: 'Bánh xèo Mười Xiềm', address: '190 Nam Kỳ Khởi Nghĩa, Q3, HCM', phone: '028 3933 0207' },
      { name: 'Bánh xèo 46A', address: '46A Đinh Công Tráng, Q1, HCM', phone: '028 3824 3934' }
    ]
  },
  {
    id: 'f15',
    name: 'Chả Cá Lã Vọng',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=600',
    description: 'Cá lăng nướng vàng trên mỡ sôi cùng thì là và hành lá, tinh túy Hà Thành.',
    priceRange: '150,000 - 250,000 VND',
    type: 'Fine Dining',
    tags: ['Hanoi', 'Legacy'],
    recommendedPlaces: [
      { name: 'Chả Cá Lã Vọng Nguyễn Trường Tộ', address: '107 Nguyễn Trường Tộ, Hà Nội', phone: '024 3823 9875' },
      { name: 'Vua Chả Cá', address: '26C Trần Hưng Đạo, Hà Nội', phone: '096 175 32 32' }
    ]
  },
  {
    id: 'f16',
    name: 'Bánh Cuốn Thanh Trì',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1620216447192-d61053df28d8?q=80&w=600',
    description: 'Lớp bánh mỏng tang như lụa, thoảng hương gạo mới, ăn kèm chả quế.',
    priceRange: '25,000 - 50,000 VND',
    type: 'Street Food',
    tags: ['Hanoi', 'Silk'],
    recommendedPlaces: [
      { name: 'Bánh cuốn bà Hoành', address: '66 Tô Hiến Thành, Hà Nội', phone: '024 3976 1325' },
      { name: 'Bánh cuốn Thanh Vân', address: '81 Lê Văn Hưu, Hà Nội', phone: '098 123 45 67' }
    ]
  },
  {
    id: 'f17',
    name: 'Bún Đậu Mắm Tôm',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600',
    description: 'Đậu rán giòn, bún lá, thịt chân giò luộc, và mắm tôm nồng nàn.',
    priceRange: '35,000 - 70,000 VND',
    type: 'Street Food',
    tags: ['Hanoi', 'Flavorful'],
    recommendedPlaces: [
      { name: 'Bún đậu mắm tôm Trung Yên', address: '8 Ngõ Trung Yên, Hà Nội', phone: '091 222 33 44' },
      { name: 'Bún đậu Cây Đa', address: '235 Thụy Khuê, Hà Nội', phone: '094 555 66 77' }
    ]
  },
  {
    id: 'f18',
    name: 'Phở Khô Gia Lai',
    region: Region.CENTRAL,
    image: 'https://images.unsplash.com/photo-1620216447192-d61053df28d8?q=80&w=600',
    description: 'Phở "hai tô" độc đáo, bánh phở nhỏ dai cùng nước lèo thanh ngọt.',
    priceRange: '40,000 - 65,000 VND',
    type: 'Restaurant',
    tags: ['Gialai', 'Central Highlands'],
    recommendedPlaces: [
      { name: 'Phở khô Hồng', address: '22 Nguyễn Văn Trỗi, Pleiku', phone: '0269 382 52 14' },
      { name: 'Phở khô Ngọc Sơn', address: '15 Nguyễn Thái Học, Pleiku', phone: '0269 382 21 04' }
    ]
  },
  {
    id: 'f19',
    name: 'Bánh Đa Cua Hải Phòng',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=600',
    description: 'Sợi bánh đa đỏ đặc sản, gạch cua béo ngậy, chả lá lốt thơm lừng.',
    priceRange: '30,000 - 60,000 VND',
    type: 'Street Food',
    tags: ['Haiphong', 'Local'],
    recommendedPlaces: [
      { name: 'Bánh đa cua Bà Cụ', address: '179 Cầu Đất, Hải Phòng', phone: '0225 359 26 23' },
      { name: 'Bánh đa cua Lạch Tray', address: '48 Lạch Tray, Hải Phòng', phone: '090 444 55 66' }
    ]
  },
  {
    id: 'f20',
    name: 'Gỏi Cá Trích Phú Quốc',
    region: Region.SOUTH,
    image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=800',
    description: 'Cá tươi lôi từ biển, trộn cùng dừa nạo và lạc rang, gói trọn hương vị đảo ngọc.',
    priceRange: '120,000 - 200,000 VND',
    type: 'Restaurant',
    tags: ['Phuquoc', 'Raw'],
    recommendedPlaces: [
      { name: 'Nhà hàng Ra Khơi', address: '131 Ba Mươi Tháng Tư, Phú Quốc', phone: '091 849 20 00' },
      { name: 'Nhà hàng Sông Xanh', address: 'Đường 30/4, Dương Đông, Phú Quốc', phone: '0297 370 29 29' }
    ]
  }
];

export const REGION_COLORS = {
  [Region.NORTH]: 'fill-red-400 hover:fill-red-500',
  [Region.CENTRAL]: 'fill-yellow-400 hover:fill-yellow-500',
  [Region.SOUTH]: 'fill-green-400 hover:fill-green-500'
};
