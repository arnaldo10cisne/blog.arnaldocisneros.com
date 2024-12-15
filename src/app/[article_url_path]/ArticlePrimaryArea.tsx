import React from "react";
import { ArticleModel } from "../lib/models";
import styles from "./ArticlePrimaryArea.module.scss";
// import testingMarkdown from '../lib/assets/placeholder_article.md'

interface ArticlePrimaryAreaProps {
  article: ArticleModel;
}

export const ArticlePrimaryArea = ({ article }: ArticlePrimaryAreaProps) => {
  return (
    <section className={styles.ArticlePrimaryArea}>
      <p>{article.article_content}</p>
    </section>
  );
};
