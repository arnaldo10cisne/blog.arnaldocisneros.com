import { Metadata } from "next";
import React from "react";
import { LatestPostsPageDescription } from "./LatestPostsPageDescription";
import { LargeArticleList } from "../ui/large-article-list/LargeArticleList";
import { ArticleModel } from "../lib/models";
import { MOCK_ARTICLES } from "../lib/mock_data";
import styles from "./LatestPostsPage.module.scss";

export const metadata: Metadata = {
  title: "Latest Posts | Arnaldo Cisneros",
  description: "Latest Posts inblog",
};

const LatestPostsPage = () => {
  const latestsArticles: ArticleModel[] = MOCK_ARTICLES;
  return (
    <div className={styles.LatestPostsPage}>
      <LatestPostsPageDescription />
      <LargeArticleList article_list={latestsArticles} />
    </div>
  );
};
export default LatestPostsPage;
