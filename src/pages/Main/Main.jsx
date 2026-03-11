import styles from "./styles.module.css";
import NewsBanner from "../../components/News-banner/News-banner.jsx";
import { getNews } from "../../api/apiNews.js";
import NewsList from "../../components/News-list/News-list.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import SearchStatus from "../../components/SearchStatus/SearchStatus.jsx";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { useFilters } from "../../helpers/hooks/useFilters.js";

const CATEGORIES = [
  "all",
  "world",
  "nation",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page: 1,
    max: PAGE_SIZE,
    category: null,
    keywords: "",
  });
  const debouncedKeywords = useDebounce(filters.keywords, 1200);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

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
    <main className={styles.main}>
      <Categories
        categories={CATEGORIES}
        setSelectedCategory={(category) => changeFilter("category", category)}
        selectedCategory={filters.category}
      />

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <SearchStatus
        keywords={debouncedKeywords}
        newsLength={data?.articles?.length ?? 0}
        isLoading={isLoading}
      />

      <NewsBanner
        item={data && data.articles ? data.articles[0] : null}
        isLoading={isLoading}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />

      <NewsList news={data?.articles} isLoading={isLoading} />

      {(data?.articles?.length ?? 0) > 0 && (
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page}
        />
      )}
    </main>
  );
};

export default Main;
