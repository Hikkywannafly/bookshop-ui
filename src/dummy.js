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
    subCategory: [
      {
        title: "Văn học nước ngoài",
        slug: "van-hoc-nuoc-ngoai",
      },
      {
        title: "Văn học trong nước",
        slug: "van-hoc-trong-nuoc",
      },
      {
        title: "Light Novel",
        slug: "light-novel",
      },
      {
        title: "Ngôn Tình",
        slug: "ngon-tinh",
      },
      {
        title: "Tiểu thuyết",
        slug: "tieu-thuyet",
      }
    ]
  },
  {
    title: "Kinh tế",
    slug: "kinh-te",
    subCategory: [
      {
        title: "Kinh tế nước ngoài",
        slug: "kinh-te-nuoc-ngoai",
      },
      {
        title: "Kinh tế trong nước",
        slug: "kinh-te-trong-nuoc",
      }

    ]
  },
  {
    title: "Tâm lý - kĩ năng sống",
    slug: "tam-ly-ki-nang-song",
    subCategory: [
      {
        title: "Tâm lý",
        slug: "tam-ly",
      },
    ]
  },
  {
    title: "Sách thiếu nhi",
    slug: "sach-thieu-nhi",
  },
  {
    title: "Giáo khoa - tham khảo",
    slug: "giao-khoa-tham-khao",
  },
  {
    title: "Ngoại ngữ",
    slug: "ngoai-ngu",
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