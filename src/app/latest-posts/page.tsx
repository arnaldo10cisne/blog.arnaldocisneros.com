import { Metadata } from "next";
import React from "react";
import { LatestPostsPageDescription } from "./LatestPostsPageDescription";
import { LargeArticleList } from "../ui/large-article-list/LargeArticleList";
import styles from "./LatestPostsPage.module.scss";

export const metadata: Metadata = {
  title: "Latest Posts | Arnaldo Cisneros",
  description: "Latest Posts inblog",
};

const LatestPostsPage = async () => {
  return (
    <div className={styles.LatestPostsPage}>
      <LatestPostsPageDescription />
      <LargeArticleList />
    </div>
  );
};
export default LatestPostsPage;
