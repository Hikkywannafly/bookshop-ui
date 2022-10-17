import React from 'react';
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineUser, AiOutlineGroup } from "react-icons/ai";

export const CategoryListData = [
  {
    title: "Văn học",
    slug: "van-hoc",
  },
  {
    title: "Kinh tế",
    slug: "kinh-te",
  },
  {
    title: "Tâm lý - kĩ năng sống",
    slug: "tam-ly-ki-nang-song",
  },
  {
    title: "Sách thiếu nhi",
    slug: "sach-thieu-nhi",
  },
  {
    title: "Sách giáo khoa",
    slug: "sach-giao-khoa",
  },
  {
    title: "Sách ngoại ngữ",
    slug: "sach-ngoai-ngu",
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