import React from "react";
import styles from "./ArticleImage.module.scss";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";
import { FONT_ROBOTO_SERIF } from "@/app/lib/fonts";

interface ArticleImageProps {
  props: {
    children: React.ReactNode;
    alt: string;
    src?: string;
    description: string;
  };
}

export const ArticleImage = ({ props }: ArticleImageProps) => {
  return (
    <div className={classNames(styles.ArticleImage)}>
      <Image
        sizes="100vw"
        className={classNames(styles.mdxImage)}
        width={800}
        height={590}
        {...(props as ImageProps)}
      />
      <span
        className={classNames(
          styles.mdxImageDescription,
          FONT_ROBOTO_SERIF.className,
        )}
      >
        {props.description}
      </span>
    </div>
  );
};
