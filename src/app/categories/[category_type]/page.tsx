import { CATEGORIES } from "@/app/lib/constants";
import { CategoryModel } from "@/app/lib/models";
import CategoryDescription from "@/app/categories/[category_type]/CategoryDescription";
import React from "react";
import LargeArticleList from "@/app/ui/large-article-list/LargeArticleList";
import { MOCK_ARTICLES } from "@/app/lib/mock_data";

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

const CategoryTypePage = ({ params }: CategoryTypePageProps) => {
  const { category_type } = params;

  const category: CategoryModel | undefined = CATEGORIES.find(
    (cat) => cat.path === category_type,
  );

  if (!category) {
    return <>CATEGORY NOT FOUND // REMEMBER TO IMPLEMENT A 404 ERROR PAGE</>;
  }

  return (
    <>
      <CategoryDescription
        label={category.label}
        description={category.description}
      />

      <LargeArticleList
        article_list={MOCK_ARTICLES.filter((art) => {
          return art.category === category.type;
        })}
      />
    </>
  );
};

export default CategoryTypePage;
