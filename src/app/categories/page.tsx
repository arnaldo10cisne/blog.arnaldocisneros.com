import { Metadata } from "next";
import React from "react";
import { CategoriesPageDescription } from "./CategoriesPageDescription";
import { CategoriesPageList } from "./CategoriesPageList";

export const metadata: Metadata = {
  title: "Categories | Arnaldo Cisneros",
  description: "Categories of articles",
};

const CategoriesPage = () => {
  return (
    <>
      <CategoriesPageDescription />
      <CategoriesPageList />
    </>
  );
};
export default CategoriesPage;
