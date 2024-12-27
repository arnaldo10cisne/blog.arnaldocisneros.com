import React from "react";
import styles from "./PageHeader.module.scss";
import classNames from "classnames";
import { removeWhitespaces } from "@/app/lib/utility_functions";
import { FONT_ABHAYA_LIBRE, FONT_PALANQUIN } from "@/app/lib/fonts";
import BACKGROUND_IMAGE_MOCK from "@/app/lib/assets/mock-image.webp";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className={classNames(styles.PageHeader)}>
      <Image
        className={styles.Background}
        src={BACKGROUND_IMAGE_MOCK}
        alt={`${removeWhitespaces(title)}-background`}
      />

      <div
        className={classNames(
          styles.Foreground,
          styles[`${removeWhitespaces(title)}-backgroundcolor`],
        )}
      >
        <h1
          className={classNames(
            styles.PageHeaderTitle,
            FONT_PALANQUIN.className,
          )}
        >
          {title}
        </h1>
        <p
          className={classNames(
            styles.PageHeaderDescription,
            FONT_ABHAYA_LIBRE.className,
          )}
        >
          {description}
        </p>
      </div>
    </header>
  );
};
