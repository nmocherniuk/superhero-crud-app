import React from "react";
import { motion as m } from "framer-motion";
import { SuperheroData } from "../../../types";
import classes from "./Pagination.module.css";

interface PaginationProps {
  data: SuperheroData[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ITEMS_PER_PAGE = 5;

const Pagination: React.FC<PaginationProps> = ({
  data,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <m.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={classes["pagination-container"]}
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`${classes["paginate-button"]} ${
            currentPage === index + 1 ? classes.active : ""
          }`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </m.div>
  );
};

export default Pagination;
