import styles from "./styles.module.css";
import Categories from "../Categories/Categories.jsx";
import { CATEGORIES } from "../../constants/constants.js";
import Search from "../Search/Search.jsx";
import SearchStatus from "../SearchStatus/SearchStatus.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";

const NewsFilters = ({ filters, changeFilter, isLoading, articles }) => {
  const debouncedKeywords = useDebounce(filters.keywords, 1200);

  return (
    <div className={styles.filters}>
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
        newsLength={articles?.length ?? 0}
        isLoading={isLoading}
      />
    </div>
  );
};

export default NewsFilters;
