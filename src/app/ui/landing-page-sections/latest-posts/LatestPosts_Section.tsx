import React from "react";
import styles from "./LatestPosts_Section.module.scss";
import { MOCK_ARTICLES } from "@/app/lib/mock_data";
import { ArticleCard } from "../../article-card/ArticleCard";

export const LatestPosts_Section = () => {
  const latest_articles = MOCK_ARTICLES.slice(0, 4);

  return (
    <section className={styles.LatestPosts_Section}>
      <p>LatestPosts_Section</p>
      <div className={styles.ArticleList}>
        {latest_articles.map((art) => (
          <ArticleCard key={art.id} article={art} />
        ))}
      </div>
    </section>
  );
};
