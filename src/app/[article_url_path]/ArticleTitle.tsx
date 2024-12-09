import React from "react";
import styles from "./ArticleTitle.module.scss";
import Image from "next/image";

interface ArticleTitleProps {
  title: string;
  subtitle: string;
  thumbnail_large: string;
}

const ArticleTitle = ({
  title,
  subtitle,
  thumbnail_large,
}: ArticleTitleProps) => {
  return (
    <section className={styles.ArticleTitleSection}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Image src={thumbnail_large} alt="ALT" width={100} height={100} />
    </section>
  );
};

export default ArticleTitle;
