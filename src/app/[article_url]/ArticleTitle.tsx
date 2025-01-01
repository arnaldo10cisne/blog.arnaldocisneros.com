import React from "react";
import styles from "./ArticleTitle.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { FONT_ABHAYA_LIBRE, FONT_PALANQUIN } from "../lib/fonts";

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
    <header className={styles.ArticleTitle}>
      <Image
        className={styles.Background}
        src={thumbnail_large}
        alt="article-thumbnail"
        width={1800}
        height={764}
      />
      <div className={classNames(styles.Foreground)}>
        <h1
          className={classNames(
            styles.ArticleTitleTitle,
            FONT_PALANQUIN.className,
          )}
        >
          {title}
        </h1>
        <p
          className={classNames(
            styles.ArticleTitleSubtitle,
            FONT_ABHAYA_LIBRE.className,
          )}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
};
