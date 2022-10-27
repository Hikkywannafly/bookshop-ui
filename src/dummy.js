import React from 'react';
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineUser, AiOutlineGroup } from "react-icons/ai";

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
        icon: <BsShopWindow />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShopping />,
      },
      {
        name: 'user',
        icon: <AiOutlineUser />,
      },
      {
        name: 'product',
        icon: <AiOutlineGroup />,

      }
    ],
  },
  // {
  //   title: 'Apps',
  //   links: [
  //     {
  //       name: 'calendar',
  //       icon: <AiOutlineCalendar />,
  //     },
  //     {
  //       name: 'kanban',
  //       icon: <BsKanban />,
  //     },
  //     {
  //       name: 'editor',
  //       icon: <FiEdit />,
  //     },
  //     {
  //       name: 'color-picker',
  //       icon: <BiColorFill />,
  //     },
  //   ],
  // },

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
    value: '700000-100000000',
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
