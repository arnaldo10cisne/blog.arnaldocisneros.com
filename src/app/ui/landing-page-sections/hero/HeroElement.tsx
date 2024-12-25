import React from "react";
import styles from "./HeroElement.module.scss";
import { HeroElementModel } from "@/app/lib/models";
import Link from "next/link";
import Image from "next/image";

interface HeroElementProps {
  element: HeroElementModel;
}

export const HeroElement = ({ element }: HeroElementProps) => {
  return (
    <div className={styles.HeroElement}>
      <img
        className={styles.Background}
        src={element.thumbnail_large}
        alt="hero image"
      />

      <div className={styles.Foreground}>
        <p>{element.category}</p>
        <h1>{element.title}</h1>
        <p>{element.description}</p>
        <Link href={element.article_url} className={styles.ActionLinkButton}>
          <div>I want to know more!</div>
        </Link>
      </div>
    </div>
  );
};
