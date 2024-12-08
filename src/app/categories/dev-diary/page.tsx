import CategoryTemplate from "@/app/ui/categories-components/CategoryTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Developer Diary | Arnaldo Cisneros",
  description: "Dev Diary articles",
};

const DevDiary__page = () => {
  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default DevDiary__page;
