import styles from "./styles.module.css";

const Pagination = ({
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  totalPages,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
