import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import styles from "./mdx-components.module.scss";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        className={styles.mdxImage}
        width={300}
        height={300}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
