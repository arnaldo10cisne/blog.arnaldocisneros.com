import type { MDXComponents } from "mdx/types";
import styles from "./mdx-components.module.scss";
import { ArticleImage } from "./mdxCustomComponents/ArticleImage/ArticleImage";
import { Subtitle } from "./mdxCustomComponents/Subtitle/Subtitle";
import classNames from "classnames";
import { FONT_ROBOTO_SERIF } from "./app/lib/fonts";
import { CodeBlock } from "./mdxCustomComponents/CodeBlock/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Basic components
    p: (props) => (
      <p className={classNames(styles.Paragraph, FONT_ROBOTO_SERIF.className)}>
        {props.children}
      </p>
    ),
    a: (props) => <a {...props} className={classNames(styles.Link)} />,
    li: (props) => (
      <li
        {...props}
        className={classNames(styles.ListItem, FONT_ROBOTO_SERIF.className)}
      />
    ),

    // Custom components
    ArticleImage: (props) => <ArticleImage props={props} />,
    // CodeBlock: (props) => <pre>{props.children}</pre>,
    CodeBlock: (props) => <CodeBlock props={props} />,
    Subtitle: (props) => <Subtitle props={props} />,

    // Rest of the components
    ...components,
  };
}
