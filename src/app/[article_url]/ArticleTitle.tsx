import React from "react";
import styles from "./ArticleTitle.module.scss";
import Image from "next/image";

interface ArticleTitleProps {
  title: string;
  subtitle: string;
  thumbnail_large: string;
}

export const ArticleTitle = ({
  title,
  subtitle,
  thumbnail_large,
}: ArticleTitleProps) => {
  return (
    <section className={styles.ArticleTitleSection}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Image
        src={thumbnail_large}
        alt="article-thumbnail"
        width={100}
        height={100}
      />
    </section>
  );
};
