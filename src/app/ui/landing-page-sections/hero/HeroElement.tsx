import React from "react";
import styles from "./HeroElement.module.scss";
import { HeroElementModel } from "@/app/lib/models";
import Link from "next/link";
import classNames from "classnames";
import { FONT_ABHAYA_LIBRE, FONT_PALANQUIN } from "@/app/lib/fonts";

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
        {/* <p>{element.category}</p> */}
        <h1 className={classNames(styles.Title, FONT_PALANQUIN.className)}>
          {element.title}
        </h1>
        <p
          className={classNames(
            styles.Description,
            FONT_ABHAYA_LIBRE.className,
          )}
        >
          {element.description}
        </p>
        <Link
          href={element.article_url}
          className={classNames(
            styles.ActionLinkButton,
            FONT_PALANQUIN.className,
          )}
        >
          <div>I want to know more!</div>
        </Link>
      </div>
    </div>
  );
};
