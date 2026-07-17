
const sanPhamList = [
  {
    id: "dm-01",
    code: "DM-01",
    category: "vang",
    name: "Molly Vàng",
    price: 30000,
    priceText: "30.000₫ / cặp",
    stockStatus: "con-hang",
    stockNote: "Còn hàng — khoảng 150 cặp trong khay.",
    heroNote: "Còn khoảng 150 cặp trong khay",
    image: "mollygold.jpg",
    thumbs: ["mollygold.jpg", "mollylemon.jpg", "mollytrang.jpg"],
    specs: {
      "Kích thước": "2 – 3 cm (cá bột)",
      "Màu sắc": "Vàng ánh kim đều màu toàn thân",
      "Ngày cách ly": "5 ngày tại khay riêng",
      "Nhiệt độ nước phù hợp": "24 – 28°C",
      "Độ pH khuyến nghị": "7.0 – 8.2 (Molly ưa nước cứng nhẹ)",
      "Tính cách": "Hiền, bơi đàn, hợp bể cộng đồng"
    },
    careNote: "Molly Vàng ăn tạp, lên màu đẹp hơn khi cho ăn thêm trùn chỉ 2–3 lần/tuần. Tránh thay nước quá 30% một lần để cá không sốc."
  },
  {
    id: "dm-02",
    code: "DM-02",
    category: "chanh",
    name: "Molly Chanh",
    price: 28000,
    priceText: "28.000₫ / cặp",
    stockStatus: "con-hang",
    stockNote: "Còn hàng — khoảng 90 cặp trong khay.",
    heroNote: "Còn khoảng 90 cặp trong khay",
    image: "mollylemon.jpg",
    thumbs: ["mollylemon.jpg", "mollygold.jpg", "mollysakura.jpg"],
    specs: {
      "Kích thước": "2 – 3 cm (cá bột)",
      "Màu sắc": "Vàng chanh nhạt, ánh sáng dưới đèn",
      "Ngày cách ly": "5 ngày tại khay riêng",
      "Nhiệt độ nước phù hợp": "24 – 28°C",
      "Độ pH khuyến nghị": "7.0 – 8.2 (Molly ưa nước cứng nhẹ)",
      "Tính cách": "Hiền, năng động, hợp bể cộng đồng"
    },
    careNote: "Molly Chanh khá nhạy với nước mới thay, nên châm nước từ từ trong 15–20 phút đầu sau khi thả vào bể."
  },
  {
    id: "dm-03",
    code: "DM-03",
    category: "sakura",
    name: "Molly Sakura",
    price: 36000,
    priceText: "36.000₫ / cặp",
    stockStatus: "sap-het",
    stockNote: "Sắp hết — chỉ còn khoảng 30 cặp lứa này.",
    heroNote: "Còn khoảng 30 cặp lứa này",
    image: "mollysakura.jpg",
    thumbs: ["mollysakura.jpg", "mollygold.jpg", "mollytrang.jpg"],
    specs: {
      "Kích thước": "2 – 3 cm (cá bột)",
      "Màu sắc": "Cam pha trắng loang, vân riêng từng con",
      "Ngày cách ly": "5 ngày tại khay riêng",
      "Nhiệt độ nước phù hợp": "24 – 28°C",
      "Độ pH khuyến nghị": "7.0 – 8.2 (Molly ưa nước cứng nhẹ)",
      "Tính cách": "Hiền, bơi đàn, hợp bể cộng đồng"
    },
    careNote: "Molly Sakura hợp nước hơi cứng, có thể pha thêm ít muối hột loãng khi cá mới về để giảm sốc. Cho ăn ngày 2 lần, tránh cho ăn quá no trong 24 giờ đầu sau khi vận chuyển."
  },
  {
    id: "dm-04",
    code: "DM-04",
    category: "ho",
    name: "Molly Hổ",
    price: 40000,
    priceText: "40.000₫ / cặp",
    stockStatus: "hiem",
    stockNote: "Dòng hiếm — mỗi lứa chỉ ra khoảng 20 cặp đạt chuẩn.",
    heroNote: "Chỉ khoảng 20 cặp đạt chuẩn mỗi lứa",
    image: "mollytiger.jpg",
    thumbs: ["mollytiger.jpg", "mollygold.jpg", "mollysakura.jpg"],
    specs: {
      "Kích thước": "2 – 3 cm (cá bột)",
      "Màu sắc": "Vân sọc hổ đen vàng xen kẽ",
      "Ngày cách ly": "5 ngày tại khay riêng",
      "Nhiệt độ nước phù hợp": "24 – 28°C",
      "Độ pH khuyến nghị": "7.0 – 8.2 (Molly ưa nước cứng nhẹ)",
      "Tính cách": "Hiền nhưng hơi nhát, nên thả chung đàn đông"
    },
    careNote: "Molly Hổ là dòng hiếm, nên thả vào bể đã có vi sinh ổn định, tránh bể mới set-up chưa qua chu trình nitơ."
  },
  {
    id: "dm-05",
    code: "DM-05",
    category: "trang",
    name: "Molly Trắng",
    price: 32000,
    priceText: "32.000₫ / cặp",
    stockStatus: "con-hang",
    stockNote: "Còn hàng — khoảng 110 cặp trong khay.",
    heroNote: "Còn khoảng 110 cặp trong khay",
    image: "mollytrang.jpg",
    thumbs: ["mollytrang.jpg", "mollygold.jpg", "mollylemon.jpg"],
    specs: {
      "Kích thước": "2 – 3 cm (cá bột)",
      "Màu sắc": "Trắng bạch kim toàn thân",
      "Ngày cách ly": "5 ngày tại khay riêng",
      "Nhiệt độ nước phù hợp": "24 – 28°C",
      "Độ pH khuyến nghị": "7.0 – 8.2 (Molly ưa nước cứng nhẹ)",
      "Tính cách": "Hiền, bơi đàn, hợp bể cộng đồng"
    },
    careNote: "Molly Trắng dễ lộ vết bệnh ngoài da sớm hơn các dòng khác nên tiện để quan sát sức khoẻ cả đàn — thả vài con Trắng chung bể là mẹo hay của dân nuôi lâu năm."
  }
  
];

/* Cho phép script.js dùng lại trong Node nếu cần (không bắt buộc với web thuần) */
if (typeof module !== "undefined" && module.exports) {
  module.exports = sanPhamList;
}
