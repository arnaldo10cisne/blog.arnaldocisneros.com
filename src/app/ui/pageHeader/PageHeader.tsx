import React from "react";
import styles from "./PageHeader.module.scss";
import classNames from "classnames";

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className={classNames(styles.PageHeader)}>
      <h1 className={classNames(styles.PageHeaderTitle)}>{title}</h1>
      <p className={classNames(styles.PageHeaderDescription)}>{description}</p>
    </header>
  );
};
