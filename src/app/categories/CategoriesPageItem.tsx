import React from "react";
import styles from "./CategoriesPageItem.module.scss";
import { CategoryModel } from "../lib/models";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { FONT_PALANQUIN } from "../lib/fonts";
import { removeWhitespaces } from "../lib/utility_functions";

interface CategoriesPageItemProps {
  category: CategoryModel;
}

export const CategoriesPageItem = ({ category }: CategoriesPageItemProps) => {
  return (
    <Link
      className={styles.CategoriesPageItem}
      href={`/categories/${category.path}`}
    >
      <div className={classNames(styles.CategoriesPageItemImageContainer)}>
        <Image
          className={styles.CategoriesPageItemImage}
          src={category.thumbnail}
          alt={`${category.label}-thumbnail`}
          width={500}
          height={250}
        />
      </div>
      <div
        className={classNames(
          styles.CategoriesPageItemDataContainer,
          styles[`${removeWhitespaces(category.label)}-backgroundcolor`],
        )}
      >
        <h1
          className={classNames(
            styles.CategoriesPageItemTitle,
            FONT_PALANQUIN.className,
          )}
        >
          {category.label}
        </h1>
      </div>
    </Link>
  );
};
