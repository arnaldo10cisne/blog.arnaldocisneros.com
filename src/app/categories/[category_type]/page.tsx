import { CATEGORIES } from "@/app/lib/constants";
import { CategoryModel } from "@/app/lib/models";
import React from "react";
import { LargeArticleList } from "@/app/ui/large-article-list/LargeArticleList";
import styles from "./CategoryTypePage.module.scss";
import { PageHeader } from "@/app/ui/pageHeader/PageHeader";

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

  return (
    <div className={styles.CategoryTypePage}>
      <PageHeader title={category.label} description={category.description} />

      <LargeArticleList category={category} />
    </div>
  );
};
export default CategoryTypePage;
