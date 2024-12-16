"use client";

import React from "react";
import styles from "./ArticlePrimaryArea.module.scss";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import TestingMarkdown from "../lib/assets/placeholder_article_local.mdx";

interface ArticlePrimaryAreaProps {
  mdxSource: MDXRemoteSerializeResult;
}

export const ArticlePrimaryArea = ({ mdxSource }: ArticlePrimaryAreaProps) => {
  return (
    <section className={styles.ArticlePrimaryArea}>
      {/* <TestingMarkdown /> */}
      <MDXRemote {...mdxSource} />
    </section>
  );
};
