import React from "react";
import styles from "./LatestPosts_Section.module.scss";
import { ArticleCard } from "../../article-card/ArticleCard";
import { getLastestArticlesFromDynamoDB } from "@/app/lib/api_utils";
import { ArticleModel } from "@/app/lib/models";

export const LatestPosts_Section = async () => {
  const response = await getLastestArticlesFromDynamoDB({
    limit: 4,
  });
  const latestsArticles: ArticleModel[] = response.Items;

  return (
    <section className={styles.LatestPosts_Section}>
      <p>LatestPosts_Section</p>
      <div className={styles.ArticleList}>
        {latestsArticles.map((art) => (
          <ArticleCard key={art.id} article={art} />
        ))}
      </div>
    </section>
  );
};
