import React from "react";
import styles from "./ArticlePage.module.scss";
import { ArticleTitle } from "./ArticleTitle";
import { ArticlePrimaryArea } from "./ArticlePrimaryArea";
import { ArticleSecondaryArea } from "./ArticleSecondaryArea";
import { ArticleModel } from "../lib/models";
import { MOCK_ARTICLES } from "../lib/mock_data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface ArticlePageProps {
  params: {
    article_url_path: string;
  };
}

export const generateMetadata = ({ params }: ArticlePageProps) => {
  const { article_url_path } = params;
  const article: ArticleModel | undefined = MOCK_ARTICLES.find(
    (art) => art.article_url_path === article_url_path,
  );

  if (!article) {
    return {
      title: "Artículo no encontrado",
      description: "No se encontró el artículo solicitado.",
    };
  }

  return {
    title: article.title,
    description: article.description ?? "Descripción del artículo",
  };
};

const fetchMDXSource = async (
  url_path: string,
): Promise<MDXRemoteSerializeResult> => {
  const res = await fetch(url_path);
  const mdxText = await res.text();
  return await serialize(mdxText);
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { article_url_path } = params;

  const article: ArticleModel | undefined = MOCK_ARTICLES.find(
    (art) => art.article_url_path === article_url_path,
  );

  if (!article) {
    return <div>ARTICLE NOT FOUND</div>;
  }

  // This URL_PATH must come from a dynamoDB database under the name of article_content_location
  const mdxSource = await fetchMDXSource(
    "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/placeholder_article_remote.mdx",
  );

  return (
    <article className={styles.ArticlePage}>
      <ArticleTitle
        title={article.title}
        subtitle={article.subtitle}
        thumbnail_large={article.thumbnail_large}
      />
      <main className={styles.ArticleMainArea}>
        <ArticlePrimaryArea article={article} mdxSource={mdxSource} />
        <ArticleSecondaryArea />
      </main>
    </article>
  );
};

export default ArticlePage;
