import React from "react";
import styles from "./LargeArticleList.module.scss";
import { ArticleModel } from "@/app/lib/models";
import { ArticleCard } from "../article-card/ArticleCard";

interface LargeArticleListProps {
  article_list: ArticleModel[];
  showCategory?: boolean;
}

export const LargeArticleList = ({
  article_list,
  showCategory = true,
}: LargeArticleListProps) => {
  return (
    <div className={styles.LargeArticleList}>
      {article_list.map((art) => (
        <ArticleCard
          key={art.id}
          article={art}
          largeStyle={true}
          showCategory={showCategory}
        />
      ))}
    </div>
  );
};
