import { ArticleModel } from "@/app/lib/models";
import styles from "./ArticleCard.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { FONT_ABHAYA_LIBRE, FONT_PALANQUIN } from "@/app/lib/fonts";
import { formatDate } from "@/app/lib/utility_functions";
import { CATEGORIES } from "@/app/lib/constants";

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
  const formattedDate = formatDate(new Date(article.date));
  const category = CATEGORIES.find(
    (category) => category.type === article.category,
  );

  return (
    <Link
      className={
        largeStyle ? styles.ArticleCard_large : styles.ArticleCard_small
      }
      key={article.id}
      href={`/${article.article_url}`}
    >
      {showCategory ? (
        <p
          className={classNames(
            styles.ArticleCardCategoryLabel,
            FONT_PALANQUIN.className,
            styles[`${category?.type}-color`],
          )}
        >
          {" "}
          <Image
            className={styles.ArticleCardCategoryIcon}
            src={category?.icon}
            alt={`${category?.type}-icon`}
          />{" "}
          {category?.label}
        </p>
      ) : null}
      <div className={styles.ArticleCardImageContainer}>
        <Image
          className={styles.ArticleCardImage}
          src={article.thumbnail_small}
          alt={article.title}
          fill
        />
      </div>
      <div className={styles.ArticleCardDataContainer}>
        <p
          className={classNames(
            styles.ArticleCardDate,
            FONT_ABHAYA_LIBRE.className,
          )}
        >
          {formattedDate}
        </p>
        <h1
          className={classNames(
            styles.ArticleCardTitle,
            FONT_PALANQUIN.className,
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
