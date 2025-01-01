import React from "react";

import styles from "./Subtitle.module.scss";
import classNames from "classnames";
import { FONT_ABHAYA_LIBRE } from "@/app/lib/fonts";

interface SubtitleProps {
  props: {
    children: React.ReactNode;
    text: string;
  };
}

export const Subtitle = ({ props }: SubtitleProps) => {
  return (
    <h1 className={classNames(styles.Subtitle, FONT_ABHAYA_LIBRE.className)}>
      {props.text}
    </h1>
  );
};
