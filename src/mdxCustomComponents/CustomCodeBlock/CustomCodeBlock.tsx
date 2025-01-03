import classNames from "classnames";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import styles from "./CustomCodeBlock.module.scss";

interface CustomCodeBlockProps {
  props: {
    children: string;
    code?: string;
    language: string;
    showLineNumbers: boolean;
  };
}

export const CustomCodeBlock = ({ props }: CustomCodeBlockProps) => {
  const code = props.code || props.children;

  return (
    <div className={classNames(styles.CustomCodeBlock)}>
      <CopyBlock
        text={code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        theme={dracula}
        codeBlock={true}
      />
    </div>
  );
};
