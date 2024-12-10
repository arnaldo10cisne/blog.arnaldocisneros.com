import React from "react";
import styles from "./CategoriesPageList.module.scss";
import { CATEGORIES } from "../lib/constants";
import CategoriesPageItem from "./CategoriesPageItem";

const CategoriesPageList = () => {
  return (
    <div className={styles.CategoriesPageList}>
      {CATEGORIES.map((category) => (
        <CategoriesPageItem key={category.label} category={category} />
      ))}
    </div>
  );
};

export default CategoriesPageList;
