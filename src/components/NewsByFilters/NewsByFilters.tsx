import styles from "./styles.module.css";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants.ts";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { getNews } from "../../api/apiNews.ts";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import { useFilters } from "../../helpers/hooks/useFilters.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import type { NewsApiResponse } from "../../interfaces";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page: 1,
    max: PAGE_SIZE,
    category: null,
    keywords: "",
  });
  const debouncedKeywords = useDebounce(filters.keywords, 1200);

  const { data, isLoading } = useFetch<NewsApiResponse>(
    () =>
      getNews({
        ...filters,
        keywords: debouncedKeywords,
      }),
    [filters.page, filters.category, debouncedKeywords],
  );

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

  const handlePageClick = (pageNumber: number) =>
    changeFilter("page", pageNumber);

  return (
    <section className={styles.section}>
      <NewsFilters
        filters={filters}
        changeFilter={changeFilter}
        articles={data?.articles}
        isLoading={isLoading}
      />

      <PaginationWrapper
        top={true}
        bottom={(data?.articles?.length ?? 0) > 0 && true}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      >
        <NewsList news={data?.articles} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
