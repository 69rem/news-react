import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { useGetNewsQuery } from "@/entities/news/api/newsApi.ts";
import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import { setFilters } from "@/entities/news/model/newsSlice.ts";
import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters.tsx";
import Pagination from "@/features/pagination/ui/Pagination/Pagination.tsx";
import NewsList from "@/widgets/news/ui/NewsList/NewsList.tsx";

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

      <Pagination
        top={true}
        bottom={(articles.length ?? 0) > 0 && true}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      >
        <NewsList news={articles} isLoading={isLoading} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
