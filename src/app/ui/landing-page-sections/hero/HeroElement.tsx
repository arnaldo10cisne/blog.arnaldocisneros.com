import React from "react";
import styles from "./HeroElement.module.scss";
import { HeroElementModel } from "@/app/lib/models";
import Link from "next/link";

interface HeroElementProps {
  element: HeroElementModel;
}

export const HeroElement = ({ element }: HeroElementProps) => {
  return (
    <div className={styles.HeroElement}>
      <p>{element.category}</p>
      <h1>{element.title}</h1>
      <p>{element.description}</p>
      <Link href={element.article_url} className={styles.ActionLinkButton}>
        <div>I want to know more!</div>
      </Link>
    </div>
  );
};
