"use client";

import React from "react";
import styles from "./Hero_Section_btn.module.scss";
import { ArticleModel } from "@/app/lib/models";
import classNames from "classnames";

interface LatestPosts_SectionProps {
  element: ArticleModel;
  index: number;
  navigationFunction: (position: number) => void;
  isCurrent: boolean;
}

export const Hero_Section_btn = ({
  element,
  index,
  navigationFunction,
  isCurrent,
}: LatestPosts_SectionProps) => {
  return (
    <div
      key={element.title}
      onClick={() => navigationFunction(index)}
      className={classNames(
        styles.ElementsNavigationButton,
        isCurrent ? styles.ElementsNavigationButton__Current : "",
      )}
    >
      {isCurrent ? (
        <div
          className={classNames(styles.ElementsNavigationButton__Indicator)}
        ></div>
      ) : null}
    </div>
  );
};
