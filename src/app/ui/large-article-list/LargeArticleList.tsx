"use client";

import React, { useEffect, useState } from "react";
import styles from "./LargeArticleList.module.scss";
import { ArticleModel, CategoryModel } from "@/app/lib/models";
import { ArticleCard } from "../article-card/ArticleCard";
import { getLastestArticlesFromDynamoDB } from "@/app/lib/api_utils";
import { ARTICLES_PER_PAGE } from "@/app/lib/constants";

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
    <div className={styles.LargeArticleList}>
      {articleList.map((art) => (
        <ArticleCard
          key={art.id}
          article={art}
          largeStyle={true}
          showCategory={showCategory}
        />
      ))}

      {totalPages > 1 ? (
        <>
          {/* Pagination Controls */}
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={pageNumber === currentPage}
              >
                go to page {pageNumber}
              </button>
            ),
          )}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </>
      ) : null}
    </div>
  );
};
