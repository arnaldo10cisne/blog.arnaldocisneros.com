import CategoryTemplate from "@/app/ui/categories-utils/CategoryTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lifestyle | Arnaldo Cisneros",
  description: "Lifestyle articles",
};

const Lifestyle__page = () => {
  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default Lifestyle__page;
