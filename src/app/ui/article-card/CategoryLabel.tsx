import { CategoryModel } from "@/app/lib/models";
import styles from "./CategoryLabel.module.scss";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { FONT_PALANQUIN } from "@/app/lib/fonts";

interface CategoryLabelProps {
  category: CategoryModel;
}

export const CategoryLabel = ({ category }: CategoryLabelProps) => {
  return (
    <p
      className={classNames(
        styles.ArticleCardCategoryLabel,
        FONT_PALANQUIN.className,
        styles[`${category?.type}-color`],
      )}
    >
      {" "}
      <Image
        className={styles.ArticleCardCategoryIcon}
        src={category?.icon}
        alt={`${category?.type}-icon`}
      />{" "}
      {category?.label}
    </p>
  );
};
