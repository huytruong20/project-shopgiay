// Dữ liệu sản phẩm cho Cloudflare Pages Functions.
// TỰ SINH từ shop.html — chỉnh sản phẩm ở shop.html rồi chạy lại scripts/gen-cf-data.mjs.
export const PRODUCTS = [
  {
    "id": 1,
    "name": "ASICS GEL-NIMBUS 26",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 4050000,
    "origPrice": null,
    "isNew": true,
    "sale": false,
    "rating": 4.8,
    "reviews": 342,
    "tagline": "Đệm tối đa",
    "img": "img/nimbus26.jpg",
    "desc": "GEL-NIMBUS 26 sử dụng công nghệ PureGEL cho bước tiếp đất mềm mại và đệm FF BLAST PLUS ECO siêu nhẹ, đàn hồi. Thân giày mesh kỹ thuật tự thích ứng với hình dạng bàn chân.",
    "colors": [
      {
        "n": "French Blue",
        "h": "#2d5da1",
        "g": "linear-gradient(135deg,#e8f0fa,#a3c4e8)"
      },
      {
        "n": "Black/Pure Silver",
        "h": "#222",
        "g": "linear-gradient(135deg,#e8e8ec,#b0b0b8)"
      },
      {
        "n": "Sunrise Red",
        "h": "#c73e3e",
        "g": "linear-gradient(135deg,#fae8e8,#e8a0a0)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44,
      45
    ],
    "specs": {
      "Trọng lượng": "290g",
      "Độ chênh": "8mm",
      "Đệm": "Tối đa",
      "Loại": "Neutral"
    }
  },
  {
    "id": 2,
    "name": "ASICS GEL-KAYANO 31",
    "cat": "Stability",
    "gender": "Unisex",
    "price": 4050000,
    "origPrice": null,
    "isNew": true,
    "sale": false,
    "rating": 4.7,
    "reviews": 518,
    "tagline": "Ổn định & Hỗ trợ",
    "img": "img/kayano31.jpg",
    "desc": "GEL-KAYANO 31 mang lại sự ổn định tuyệt vời với công nghệ 4D GUIDANCE SYSTEM. PureGEL ở gót hấp thụ lực tác động trong khi đế giữa FF BLAST PLUS ECO trả năng lượng hiệu quả.",
    "colors": [
      {
        "n": "Midnight Blue",
        "h": "#1a3366",
        "g": "linear-gradient(135deg,#e0e8f5,#8aa8d8)"
      },
      {
        "n": "Black/Electric Lime",
        "h": "#1a1a2e",
        "g": "linear-gradient(135deg,#e8f0d8,#a0c868)"
      },
      {
        "n": "Sheet Rock",
        "h": "#b8b4a8",
        "g": "linear-gradient(135deg,#f5f2ee,#d0ccc0)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44,
      45
    ],
    "specs": {
      "Trọng lượng": "305g",
      "Độ chênh": "10mm",
      "Đệm": "Tối đa",
      "Loại": "Stability"
    }
  },
  {
    "id": 3,
    "name": "ASICS GEL-CUMULUS 26",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 3290000,
    "origPrice": null,
    "isNew": false,
    "sale": false,
    "rating": 4.6,
    "reviews": 287,
    "tagline": "Thoải mái hàng ngày",
    "img": "img/cumulus26.jpg",
    "desc": "Giày tập luyện hàng ngày đa năng với đệm FF BLAST PLUS cho cảm giác mềm mại, đàn hồi. Thân giày mesh thoáng khí và vừa với chân thoải mái mọi khoảng cách.",
    "colors": [
      {
        "n": "Nature Bathing",
        "h": "#5a8c6e",
        "g": "linear-gradient(135deg,#e5f0e8,#a0c8a8)"
      },
      {
        "n": "Black/White",
        "h": "#222",
        "g": "linear-gradient(135deg,#e8e8ec,#b0b0b8)"
      },
      {
        "n": "Illusion Blue",
        "h": "#4a7eb5",
        "g": "linear-gradient(135deg,#e0ecf5,#90b8d8)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      44
    ],
    "specs": {
      "Trọng lượng": "275g",
      "Độ chênh": "8mm",
      "Đệm": "Trung bình",
      "Loại": "Neutral"
    }
  },
  {
    "id": 4,
    "name": "ASICS NOVABLAST 4",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 3540000,
    "origPrice": null,
    "isNew": true,
    "sale": false,
    "rating": 4.9,
    "reviews": 203,
    "tagline": "Đàn hồi & Năng động",
    "img": "img/novablast4.jpg",
    "desc": "Thiết kế để mỗi bước chạy đều thú vị. Đế giữa FF BLAST PLUS ECO tạo hiệu ứng bật như tram-po-lin, hình dạng rocker đẩy bạn tiến về phía trước.",
    "colors": [
      {
        "n": "Island Blue",
        "h": "#1a80b0",
        "g": "linear-gradient(135deg,#ddf0f8,#80c8e8)"
      },
      {
        "n": "Safety Yellow",
        "h": "#e8d82e",
        "g": "linear-gradient(135deg,#faf8e0,#e8d82e)"
      },
      {
        "n": "Black/Lime Zest",
        "h": "#1e1e32",
        "g": "linear-gradient(135deg,#e8f0d8,#a0c868)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44
    ],
    "specs": {
      "Trọng lượng": "260g",
      "Độ chênh": "8mm",
      "Đệm": "Cao",
      "Loại": "Neutral"
    }
  },
  {
    "id": 5,
    "name": "ASICS GT-2000 13",
    "cat": "Stability",
    "gender": "Unisex",
    "price": 3290000,
    "origPrice": null,
    "isNew": false,
    "sale": false,
    "rating": 4.5,
    "reviews": 412,
    "tagline": "Ổn định đáng tin cậy",
    "img": "img/gt2000.jpg",
    "desc": "Giày ổn định đáng tin cậy hỗ trợ chân sấp nhẹ mà không hy sinh sự thoải mái. Công nghệ LITETRUSS và hệ thống 3D GUIDANCE đảm bảo bước chuyển tiếp hiệu quả.",
    "colors": [
      {
        "n": "Blue Expanse",
        "h": "#3a6e9e",
        "g": "linear-gradient(135deg,#dde8f2,#90b8d0)"
      },
      {
        "n": "Black",
        "h": "#1a1a28",
        "g": "linear-gradient(135deg,#e0e0e4,#909098)"
      },
      {
        "n": "White/Coral",
        "h": "#f5f0ea",
        "g": "linear-gradient(135deg,#faf0ec,#e8a898)"
      }
    ],
    "sizes": [
      39,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      44,
      45
    ],
    "specs": {
      "Trọng lượng": "285g",
      "Độ chênh": "10mm",
      "Đệm": "Trung bình",
      "Loại": "Stability"
    }
  },
  {
    "id": 6,
    "name": "ASICS METASPEED SKY+",
    "cat": "Racing",
    "gender": "Unisex",
    "price": 6290000,
    "origPrice": null,
    "isNew": false,
    "sale": false,
    "rating": 4.9,
    "reviews": 96,
    "tagline": "Đua Elite Marathon",
    "img": "img/metaspeed.jpg",
    "desc": "Dành cho VĐV chạy sải bước dài theo đuổi kỷ lục cá nhân. Tấm carbon toàn bộ kết hợp FF TURBO PLUS mang lại hiệu suất trả năng lượng vượt trội cho ngày đua.",
    "colors": [
      {
        "n": "Sunrise Red",
        "h": "#d63636",
        "g": "linear-gradient(135deg,#fae0e0,#e88080)"
      },
      {
        "n": "Safety Yellow",
        "h": "#e8d82e",
        "g": "linear-gradient(135deg,#faf8e0,#ead020)"
      },
      {
        "n": "White/Sunrise",
        "h": "#f8f5f0",
        "g": "linear-gradient(135deg,#faf0e4,#f0a060)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      44
    ],
    "specs": {
      "Trọng lượng": "185g",
      "Độ chênh": "5mm",
      "Đệm": "Cao",
      "Loại": "Racing Flat"
    }
  },
  {
    "id": 7,
    "name": "ASICS MAGIC SPEED 4",
    "cat": "Racing",
    "gender": "Unisex",
    "price": 4290000,
    "origPrice": 5050000,
    "isNew": false,
    "sale": true,
    "rating": 4.7,
    "reviews": 178,
    "tagline": "Tập luyện tốc độ",
    "img": "img/magicspeed4.jpg",
    "desc": "Hiệu suất ngày đua với mức giá phù hợp tập luyện. Tấm carbon kết hợp FF BLAST PLUS mang lại hiệu quả trả năng lượng khi chạy tempo và đua.",
    "colors": [
      {
        "n": "Diva Pink",
        "h": "#d04080",
        "g": "linear-gradient(135deg,#fae0ec,#e888b0)"
      },
      {
        "n": "Hazard Green",
        "h": "#60c848",
        "g": "linear-gradient(135deg,#e4f5d8,#88d868)"
      },
      {
        "n": "Black/White",
        "h": "#1a1a2e",
        "g": "linear-gradient(135deg,#e4e4e8,#a0a0a8)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5
    ],
    "specs": {
      "Trọng lượng": "210g",
      "Độ chênh": "6mm",
      "Đệm": "Trung bình",
      "Loại": "Racing"
    }
  },
  {
    "id": 8,
    "name": "ASICS GEL-TRABUCO 12",
    "cat": "Trail",
    "gender": "Unisex",
    "price": 3540000,
    "origPrice": null,
    "isNew": false,
    "sale": false,
    "rating": 4.6,
    "reviews": 156,
    "tagline": "Chinh phục địa hình",
    "img": "img/trabuco12.jpg",
    "desc": "Giày trail hùng tốn với đế ngoài ASICSGRIP cho độ bám vượt trội trên địa hình kỹ thuật. Tấm bảo vệ đá chân khỏi vật nhọn trên đường rừng.",
    "colors": [
      {
        "n": "Nature Bathing",
        "h": "#4a7050",
        "g": "linear-gradient(135deg,#e0eee4,#90b898)"
      },
      {
        "n": "Rain Forest",
        "h": "#2e4a3e",
        "g": "linear-gradient(135deg,#d8e8de,#70a088)"
      },
      {
        "n": "Black/Orange",
        "h": "#222",
        "g": "linear-gradient(135deg,#e8e0d8,#c87838)"
      }
    ],
    "sizes": [
      39,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      44
    ],
    "specs": {
      "Trọng lượng": "310g",
      "Độ chênh": "8mm",
      "Đệm": "Trung bình",
      "Loại": "Trail"
    }
  },
  {
    "id": 9,
    "name": "ASICS GEL-EXCITE 10",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 2150000,
    "origPrice": 2500000,
    "isNew": false,
    "sale": true,
    "rating": 4.3,
    "reviews": 624,
    "tagline": "Giày chạy cơ bản",
    "img": "img/excite10.jpg",
    "desc": "Giày chạy hàng ngày giá tốt với đệm GEL ở gót. Thân giày mesh nhẹ và thoáng khí giữ chân mát mẻ khi chạy và tập luyện.",
    "colors": [
      {
        "n": "Black/White",
        "h": "#1e1e30",
        "g": "linear-gradient(135deg,#e4e4e8,#a0a0b0)"
      },
      {
        "n": "Piedmont Grey",
        "h": "#9898a0",
        "g": "linear-gradient(135deg,#f0f0f2,#b8b8c0)"
      },
      {
        "n": "Blue Bliss",
        "h": "#4880b8",
        "g": "linear-gradient(135deg,#e0ecf5,#88b0d8)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44,
      45,
      46
    ],
    "specs": {
      "Trọng lượng": "265g",
      "Độ chênh": "10mm",
      "Đệm": "Trung bình",
      "Loại": "Neutral"
    }
  },
  {
    "id": 10,
    "name": "ASICS SUPERBLAST 2",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 5050000,
    "origPrice": null,
    "isNew": true,
    "sale": false,
    "rating": 4.8,
    "reviews": 89,
    "tagline": "Trả năng lượng tối đa",
    "img": "img/superblast2.jpg",
    "desc": "Chiều cao stack dày nhất trong dòng ASICS mang lại hiệu quả trả năng lượng tối đa với đệm FF TURBO PLUS. Hình dạng rocker cong tạo bước chuyển đổi nhẹ nhàng.",
    "colors": [
      {
        "n": "Aquamarine",
        "h": "#38b0a0",
        "g": "linear-gradient(135deg,#ddf2f0,#80d0c8)"
      },
      {
        "n": "Bright Orange",
        "h": "#e87030",
        "g": "linear-gradient(135deg,#f5e8d8,#f0a868)"
      },
      {
        "n": "White/Lilac",
        "h": "#e8e0f0",
        "g": "linear-gradient(135deg,#f2eef8,#c8b0e0)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      44
    ],
    "specs": {
      "Trọng lượng": "245g",
      "Độ chênh": "5mm",
      "Đệm": "Tối đa",
      "Loại": "Neutral"
    }
  },
  {
    "id": 11,
    "name": "ASICS FUJI SPEED 3",
    "cat": "Trail",
    "gender": "Unisex",
    "price": 4050000,
    "origPrice": 4560000,
    "isNew": false,
    "sale": true,
    "rating": 4.5,
    "reviews": 102,
    "tagline": "Đua trail",
    "img": "img/fujispeed3.jpg",
    "desc": "Giày đua trail nhẹ được tạo ra cho tốc độ trên địa hình kỹ thuật. Tấm carbon tăng đẩy trong khi đế ngoài ASICSGRIP bám chắt trên bề mặt tối.",
    "colors": [
      {
        "n": "Nature Bathing",
        "h": "#507848",
        "g": "linear-gradient(135deg,#e0eed8,#98c088)"
      },
      {
        "n": "Black/Cherry",
        "h": "#1e1e2e",
        "g": "linear-gradient(135deg,#e8e0e0,#b87070)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43
    ],
    "specs": {
      "Trọng lượng": "225g",
      "Độ chênh": "5mm",
      "Đệm": "Thấp",
      "Loại": "Trail Racing"
    }
  },
  {
    "id": 12,
    "name": "ASICS GEL-1130",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 2790000,
    "origPrice": null,
    "isNew": false,
    "sale": false,
    "rating": 4.4,
    "reviews": 845,
    "tagline": "Retro di sản",
    "img": "img/gel1130.jpg",
    "desc": "Dáng giày Y2K mang tính biểu tượng trở lại với sự thoải mái hiện đại. Công nghệ đệm GEL kết hợp thiết kế thời 2000 cho đôi giày đa năng từ chạy bộ đến đường phố.",
    "colors": [
      {
        "n": "White/Clay Canyon",
        "h": "#f0e8d8",
        "g": "linear-gradient(135deg,#f8f4ee,#e0d0b0)"
      },
      {
        "n": "Pure Silver",
        "h": "#c0c0c8",
        "g": "linear-gradient(135deg,#f2f2f5,#c0c0c8)"
      },
      {
        "n": "Black",
        "h": "#1a1a28",
        "g": "linear-gradient(135deg,#e0e0e4,#909098)"
      }
    ],
    "sizes": [
      38,
      38.5,
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44,
      45
    ],
    "specs": {
      "Trọng lượng": "310g",
      "Độ chênh": "10mm",
      "Đệm": "Trung bình",
      "Loại": "Retro"
    }
  },
  {
    "id": 13,
    "name": "ASICS NOOSA TRI 16",
    "cat": "Racing",
    "gender": "Unisex",
    "price": 3890000,
    "origPrice": null,
    "isNew": true,
    "sale": false,
    "rating": 4.7,
    "reviews": 165,
    "tagline": "Triathlon & Tốc độ",
    "img": "img/noosatri16.jpg",
    "desc": "Giày triathlon mang tính biểu tượng với thiết kế đầy màu sắc. FF BLAST PLUS ECO mang lại độ đàn hồi và nhẹ, thân giày mesh thoáng khí khô nhanh lý tưởng cho chuyển tiếp T2.",
    "colors": [
      {
        "n": "Huddle Yellow",
        "h": "#d4c84a",
        "g": "linear-gradient(135deg,#f8f5d8,#e8d848)"
      },
      {
        "n": "Hot Pink",
        "h": "#e84080",
        "g": "linear-gradient(135deg,#fae0ec,#e878a8)"
      },
      {
        "n": "Island Blue",
        "h": "#2888c8",
        "g": "linear-gradient(135deg,#d8f0f8,#68b8e0)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44
    ],
    "specs": {
      "Trọng lượng": "235g",
      "Độ chênh": "8mm",
      "Đệm": "Trung bình",
      "Loại": "Triathlon"
    }
  },
  {
    "id": 14,
    "name": "ASICS METASPEED EDGE+",
    "cat": "Racing",
    "gender": "Unisex",
    "price": 6290000,
    "origPrice": null,
    "isNew": true,
    "sale": false,
    "rating": 4.8,
    "reviews": 74,
    "tagline": "Đua Elite - Bước ngắn",
    "img": "img/metaspeed-edge.jpg",
    "desc": "Dành cho VĐV chạy sải bước ngắn, tần số cao. Tấm carbon cộng hưởng kết hợp FF TURBO PLUS tối ưu hóa lực đẩy cho từng bước chạy. Thiết kế khí động học giúp giảm lực cản gió.",
    "colors": [
      {
        "n": "Safety Yellow",
        "h": "#c8b820",
        "g": "linear-gradient(135deg,#f8f5d0,#d8c830)"
      },
      {
        "n": "Sunrise Red",
        "h": "#e84040",
        "g": "linear-gradient(135deg,#fce0e0,#e87878)"
      },
      {
        "n": "Black",
        "h": "#1a1a28",
        "g": "linear-gradient(135deg,#e0e0e4,#909098)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      43.5,
      44
    ],
    "specs": {
      "Trọng lượng": "195g",
      "Độ chênh": "5mm",
      "Đệm": "Cao",
      "Loại": "Racing Flat"
    }
  },
  {
    "id": 15,
    "name": "ASICS SUPERBLAST 2 Green",
    "cat": "Neutral",
    "gender": "Unisex",
    "price": 5050000,
    "origPrice": 5690000,
    "isNew": false,
    "sale": true,
    "rating": 4.9,
    "reviews": 112,
    "tagline": "Năng lượng tối đa - Illuminate Green",
    "img": "img/superblast-green.jpg",
    "desc": "Phiên bản màu Illuminate Green nổi bật. Chiều cao stack dày nhất dòng ASICS với đệm FF TURBO PLUS trả năng lượng vượt trội. Đế ngoài ASICSGRIP bám tốt mọi địa hình.",
    "colors": [
      {
        "n": "Illuminate Green",
        "h": "#40c870",
        "g": "linear-gradient(135deg,#d8f5e4,#78e0a0)"
      },
      {
        "n": "Safety Yellow",
        "h": "#d8c828",
        "g": "linear-gradient(135deg,#f8f5d0,#e0d040)"
      },
      {
        "n": "White/Lilac",
        "h": "#e8e0f0",
        "g": "linear-gradient(135deg,#f2eef8,#c8b0e0)"
      }
    ],
    "sizes": [
      39,
      39.5,
      40,
      40.5,
      41,
      41.5,
      42,
      42.5,
      43,
      44,
      45
    ],
    "specs": {
      "Trọng lượng": "245g",
      "Độ chênh": "5mm",
      "Đệm": "Tối đa",
      "Loại": "Neutral"
    }
  }
];
