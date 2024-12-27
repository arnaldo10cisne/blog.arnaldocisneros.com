import { Metadata } from "next";
import React from "react";
import { CategoriesPageList } from "./CategoriesPageList";
import { PageHeader } from "../ui/pageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Categories | Arnaldo Cisneros",
  description: "Categories of articles",
};

const CategoriesPage = () => {
  return (
    <>
      <PageHeader title={"Categories"} description={"Categories of articles"} />
      <CategoriesPageList />
    </>
  );
};
export default CategoriesPage;
