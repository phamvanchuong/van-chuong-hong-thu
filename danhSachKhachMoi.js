/* ================================================
   DANH SÁCH KHÁCH MỜI
   - ten:  tên hiển thị trên bìa thiệp
   - link: slug trên URL, ví dụ link "gia-dinh-hien"
     → https://phamvanchuong.github.io/van-chuong-hong-thu/gia-dinh-hien
   Chỉ dùng chữ thường không dấu, số và dấu gạch ngang cho link.
================================================ */
const danhSachKhachMoi = [
  {
    id: 1,
    ten: "Gia đình chị Lập",
    link: "gia-dinh-chi-lap",
  },
  {
    id: 2,
    ten: "Vợ chồng anh Phong",
    link: "vo-chong-anh-phong",
  },
  {
    id: 3,
    ten: "Vợ chồng chị Hà",
    link: "vo-chong-chi-ha",
  },
  {
    id: 4,
    ten: "Vợ chồng Xiêm",
    link: "vo-chong-xiem",
  },
  {
    id: 5,
    ten: "Vợ chồng Quyên",
    link: "vo-chong-quyen",
  },
  {
    id: 6,
    ten: "Gia đình Hiển",
    link: "gia-dinh-hien",
  },
  {
    id: 7,
    ten: "Gia đình Dương",
    link: "gia-dinh-duong",
  },
  {
    id: 8,
    ten: "Vợ chồng Thành Anh",
    link: "vo-chong-thanh-anh",
  },
  {
    id: 9,
    ten: "Bé Hiền",
    link: "be-hien",
  },
  {
    id: 10,
    ten: "Em Vân",
    link: "em-van",
  },
  {
    id: 11,
    ten: "Em Ly",
    link: "em-ly",
  },
  {
    id: 12,
    ten: "Bạn Hảo",
    link: "ban-hao",
  },
  {
    id: 13,
    ten: "Gia đình anh Minh",
    link: "gia-dinh-a-minh",
  },
  {
    id: 14,
    ten: "Gia đình anh Nhí",
    link: "gia-dinh-anh-nhi",
  },
  {
    id: 15,
    ten: "Anh Dũng",
    link: "anh-dung",
  },
  {
    id: 16,
    ten: "Gia đình anh 2 Long",
    link: "gia-dinh-anh-2-long",
  },
  {
    id: 17,
    ten: "Gia đình chị 3 Thu",
    link: "gia-dinh-chi-3-thu",
  },
  {
    id: 18,
    ten: "Gia đình chị 4 Sang",
    link: "gia-dinh-chi-4-sang",
  },
  {
    id: 19,
    ten: "Gia đình chị 5 Điểm",
    link: "gia-dinh-chi-5-diem",
  },
  {
    id: 20,
    ten: "Gia đình anh 2 Tiết",
    link: "gia-dinh-anh-2-tiet",
  },
  {
    id: 21,
    ten: "Gia đình chị 3 Trinh",
    link: "gia-dinh-chi-3-trinh",
  },
  {
    id: 22,
    ten: "Gia đình chị Trâm",
    link: "gia-dinh-chi-tram",
  },
  {
    id: 23,
    ten: "Gia đình anh Đen",
    link: "gia-dinh-anh-den",
  },
  {
    id: 24,
    ten: "Gia đình anh Duy",
    link: "gia-dinh-anh-duy",
  },
  {
    id: 25,
    ten: "Chị Bé",
    link: "chi-be",
  },
  {
    id: 26,
    ten: "Hải + người thương",
    link: "hai-va-nguoi-thuong",
  },
  {
    id: 27,
    ten: "Anh Thương + người thương",
    link: "anh-thuong-va-nguoi-thuong",
  },
  {
    id: 28,
    ten: "Gia đình anh Minh",
    link: "gia-dinh-anh-minh-2",
  },
  {
    id: 29,
    ten: "Chị Duyên + người thương",
    link: "chi-duyen-va-nguoi-thuong",
  },
  {
    id: 30,
    ten: "Em Định + người thương",
    link: "em-dinh-va-nguoi-thuong",
  },
  {
    id: 31,
    ten: "Gia đình em Trinh",
    link: "gia-dinh-em-trinh",
  },
  {
    id: 32,
    ten: "Em Ngọc + người thương",
    link: "em-ngoc-va-nguoi-thuong",
  },
  {
    id: 33,
    ten: "Em Tí + người thương",
    link: "em-ti-va-nguoi-thuong",
  },
  {
    id: 34,
    ten: "Em Diệu + người thương",
    link: "em-dieu-va-nguoi-thuong",
  },
  {
    id: 35,
    ten: "Em Lùn + người thương",
    link: "em-lun-va-nguoi-thuong",
  },
  {
    id: 36,
    ten: "Em Sơn + người thương",
    link: "em-son-va-nguoi-thuong",
  },
  {
    id: 37,
    ten: "Cháu Chí Vỹ + người thương",
    link: "chau-chi-vy-va-nguoi-thuong",
  },
  {
    id: 38,
    ten: "Chị Thuỷ",
    link: "chi-thuy",
  },
  {
    id: 39,
    ten: "Gia đình anh Thịnh",
    link: "gia-dinh-anh-thinh",
  },
  {
    id: 40,
    ten: "Gia đình anh Phương",
    link: "gia-dinh-anh-phuong",
  },
  {
    id: 41,
    ten: "Gia đình anh Thế Anh",
    link: "gia-dinh-anh-the-anh",
  },
  {
    id: 42,
    ten: "Gia đình anh Thanh",
    link: "gia-dinh-anh-thanh",
  },
  {
    id: 43,
    ten: "Gia đình anh Ân",
    link: "gia-dinh-anh-an",
  },
  {
    id: 44,
    ten: "Gia đình em Ái",
    link: "gia-dinh-em-ai",
  },
  {
    id: 45,
    ten: "Em Vũ + người thương",
    link: "em-vu-va-nguoi-thuong",
  },
  {
    id: 46,
    ten: "Em Kha + người thương",
    link: "em-kha-va-nguoi-thuong",
  },
  {
    id: 47,
    ten: "Gia đình chị Vi",
    link: "gia-dinh-chi-vi",
  },
  {
    id: 48,
    ten: "Gia đình em Thiên",
    link: "gia-dinh-em-thien",
  },
  {
    id: 49,
    ten: "Em Trúc + người thương",
    link: "em-truc-va-nguoi-thuong",
  },
  {
    id: 50,
    ten: "Em Phấn + người thương",
    link: "em-phan-va-nguoi-thuong",
  },
  {
    id: 51,
    ten: "Em Vương + người thương",
    link: "em-vuong-va-nguoi-thuong",
  },
  {
    id: 52,
    ten: "Em Duy + người thương",
    link: "em-duy-va-nguoi-thuong",
  },
  {
    id: 53,
    ten: "Bạn Đạt + người thương",
    link: "ban-dat-va-nguoi-thuong",
  },
  {
    id: 54,
    ten: "Gia đình bạn Bin",
    link: "gia-dinh-ban-bin",
  },
  {
    id: 55,
    ten: "Bạn Kiệt + người thương",
    link: "ban-kiet-va-nguoi-thuong",
  },
  {
    id: 56,
    ten: "Bạn Hậu + người thương",
    link: "ban-hau-va-nguoi-thuong",
  },
  {
    id: 57,
    ten: "Bạn Hà + người thương",
    link: "ban-ha-va-nguoi-thuong",
  },
  {
    id: 58,
    ten: "Bạn Hoàng + người thương",
    link: "ban-hoang-va-nguoi-thuong",
  },
  {
    id: 59,
    ten: "Bạn Nam + người thương",
    link: "ban-nam-va-nguoi-thuong",
  },
  {
    id: 60,
    ten: "Gia đình bạn Mến",
    link: "gia-dinh-ban-men",
  },
  {
    id: 61,
    ten: "Gia đình bạn Quà",
    link: "gia-dinh-ban-qua",
  },
  {
    id: 62,
    ten: "Bạn Diện",
    link: "ban-dien",
  },
  {
    id: 63,
    ten: "Bạn Giang",
    link: "ban-giang",
  },
  {
    id: 64,
    ten: "Bạn Phát",
    link: "ban-phat",
  },
  {
    id: 65,
    ten: "Gia đình anh Việt",
    link: "gia-dinh-anh-viet",
  },
]
