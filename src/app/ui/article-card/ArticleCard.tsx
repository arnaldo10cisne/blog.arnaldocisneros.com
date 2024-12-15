import { ArticleModel } from "@/app/lib/models";
import styles from "./ArticleCard.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { FONT_NEWSREADER } from "@/app/lib/fonts";

interface ArticleCardProps {
  article: ArticleModel;
  largeStyle?: boolean;
  showCategory?: boolean;
}

export const ArticleCard = ({
  article,
  largeStyle = false,
  showCategory = true,
}: ArticleCardProps) => {
  return (
    <Link
      className={
        largeStyle ? styles.ArticleCard_large : styles.ArticleCard_small
      }
      key={article.id}
      href={`/${article.article_url_path}`}
    >
      <div className={styles.ArticleCardImageContainer}>
        <Image
          className={styles.ArticleCardImage}
          src={article.thumbnail_small}
          alt={article.title}
          fill
          // width={largeStyle ? 1500 : 768}
          // height={largeStyle ? 1000 : 512}
        />
      </div>
      <div className={styles.ArticleCardDataContainer}>
        {showCategory ? (
          <p className={styles.ArticleCardCategoryLabel}>{article.category}</p>
        ) : null}
        <h1
          className={classNames(
            styles.ArticleCardTitle,
            FONT_NEWSREADER.className,
          )}
        >
          {article.title}
        </h1>
        {largeStyle ? (
          <p className={styles.ArticleCardDescription}>{article.description}</p>
        ) : null}
      </div>
    </Link>
  );
};
