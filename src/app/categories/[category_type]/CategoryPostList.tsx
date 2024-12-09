import { MOCK_ARTICLES } from "@/app/lib/mock_data";
import { ArticleCategoriesEnum } from "@/app/lib/models";
import React from "react";
import CategoryPostItem from "./CategoryPostItem";

interface CategoryPostListProps {
  type: ArticleCategoriesEnum;
}

const CategoryPostList = ({ type }: CategoryPostListProps) => {
  const articles = MOCK_ARTICLES.filter((art) => {
    return art.category === type;
  });

  return (
    <>
      {articles.map((art) => (
        <CategoryPostItem key={art.id} article={art} />
      ))}
    </>
  );
};

export default CategoryPostList;
