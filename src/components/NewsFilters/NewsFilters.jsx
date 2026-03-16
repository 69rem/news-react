import styles from "./styles.module.css";
import Categories from "../Categories/Categories.jsx";
import { CATEGORIES } from "../../constants/constants.js";
import Search from "../Search/Search.jsx";
import SearchStatus from "../SearchStatus/SearchStatus.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import Slider from "../Slider/Slider.jsx";

const NewsFilters = ({ filters, changeFilter, isLoading, articles }) => {
  const debouncedKeywords = useDebounce(filters.keywords, 1300);

  return (
    <div className={styles.filters}>
      <Slider>
        <Categories
          categories={CATEGORIES}
          setSelectedCategory={(category) => changeFilter("category", category)}
          selectedCategory={filters.category}
        />
      </Slider>

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
