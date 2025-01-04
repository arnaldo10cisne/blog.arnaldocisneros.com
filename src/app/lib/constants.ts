import { NavbarSelectorProps } from "../ui/navbar/NavbarSelector";
import {
  ArticleCategoriesEnum,
  CategoryModel,
  NavigationLinkModel,
  SocialMediaLink,
} from "./models";
import GITHUB_ICON from "./assets/svg/github_icon.svg";
import LINKEDIN_ICON from "./assets/svg/linkedin_logo.svg";
import X_ICON from "./assets/svg/x_icon.svg";
import GRABBAG_CATEGORY_ICON from "./assets/svg/grab-bag-icon-white.svg";
import LIFESTYLE_CATEGORY_ICON from "./assets/svg/lifestyle-icon-white.svg";
import GAMEDEV_CATEGORY_ICON from "./assets/svg/game-dev-icon-white.svg";
import DEVDIARY_CATEGORY_ICON from "./assets/svg/dev-diary-icon-white.svg";
import DEVELOPER_CATEGORY_ICON from "./assets/svg/developer-icon-white.svg";
import CLOUD_CATEGORY_ICON from "./assets/svg/cloud-icon-white.svg";
import BACKGROUND_IMAGE_MOCK from "./assets/mock-image.webp";

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

export const CATEGORY_DEVELOPING: CategoryModel = {
  type: ArticleCategoriesEnum.DEVELOPING,
  description: "Articles about Developing",
  path: `developing`,
  label: "Developing",
  thumbnail: BACKGROUND_IMAGE_MOCK,
  icon: DEVELOPER_CATEGORY_ICON,
};

export const CATEGORY_CLOUD: CategoryModel = {
  type: ArticleCategoriesEnum.CLOUD,
  description: "Articles about Cloud",
  path: `cloud`,
  label: "Cloud",
  thumbnail: BACKGROUND_IMAGE_MOCK,
  icon: CLOUD_CATEGORY_ICON,
};

export const CATEGORY_LIFESTYLE: CategoryModel = {
  type: ArticleCategoriesEnum.LIFESTYLE,
  description: "Articles about Lifestyle",
  path: `lifestyle`,
  label: "Lifestyle",
  thumbnail: BACKGROUND_IMAGE_MOCK,
  icon: LIFESTYLE_CATEGORY_ICON,
};

export const CATEGORY_GAMEDEV: CategoryModel = {
  type: ArticleCategoriesEnum.GAMEDEV,
  description: "Articles about Game Development",
  path: `gamedev`,
  label: "Game Development",
  thumbnail: BACKGROUND_IMAGE_MOCK,
  icon: GAMEDEV_CATEGORY_ICON,
};

export const CATEGORY_DEVDIARY: CategoryModel = {
  type: ArticleCategoriesEnum.DEVDIARY,
  description: "Articles about Developer diaries",
  path: `dev-diary`,
  label: "Developer Diary",
  thumbnail: BACKGROUND_IMAGE_MOCK,
  icon: DEVDIARY_CATEGORY_ICON,
};

export const CATEGORY_GRABBAG: CategoryModel = {
  type: ArticleCategoriesEnum.GRABBAG,
  description: "Articles with varied topics",
  path: `grab-bag`,
  label: "Grab Bag",
  thumbnail: BACKGROUND_IMAGE_MOCK,
  icon: GRABBAG_CATEGORY_ICON,
};

export const CATEGORIES: CategoryModel[] = [
  CATEGORY_DEVELOPING,
  CATEGORY_CLOUD,
  CATEGORY_LIFESTYLE,
  CATEGORY_GAMEDEV,
  CATEGORY_DEVDIARY,
  CATEGORY_GRABBAG,
];

export const TESTING_URL: string =
  "https://vm0a7v3r45.execute-api.us-east-1.amazonaws.com/testing/articles";

export const ARTICLES_PER_PAGE: number = 6;

export const GITHUB_LINK: SocialMediaLink = {
  label: "GitHub",
  href: "https://github.com/arnaldo10cisne",
  icon: GITHUB_ICON,
};

export const LINKEDIN_LINK: SocialMediaLink = {
  label: "Linkedin",
  href: "https://www.linkedin.com/in/arnaldo10cisne/",
  icon: LINKEDIN_ICON,
};

export const X_LINK: SocialMediaLink = {
  label: "X",
  href: "https://x.com/arnaldo10cisne",
  icon: X_ICON,
};

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  GITHUB_LINK,
  LINKEDIN_LINK,
  X_LINK,
];
