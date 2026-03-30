import styles from "./styles.module.css";
import { TOTAL_PAGES } from "../../constants/constants.ts";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import { useGetNewsQuery } from "../../store/services/newsApi.ts";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice.ts";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const articles = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1200);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page < TOTAL_PAGES) {
      dispatch(setFilters({ key: "page", value: filters.page + 1 }));
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      dispatch(setFilters({ key: "page", value: filters.page - 1 }));
    }
  };

  const handlePageClick = (pageNumber: number) =>
    dispatch(setFilters({ key: "page", value: pageNumber }));

  return (
    <section className={styles.section}>
      <NewsFilters
        filters={filters}
        articles={articles}
        isLoading={isLoading}
      />

      <PaginationWrapper
        top={true}
        bottom={(articles.length ?? 0) > 0 && true}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      >
        <NewsList news={articles} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
