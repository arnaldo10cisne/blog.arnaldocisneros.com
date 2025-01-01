import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import styles from "./mdx-components.module.scss";
import { Paragraph } from "./mdxCustomComponents/Paragraph/Paragraph";
import { ArticleImage } from "./mdxCustomComponents/ArticleImage/ArticleImage";
import { Subtitle } from "./mdxCustomComponents/Subtitle/Subtitle";
import classNames from "classnames";
import { FONT_ROBOTO_SERIF } from "./app/lib/fonts";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Basic components
    p: (props) => <Paragraph props={props} />,
    a: (props) => <a {...props} className={classNames(styles.Link)} />,
    li: (props) => (
      <li
        {...props}
        className={classNames(styles.ListItem, FONT_ROBOTO_SERIF.className)}
      />
    ),

    // Custom components
    ArticleImage: (props) => <ArticleImage props={props} />,
    CodeBlock: (props) => <pre>{props.children}</pre>,
    Subtitle: (props) => <Subtitle props={props} />,

    // Rest of the components
    ...components,
  };
}
