import { Metadata } from "next";
import React from "react";
import { LatestPostsPageDescription } from "./LatestPostsPageDescription";
import { LargeArticleList } from "../ui/large-article-list/LargeArticleList";
import { ArticleModel } from "../lib/models";
import styles from "./LatestPostsPage.module.scss";
import { getLastestArticlesFromDynamoDB } from "../lib/api_utils";

export const metadata: Metadata = {
  title: "Latest Posts | Arnaldo Cisneros",
  description: "Latest Posts inblog",
};

const LatestPostsPage = async () => {
  const response = await getLastestArticlesFromDynamoDB({
    page_number: 3,
  });
  const latestsArticles: ArticleModel[] = response.Items;

  return (
    <div className={styles.LatestPostsPage}>
      <LatestPostsPageDescription />
      <LargeArticleList article_list={latestsArticles} />
    </div>
  );
};
export default LatestPostsPage;
