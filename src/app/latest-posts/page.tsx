import { Metadata } from "next";
import React from "react";
import LatestPostsPageDescription from "./LatestPostsPageDescription";
import LatestPostsPageList from "./LatestPostsPageList";

export const metadata: Metadata = {
  title: "Latest Posts | Arnaldo Cisneros",
  description: "Latest Posts inblog",
};

const LatestPosts__page = () => {
  return (
    <>
      <LatestPostsPageDescription />
      <LatestPostsPageList />
    </>
  );
};

export default LatestPosts__page;
