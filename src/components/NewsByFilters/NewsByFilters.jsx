import styles from "./styles.module.css";
import Pagination from "../Pagination/Pagination.jsx";
import { TOTAL_PAGES } from "../../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({ filters, changeFilter, isLoading, articles }) => {
  const handleNextPage = () => {
    if (filters.page < TOTAL_PAGES) {
      changeFilter("page", filters.page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      changeFilter("page", filters.page - 1);
    }
  };

  const handlePageClick = (pageNumber) => changeFilter("page", pageNumber);

  return (
    <section className={styles.section}>
      <NewsFilters
        filters={filters}
        changeFilter={changeFilter}
        articles={articles}
        isLoading={isLoading}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />

      <NewsList news={articles} isLoading={isLoading} />

      {(articles?.length ?? 0) > 0 && (
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page}
        />
      )}
    </section>
  );
};

export default NewsByFilters;
