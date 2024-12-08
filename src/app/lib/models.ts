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
  article_url_path: string;
  category: ArticleCategoriesEnum;
  date: Date;
  author: string;
  title: string;
  subtitle: string;
  thumbnail_large: string;
  thumbnail_small: string;
  tags: string[];
  article_content: string; //MDX for markdown with React components ?
  description: string;
}

export interface CategoryModel {
  type: ArticleCategoriesEnum;
  description: string;
  path: string;
  label: string;
  filter_function?: (type: ArticleCategoriesEnum) => ArticleModel[];
}
