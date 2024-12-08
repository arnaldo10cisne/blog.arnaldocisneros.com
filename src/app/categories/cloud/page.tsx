import CategoryTemplate from "@/app/ui/categories-utils/CategoryTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cloud Articles | Arnaldo Cisneros",
  description: "Cloud articles",
};

const Cloud__page = () => {
  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default Cloud__page;
