"use client";

import React from "react";
import styles from "./PaginationComponent.module.scss";
import classNames from "classnames";
import { FONT_MONTSERRAT } from "@/app/lib/fonts";
import RIGTH_ARROW_ICON from "@/app/lib/assets/svg/arrow_icon.svg";
import Image from "next/image";

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
      <div className={classNames(styles.paginationButtonDirectionContainer)}>
        {currentPage === 1 ? null : (
          <button
            className={classNames(
              styles.paginationButtonDirection,
              FONT_MONTSERRAT.className,
            )}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <Image
              src={RIGTH_ARROW_ICON}
              alt={"arrow-icon"}
              style={{ rotate: "180deg" }}
            />{" "}
            Previous
          </button>
        )}
      </div>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (pageNumber: number) => (
          <button
            key={pageNumber}
            className={classNames(
              styles.paginationButtonNumber,
              currentPage === pageNumber ? styles.activePage : "",
              FONT_MONTSERRAT.className,
            )}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ),
      )}

      <div className={classNames(styles.paginationButtonDirectionContainer)}>
        {currentPage === totalPages ? null : (
          <button
            className={classNames(
              styles.paginationButtonDirection,
              FONT_MONTSERRAT.className,
            )}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next <Image src={RIGTH_ARROW_ICON} alt={"arrow-icon"} />
          </button>
        )}
      </div>
    </div>
  );
};
