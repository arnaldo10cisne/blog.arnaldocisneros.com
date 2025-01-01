import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";
import { FONT_ROBOTO_SERIF } from "@/app/lib/fonts";

interface ParagraphProps {
  props: {
    children: React.ReactNode;
    content: string;
  };
}

export const Paragraph = ({ props }: ParagraphProps) => {
  return (
    <>
      <p className={classNames(styles.Paragraph, FONT_ROBOTO_SERIF.className)}>
        {props.children}
      </p>
    </>
  );
};
