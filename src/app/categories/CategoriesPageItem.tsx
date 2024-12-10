import React from "react";
import styles from "./CategoriesPageItem.module.scss";
import { CategoryModel } from "../lib/models";
import Image from "next/image";
import Link from "next/link";

interface CategoriesPageItemProps {
  category: CategoryModel;
}

const CategoriesPageItem = ({ category }: CategoriesPageItemProps) => {
  return (
    <Link
      className={styles.CategoriesPageItem}
      href={`/categories/${category.path}`}
    >
      <Image
        src={category.thumbnail}
        alt={`${category.label}-thumbnail`}
        width={100}
        height={100}
      />
      <h1>{category.label}</h1>
      <p>{category.description}</p>
    </Link>
  );
};

export default CategoriesPageItem;
