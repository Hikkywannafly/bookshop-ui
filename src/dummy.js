import React from 'react';
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineUser, AiOutlineGroup } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa"
export const CategoryListData = [
  {
    title: "Văn học",
    slug: "van-hoc",
    id: 1,
    subCategory: [
      {
        title: "Văn học nước ngoài",
        slug: "van-hoc-nuoc-ngoai",
        id: 1,
      },
      {
        title: "Văn học trong nước",
        slug: "van-hoc-trong-nuoc",
        id: 2,
      },
      {
        title: "Light Novel",
        slug: "light-novel",
        id: 3,
      },
      {
        title: "Tiểu thuyết",
        slug: "tieu-thuyet",
        id: 4,
      },
      {
        title: "Ngôn Tình",
        slug: "ngon-tinh",
        id: 5,
      },

    ]
  },
  {
    title: "Tâm lý - kĩ năng sống",
    slug: "tam-ly-ki-nang-song",
    id: 2,
    subCategory: [
      {
        title: "Tâm lý",
        slug: "tam-ly",
        id: 6,
      },
    ]
  },
  {
    title: "Kinh tế",
    slug: "kinh-te",
    id: 3,
    subCategory: [
      {
        title: "Kinh tế nước ngoài",
        slug: "kinh-te-nuoc-ngoai",
        id: 8,
      },
      {
        title: "Kinh tế trong nước",
        slug: "kinh-te-trong-nuoc",
        id: 7
      }

    ]
  },

  {
    title: "Sách thiếu nhi",
    slug: "sach-thieu-nhi",
    id: 4,
  },
  {
    title: "Giáo khoa - tham khảo",
    slug: "giao-khoa-tham-khao",
    id: 5,
  },
  {
    title: "Ngoại ngữ",
    slug: "ngoai-ngu",
    id: 6,
  }

]

export const links = [

  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        path: 'auth/ecommerce',
        icon: <MdSpaceDashboard className='text-base' />,

      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        path: 'auth/orders',
        icon: <IoBagHandleSharp className='text-base' />,

      },
      {
        name: 'user',
        path: 'auth/user',
        icon: <FaUserCircle className='text-base' />,
      },
      {
        name: 'product',
        path: 'auth/product',
        icon: <ImBook className='text-base' />,
        tool: [
          {
            name: 'Product List',
            path: 'auth/product',
          },
          {
            name: 'Add Product',
            path: 'auth/product/add-product',
          },
          {
            name: 'Categories',
            path: 'auth/product/categories',
          }
        ]

      }
    ],
  },
];

export const price = [
  {
    name: 'Dưới 100.000đ',
    value: '0-100000',
  },
  {
    name: '100.000đ - 300.000đ',
    value: '100000-300000',
  },

  {
    name: '300.000đ - 500.000đ',
    value: '300000-500000',
  },

  {
    name: '500.000đ - 700.000đ',
    value: '500000-700000',
  },
  {
    name: '700.000đ - Trở lên',
    value: '700000-999999999',
  }

]

export const from = [
  {
    name: `Bìa mềm`,
    value: 1,
  },
  {
    name: `Bìa cứng`,
    value: 2,
  },
  {
    name: `Full box`,
    value: 3,
  },
  {
    name: `Bìa bọc`,
    value: 4,
  },

]
export const sort = [
  {
    name: `Phổ biến`,
    value: 'popular',
  },
  {
    name: `Bán chạy nhất`,
    value: 'best',
  },
  {
    name: `Mới nhất`,
    value: 'newest'
  },
  {
    name: `Giá cao đến thấp`,
    value: `desc`,
  },
  {
    name: `Giá thấp đến cao`,
    value: `asc`,
  },
  {
    name: `Giảm giá nhiều nhất`,
    value: `sale`,
  }
]

export const fillter = [
  {
    title: 10,
    slug: 10,
  },
  {
    title: 20,
    slug: 20,
  },
  {
    title: 30,
    slug: 30,
  },
  {
    title: 40,
    slug: 40,
  },
]

export const suppliers = [
  {
    id: 1,
    name: 'NXB Trẻ',
  },
  {
    id: 2,
    name: 'NXB Kim Đồng',
  },
  {
    id: 3,
    name: 'NXB Thanh Niên'
  },
  {
    id: 4,
    name: 'NXB Văn Học',
  },
  {
    id: 5,
    name: 'Thái Hà',
  },
  {
    id: 6,
    name: 'Nhã Nam',
  },
  {
    id: 7,
    name: 'AZ',
  },
  {
    id: 8,
    name: 'SkyBooks',
  },
  {
    id: 9,
    name: 'NXB Phụ nữ',
  },
  {
    id: 10,
    name: 'Biết Nam',
  },
  {
    id: 11,
    name: 'NXB Thế Giới',
  },

]
export const authors = [
  { title: 'Nguyễn Nhật Ánh', id: 1 },
  { title: 'Nguyễn Chí Tâm', id: 2 },
  { title: 'Nam Cao', id: 3 },
  { title: 'Hikkywannafly', id: 4 },
]
export const languages = [
  { title: 'Tiếng Việt', value: 1 },
  { title: 'Tiếng Anh', value: 2 },
  { title: 'Tiếng Nhật', value: 7 },
  { title: 'Tiếng Pháp', value: 3 },
  { title: 'Tiếng Nga', value: 4 },
  { title: 'Tiếng Trung', value: 5 },
  { title: 'Tiếng Hàn', value: 6 },
]
export const publishers = [
  { title: 'NXB Trẻ', id: 1 },
  { title: 'NXB Kim Đồng', id: 2 },
  { title: 'NXB Thanh Niên', id: 3 },
  { title: 'NXB Văn Học', id: 4 },
  { title: 'Thái Hà', id: 5 },
  { title: 'Nhã Nam', id: 6 },
  { title: 'AZ', id: 7 },
  { title: 'SkyBooks', id: 8 },
  { title: 'NXB Phụ nữ', id: 9 },
  { title: 'Biết Nam', id: 10 },
  { title: 'NXB Thế Giới', id: 11 },
]

export const status = [
  {
    id: 0,
    name: 'Đang chờ',
    color: 'bg-yellow-100',
    text: 'text-yellow-700',
  },
  {
    id: 3,
    name: 'Đã duyệt',
    color: 'bg-green-100',
    text: 'text-green-700',
  },
  {
    id: 4,
    name: 'Hoàn thành',
    color: 'bg-blue-100',
    text: 'text-blue-700',
  },
  {
    id: 5,
    name: 'Đang giao hàng',
    color: 'bg-orange-100',
    text: 'text-orange-700',
  },
  {
    id: 7,
    name: 'Đã hủy',
    color: 'bg-red-100',
    text: 'text-red-700',
  },
];
export const statusOrder = [
  {
    name: "Tất cả",
    value: "all"
  },
  {
    name: "Đã duyệt",
    value: "approved"
  },
  {
    name: "Đang chờ",
    value: "pending"
  },
  {
    name: "Đã hủy",
    value: "canceled"
  },
  {
    name: "Đang giao hàng",
    value: "shipping"
  },
  {
    name: "Hoàn thành",
    value: "completed"
  },
]