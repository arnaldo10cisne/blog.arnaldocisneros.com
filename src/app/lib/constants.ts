import { NavbarSelectorProps } from "../ui/navbar/NavbarSelector";
import {
  ArticleCategoriesEnum,
  CategoryModel,
  NavigationLinkModel,
} from "./models";

export const HOME_LINK: NavigationLinkModel = {
  label: "HOME",
  href: "/",
};

export const LATESTS_POSTS_LINK: NavigationLinkModel = {
  label: "LATEST POSTS",
  href: "/latest-posts",
};

export const ABOUT_LINK: NavigationLinkModel = {
  label: "ABOUT",
  href: "https://www.arnaldocisneros.com/",
  newTab: true,
};

export const CATEGORIES_LINK: NavigationLinkModel = {
  label: "CATEGORIES",
  href: "/categories",
};

export const DEVELOPING_LINK: NavigationLinkModel = {
  label: "DEVELOPING",
  href: "/categories/developing",
};

export const CLOUD_LINK: NavigationLinkModel = {
  label: "CLOUD",
  href: "/categories/cloud",
};

export const LIFESTYLE_LINK: NavigationLinkModel = {
  label: "LIFESTYLE",
  href: "/categories/lifestyle",
};

export const GAMEDEV_LINK: NavigationLinkModel = {
  label: "GAMEDEV",
  href: "/categories/gamedev",
};

export const DEVDIARY_LINK: NavigationLinkModel = {
  label: "DEV DIARY",
  href: "/categories/dev-diary",
};

export const THEGRABBAG_LINK: NavigationLinkModel = {
  label: "THE GRAB BAG",
  href: "/categories/grab-bag",
};

export const CATEGORIES_SELECTOR: NavbarSelectorProps = {
  link: CATEGORIES_LINK,
  optionsList: [
    DEVELOPING_LINK,
    CLOUD_LINK,
    LIFESTYLE_LINK,
    GAMEDEV_LINK,
    DEVDIARY_LINK,
    THEGRABBAG_LINK,
  ],
};

export const FOOTER_LINKS: NavigationLinkModel[] = [
  HOME_LINK,
  CATEGORIES_LINK,
  LATESTS_POSTS_LINK,
  ABOUT_LINK,
];

export const CATEGORIES: CategoryModel[] = [
  {
    type: ArticleCategoriesEnum.DEVELOPING,
    description: "Articles about Developing",
    path: `developing`,
    label: "Developing",
  },
  {
    type: ArticleCategoriesEnum.CLOUD,
    description: "Articles about Cloud",
    path: `cloud`,
    label: "Cloud",
  },
  {
    type: ArticleCategoriesEnum.LIFESTYLE,
    description: "Articles about Lifestyle",
    path: `lifestyle`,
    label: "Lifestyle",
  },
  {
    type: ArticleCategoriesEnum.GAMEDEV,
    description: "Articles about Game Development",
    path: `gamedev`,
    label: "Game Development",
  },
  {
    type: ArticleCategoriesEnum.DEVDIARY,
    description: "Articles about Developer diaries",
    path: `dev-diary`,
    label: "Developer Diary",
  },
  {
    type: ArticleCategoriesEnum.GRABBAG,
    description: "Articles with varied topics",
    path: `grab-bag`,
    label: "Grab Bag",
  },
];
