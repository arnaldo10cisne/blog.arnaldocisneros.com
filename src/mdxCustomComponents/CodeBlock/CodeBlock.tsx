import classNames from "classnames";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import styles from "./CodeBlock.module.scss";

interface CodeBlockProps {
  props: {
    children: string;
    code?: string;
    language: string;
    showLineNumbers: boolean;
  };
}

export const CodeBlock = ({ props }: CodeBlockProps) => {
  const code = props.code || props.children;

  return (
    <pre className={classNames(styles.CodeBlock)}>
      <CopyBlock
        text={code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        theme={dracula}
        codeBlock
      />
    </pre>
  );
};
