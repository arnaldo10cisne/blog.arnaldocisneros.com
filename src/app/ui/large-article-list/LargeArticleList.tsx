"use client";

import React, { useEffect, useState } from "react";
import styles from "./LargeArticleList.module.scss";
import { ArticleModel, CategoryModel } from "@/app/lib/models";
import { getLastestArticlesFromDynamoDB } from "@/app/lib/api_utils";
import { ARTICLES_PER_PAGE } from "@/app/lib/constants";
import { PaginationComponent } from "./PaginationComponent";
import { ArticleCardLarge } from "../article-card/ArticleCardLarge";
import classNames from "classnames";

interface LargeArticleListProps {
  category?: CategoryModel;
  showCategory?: boolean;
}

export const LargeArticleList = ({
  category,
  showCategory = true,
}: LargeArticleListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articleList, setArticleList] = useState<ArticleModel[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / ARTICLES_PER_PAGE);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getLastestArticlesFromDynamoDB({
          category: category?.type,
          page_number: currentPage,
        });

        // Update list of articles
        setArticleList(response.Items || []);

        // Only set totalCount once or whenever the API might change it
        if (response.TotalCount) {
          setTotalCount(response.TotalCount);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [currentPage, category?.type]);

  // Jump to a specific page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Move to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Move to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div
      className={classNames(
        styles.LargeArticleList,
        totalPages > 1 ? "" : styles.noPagination,
      )}
    >
      {/* Controles de Paginación superior */}
      {totalPages > 1 && (
        <PaginationComponent
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}

      {/* Lista de Artículos */}
      <div className={styles.articleList}>
        {articleList.map((art) => (
          <ArticleCardLarge
            key={art.id}
            article={art}
            showCategory={showCategory}
          />
        ))}
      </div>

      {/* Controles de Paginación inferior */}
      {totalPages > 1 && (
        <PaginationComponent
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};
