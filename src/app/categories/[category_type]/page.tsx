import { CATEGORIES } from "@/app/lib/constants";
import { CategoryModel } from "@/app/lib/models";
import CategoryTemplate from "@/app/ui/categories-components/CategoryTemplate";
import React from "react";

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

  console.log(await params);
  console.log(category_type);
  console.log(await category);

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

  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default CategoryTypePage;
