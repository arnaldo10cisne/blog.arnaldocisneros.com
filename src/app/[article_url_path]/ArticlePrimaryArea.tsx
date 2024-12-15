import React from "react";
import { ArticleModel } from "../lib/models";
// import styles from './ArticlePage.module.scss'

interface ArticlePrimaryAreaProps {
  article: ArticleModel;
}

export const ArticlePrimaryArea = ({ article }: ArticlePrimaryAreaProps) => {
  return <section>{article.article_content}</section>;
};
