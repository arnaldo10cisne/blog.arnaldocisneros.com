export interface NavigationLinkModel {
  label: string;
  href: string;
  newTab?: boolean;
  isSelectorOption?: boolean;
}

export enum ArticleCategoriesEnum {
  DEVELOPING,
  CLOUD,
  LIFESTYLE,
  GAMEDEV,
  DEVDIARY,
  GRABBAG,
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
