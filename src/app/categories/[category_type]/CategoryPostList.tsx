import { MOCK_ARTICLES } from "@/app/lib/mock_data";
import { ArticleCategoriesEnum } from "@/app/lib/models";
import React from "react";
import CategoryPostItem from "../../ui/article-card/ArticleCard";
import styles from "./CategoryPostList.module.scss";

interface CategoryPostListProps {
  type: ArticleCategoriesEnum;
}

const CategoryPostList = ({ type }: CategoryPostListProps) => {
  const articles = MOCK_ARTICLES.filter((art) => {
    return art.category === type;
  });

  return (
    <section className={styles.CategoryPostList}>
      {articles.map((art) => (
        <CategoryPostItem key={art.id} article={art} />
      ))}
    </section>
  );
};

export default CategoryPostList;
