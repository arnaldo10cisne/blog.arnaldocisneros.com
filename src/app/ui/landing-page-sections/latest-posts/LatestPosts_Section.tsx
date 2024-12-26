import React from "react";
import styles from "./LatestPosts_Section.module.scss";
import { ArticleCard } from "../../article-card/ArticleCard";
import { ArticleModel } from "@/app/lib/models";
import RIGTH_ARROW_ICON from "@/app/lib/assets/svg/arrow_icon.svg";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { FONT_PALANQUIN, FONT_ROBOTO } from "@/app/lib/fonts";

interface LatestPosts_SectionProps {
  article_list: ArticleModel[];
}

export const LatestPosts_Section = ({
  article_list,
}: LatestPosts_SectionProps) => {
  return (
    <section className={styles.LatestPosts_Section}>
      <div className={styles.LatestPosts_Section__Header}>
        <h1
          className={classNames(
            styles.LatestPosts_Section__Title,
            FONT_PALANQUIN.className,
          )}
        >
          LATEST POSTS
        </h1>
        <Link href="/latest-posts">
          <p
            className={classNames(
              styles.LatestPosts_Section__Link,
              FONT_ROBOTO.className,
            )}
          >
            Check them out!{" "}
            <span className={styles.LatestPosts_Section__LinkArrowContainer}>
              <Image
                src={RIGTH_ARROW_ICON}
                alt={`link-arrow`}
                width={19}
                height={19}
                className={styles.LatestPosts_Section__LinkArrow}
              />
            </span>
          </p>
        </Link>
      </div>
      <div className={styles.ArticleList}>
        {article_list.map((art) => (
          <ArticleCard key={art.id} article={art} />
        ))}
      </div>
    </section>
  );
};
