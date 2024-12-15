import { Metadata } from "next";
import React from "react";
import { CategoriesPageDescription } from "./CategoriesPageDescription";
import { CategoriesPageList } from "./CategoriesPageList";

export const metadata: Metadata = {
  title: "Categories | Arnaldo Cisneros",
  description: "Categories of articles",
};

const Categories__page = () => {
  return (
    <>
      <CategoriesPageDescription />
      <CategoriesPageList />
    </>
  );
};
export default Categories__page;
