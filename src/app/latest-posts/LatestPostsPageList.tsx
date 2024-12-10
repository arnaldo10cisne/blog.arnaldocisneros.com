import React from "react";
import styles from "./LatestPostsPageList.module.scss";
import { MOCK_ARTICLES } from "../lib/mock_data";
import { ArticleModel } from "../lib/models";
import ArticleCard from "../ui/article-card/ArticleCard";

const LatestPostsPageList = () => {
  const latestsArticles: ArticleModel[] = MOCK_ARTICLES;

  return (
    <div className={styles.LatestPostsPageList}>
      {latestsArticles.map((art) => (
        <ArticleCard key={art.id} article={art} largeStyle={true} />
      ))}
    </div>
  );
};

export default LatestPostsPageList;
