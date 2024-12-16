"use client";

import React from "react";
import { ArticleModel } from "../lib/models";
import styles from "./ArticlePrimaryArea.module.scss";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import TestingMarkdown from "../lib/assets/placeholder_article_local.mdx";

interface ArticlePrimaryAreaProps {
  article: ArticleModel;
  mdxSource: MDXRemoteSerializeResult;
}

export const ArticlePrimaryArea = ({
  article,
  mdxSource,
}: ArticlePrimaryAreaProps) => {
  return (
    <section className={styles.ArticlePrimaryArea}>
      <p>{article.article_content}</p>
      {/* <TestingMarkdown /> */}
      <MDXRemote {...mdxSource} />
    </section>
  );
};
