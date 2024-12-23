export interface NavigationLinkModel {
  label: string;
  href: string;
  newTab?: boolean;
  isSelectorOption?: boolean;
}

export enum ArticleCategoriesEnum {
  DEVELOPING = "DEVELOPING",
  CLOUD = "CLOUD",
  LIFESTYLE = "LIFESTYLE",
  GAMEDEV = "GAMEDEV",
  DEVDIARY = "DEVDIARY",
  GRABBAG = "GRABBAG",
}

export interface ArticleModel {
  id: number;
  article_url: string;
  category: ArticleCategoriesEnum;
  date: Date;
  author: string;
  title: string;
  subtitle: string;
  thumbnail_large: string;
  thumbnail_small: string;
  tags: string[];
  article_content_location: string; //Direction in S3
  description: string;
  local_page_number: number;
  global_page_number: number;
}

export interface CategoryModel {
  type: ArticleCategoriesEnum;
  description: string;
  path: string;
  label: string;
  thumbnail: string;
}

export interface HeroElementModel {
  category: string;
  title: string;
  description: string;
  article_url: string;
}
