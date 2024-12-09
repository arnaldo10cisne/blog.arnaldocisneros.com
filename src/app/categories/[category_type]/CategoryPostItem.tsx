import { ArticleModel } from "@/app/lib/models";
import styles from "./CategoryPostItem.module.scss";
import React from "react";
import Link from "next/link";

interface CategoryPostItemProps {
  article: ArticleModel;
}

const CategoryPostItem = ({ article }: CategoryPostItemProps) => {
  return (
    <Link
      className={styles.CategoryPostItem}
      key={article.id}
      href={`/${article.article_url_path}`}
    >
      {article.title}
    </Link>
  );
};

export default CategoryPostItem;
