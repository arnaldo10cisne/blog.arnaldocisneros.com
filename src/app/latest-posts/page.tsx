import { Metadata } from "next";
import React from "react";
import LatestPostsPageDescription from "./LatestPostsPageDescription";
import LargeArticleList from "../ui/large-article-list/LargeArticleList";
import { ArticleModel } from "../lib/models";
import { MOCK_ARTICLES } from "../lib/mock_data";

export const metadata: Metadata = {
  title: "Latest Posts | Arnaldo Cisneros",
  description: "Latest Posts inblog",
};

const LatestPosts__page = () => {
  const latestsArticles: ArticleModel[] = MOCK_ARTICLES;
  return (
    <>
      <LatestPostsPageDescription />
      <LargeArticleList article_list={latestsArticles} />
    </>
  );
};

export default LatestPosts__page;
