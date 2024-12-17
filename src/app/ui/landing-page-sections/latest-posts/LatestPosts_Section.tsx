import React from "react";
import styles from "./LatestPosts_Section.module.scss";
import { ArticleCard } from "../../article-card/ArticleCard";
import { ArticleModel } from "@/app/lib/models";

interface LatestPosts_SectionProps {
  article_list: ArticleModel[];
}

export const LatestPosts_Section = ({
  article_list,
}: LatestPosts_SectionProps) => {
  return (
    <section className={styles.LatestPosts_Section}>
      <p>LatestPosts_Section</p>
      <div className={styles.ArticleList}>
        {article_list.map((art) => (
          <ArticleCard key={art.id} article={art} />
        ))}
      </div>
    </section>
  );
};
