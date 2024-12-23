"use client";

import React from "react";
import styles from "./PaginationComponent.module.scss";

interface PaginationComponentProps {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export const PaginationComponent = ({
  handlePrevPage,
  handleNextPage,
  handlePageChange,
  currentPage,
  totalPages,
}: PaginationComponentProps) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (pageNumber: number) => (
          <button
            key={pageNumber}
            className={`${styles.paginationButton} ${
              currentPage === pageNumber ? styles.activePage : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ),
      )}

      <button
        className={styles.paginationButton}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
