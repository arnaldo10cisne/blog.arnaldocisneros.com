export interface NavigationLinkModel {
  label: string;
  href: string;
  newTab?: boolean;
  isSelectorOption?: boolean;
}

export interface ArticleModel {
  id: number;
  url_path: string;
  date: Date;
  author: string;
  title: string;
  subtitle: string;
  thumbnail_large: string;
  thumbnail_small: string;
  tags: string[];
  article_content: string; //MDX for markdown with React components ?
}
