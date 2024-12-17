import React from "react";
import styles from "./ArticlePage.module.scss";
import { ArticleTitle } from "./ArticleTitle";
import { ArticlePrimaryArea } from "./ArticlePrimaryArea";
import { ArticleSecondaryArea } from "./ArticleSecondaryArea";
import { ArticleModel } from "../lib/models";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getArticleItemFromDynamoDB } from "../lib/api_utils";

interface ArticlePageProps {
  params: {
    article_url: string;
  };
}

export const generateMetadata = async ({ params }: ArticlePageProps) => {
  const { article_url } = params;
  const response = await getArticleItemFromDynamoDB(article_url);
  const article: ArticleModel = response.Items[0];

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
  const { article_url } = params;

  const response = await getArticleItemFromDynamoDB(article_url);
  const article: ArticleModel = response.Items[0];

  if (!article) {
    return <div>ARTICLE NOT FOUND</div>;
  }

  const mdxSource = await fetchMDXSource(article.article_content_location);

  return (
    <article className={styles.ArticlePage}>
      <ArticleTitle
        title={article.title}
        subtitle={article.subtitle}
        thumbnail_large={article.thumbnail_large}
      />
      <main className={styles.ArticleMainArea}>
        <ArticlePrimaryArea mdxSource={mdxSource} />
        <ArticleSecondaryArea />
      </main>
    </article>
  );
};

export default ArticlePage;
