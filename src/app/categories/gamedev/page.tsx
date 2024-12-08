import CategoryTemplate from "@/app/ui/categories-utils/CategoryTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "GameDev Articles | Arnaldo Cisneros",
  description: "Gamedev articles",
};

const GameDev__page = () => {
  return (
    <>
      <CategoryTemplate />
    </>
  );
};

export default GameDev__page;
