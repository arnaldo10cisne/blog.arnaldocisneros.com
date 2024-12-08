import CategoryTemplate from "@/app/ui/categories-utils/CategoryTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Grab Bag | Arnaldo Cisneros",
  description: "Various articles",
};

const GrabBag__page = () => {
  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default GrabBag__page;
