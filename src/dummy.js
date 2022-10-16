import React from 'react';
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineUser, AiOutlineGroup } from "react-icons/ai";
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