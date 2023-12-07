import {
  AttachMoney,
  LocalMall,
  ShoppingBasket,
  ShoppingCart,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
type IIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

interface ISubMenu {
  name: string;
  url: string;
  icon: IIcon;
}

interface ILink {
  name: string;
  url: string;
  icon: IIcon;
  submenu: ISubMenu[];
}

export const links: ILink[] = [
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Order",
        url: "/order",
        icon: ShoppingBasket,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
  {
    name: "Goods",
    url: "/goods",
    icon: LocalMall,
    submenu: [
      {
        name: "Price list",
        url: "/prices",
        icon: AttachMoney,
      },
    ],
  },
  {
    name: "Shop",
    url: "/shop",
    icon: ShoppingCart,
    submenu: [],
  },
];
