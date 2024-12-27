import { Metadata } from "next";
import React from "react";
import { LargeArticleList } from "../ui/large-article-list/LargeArticleList";
import styles from "./LatestPostsPage.module.scss";
import { PageHeader } from "../ui/pageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Latest Posts | Arnaldo Cisneros",
  description: "Latest Posts inblog",
};

const LatestPostsPage = async () => {
  return (
    <div className={styles.LatestPostsPage}>
      <PageHeader title={"Latest Posts"} description={"Latest Posts in blog"} />
      <LargeArticleList />
    </div>
  );
};
export default LatestPostsPage;
