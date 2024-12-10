import { ArticleModel } from "@/app/lib/models";
import styles from "./ArticleCard.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ArticleCard {
  article: ArticleModel;
  largeStyle?: boolean;
}

const ArticleCard = ({ article, largeStyle = false }: ArticleCard) => {
  return (
    <Link
      className={
        largeStyle ? styles.ArticleCard_large : styles.ArticleCard_small
      }
      key={article.id}
      href={`/${article.article_url_path}`}
    >
      <Image
        src={largeStyle ? article.thumbnail_large : article.thumbnail_small}
        alt={article.title}
        width={100}
        height={100}
      />
      <div>
        {largeStyle ? <p>{article.category}</p> : null}
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
