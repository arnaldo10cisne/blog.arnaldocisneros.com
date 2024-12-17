import { CATEGORIES } from "@/app/lib/constants";
import { ArticleModel, CategoryModel } from "@/app/lib/models";
import { CategoryDescription } from "@/app/categories/[category_type]/CategoryDescription";
import React from "react";
import { LargeArticleList } from "@/app/ui/large-article-list/LargeArticleList";
import styles from "./CategoryTypePage.module.scss";
import { getLastestArticlesFromDynamoDB } from "@/app/lib/api_utils";

interface CategoryTypePageProps {
  params: {
    category_type: string;
  };
}

export const generateMetadata = async ({ params }: CategoryTypePageProps) => {
  const { category_type } = params;

  const category: CategoryModel | undefined = CATEGORIES.find(
    (cat) => cat.path === category_type,
  );

  if (!category) {
    return {
      title: "Categoria no encontrada",
      description: "No se encontró la categoria solicitada.",
    };
  }

  return {
    title: `${category.label} Posts | Arnaldo Cisneros`,
    description: `${category.description}`,
  };
};

const CategoryTypePage = async ({ params }: CategoryTypePageProps) => {
  const { category_type } = params;

  const category: CategoryModel | undefined = CATEGORIES.find(
    (cat) => cat.path === category_type,
  );

  if (!category) {
    return <>CATEGORY NOT FOUND // REMEMBER TO IMPLEMENT A 404 ERROR PAGE</>;
  }

  const response = await getLastestArticlesFromDynamoDB({
    category: category.type,
    limit: 8,
    start_key: null,
  });
  const articles_list: ArticleModel[] = response.Items;

  return (
    <div className={styles.CategoryTypePage}>
      <CategoryDescription
        label={category.label}
        description={category.description}
      />

      <LargeArticleList article_list={articles_list} />
    </div>
  );
};
export default CategoryTypePage;
