import CategoryTemplate from "@/app/ui/categories-utils/CategoryTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Developing Articles | Arnaldo Cisneros",
  description: "Developing articles",
};

const Developing__page = () => {
  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default Developing__page;
