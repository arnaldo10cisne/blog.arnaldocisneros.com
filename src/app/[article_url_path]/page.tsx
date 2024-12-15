import React from "react";
import styles from "./ArticlePage.module.scss";
import { ArticleTitle } from "./ArticleTitle";
import { ArticlePrimaryArea } from "./ArticlePrimaryArea";
import { ArticleSecondaryArea } from "./ArticleSecondaryArea";
import { ArticleModel } from "../lib/models";
import { MOCK_ARTICLES } from "../lib/mock_data";

interface ArticlePageProps {
  params: {
    article_url_path: string;
  };
}

//TODO: Implementar funcion getStaticParams:
// export async function generateStaticParams() {
//   // Obtén todos los artículos de tu fuente de datos
//   // Por ejemplo:
//   const allArticles = await getAllArticles(); // Deberás implementar getAllArticles
//   return allArticles.map(article => ({
//     url_path: article.url_path
//   }));
// }

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

const ArticlePage = ({ params }: ArticlePageProps) => {
  const { article_url_path } = params;

  const article: ArticleModel | undefined = MOCK_ARTICLES.find(
    (art) => art.article_url_path === article_url_path,
  );

  if (!article) {
    return <div>ARTICLE NOT FOUND</div>;
  }

  return (
    <article className={styles.ArticlePage}>
      <ArticleTitle
        title={article.title}
        subtitle={article.subtitle}
        thumbnail_large={article.thumbnail_large}
      />
      <main className={styles.ArticleMainArea}>
        <ArticlePrimaryArea article={article} />
        <ArticleSecondaryArea />
      </main>
    </article>
  );
};

export default ArticlePage;
