import React from "react";
import styles from "./CategoryDescription.module.scss";

interface CategoryDescriptionProps {
  label: string;
  description: string;
}

export const CategoryDescription = ({
  label,
  description,
}: CategoryDescriptionProps) => {
  return (
    <section className={styles.CategoryDescription}>
      <h1>{label}</h1>
      <p>{description}</p>
    </section>
  );
};
