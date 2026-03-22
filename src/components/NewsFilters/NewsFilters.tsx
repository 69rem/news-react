import styles from "./styles.module.css";
import Categories from "../Categories/Categories.tsx";
import { CATEGORIES } from "../../constants/constants.ts";
import Search from "../Search/Search.tsx";
import SearchStatus from "../SearchStatus/SearchStatus.tsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import Slider from "../Slider/Slider.tsx";
import type { IFilters, INews } from "../../interfaces";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
  isLoading: boolean;
  articles?: INews[];
}

const NewsFilters = ({ filters, changeFilter, isLoading, articles }: Props) => {
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
