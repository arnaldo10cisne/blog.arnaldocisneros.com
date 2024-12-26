import { ArticleModel } from "@/app/lib/models";
import styles from "./ArticleCardLarge.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { FONT_ABHAYA_LIBRE, FONT_PALANQUIN } from "@/app/lib/fonts";
import { formatDate } from "@/app/lib/utility_functions";
import { CATEGORIES } from "@/app/lib/constants";
import { CategoryLabel } from "./CategoryLabel";

interface ArticleCardLargeProps {
  article: ArticleModel;
  showCategory?: boolean;
}

export const ArticleCardLarge = ({
  article,
  showCategory = true,
}: ArticleCardLargeProps) => {
  const formattedDate = formatDate(new Date(article.date));
  const category = CATEGORIES.find(
    (category) => category.type === article.category,
  );

  return (
    <Link
      className={styles.ArticleCardLarge}
      key={article.id}
      href={`/${article.article_url}`}
    >
      {showCategory && category ? <CategoryLabel category={category} /> : null}
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
        <p className={styles.ArticleCardDescription}>{article.description}</p>
      </div>
    </Link>
  );
};
