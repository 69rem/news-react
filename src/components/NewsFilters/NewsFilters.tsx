import styles from "./styles.module.css";
import Categories from "../Categories/Categories.tsx";
import { CATEGORIES } from "../../constants/constants.ts";
import Search from "../Search/Search.tsx";
import SearchStatus from "../SearchStatus/SearchStatus.tsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import Slider from "../Slider/Slider.tsx";
import type { IFilters, INews } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice.ts";

interface Props {
  filters: IFilters;
  isLoading: boolean;
  articles?: INews[];
}

const NewsFilters = ({ filters, isLoading, articles }: Props) => {
  const debouncedKeywords = useDebounce(filters.keywords, 1300);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <Slider>
        <Categories
          categories={CATEGORIES}
          setSelectedCategory={(category) =>
            dispatch(setFilters({ key: "category", value: category }))
          }
          selectedCategory={filters.category}
        />
      </Slider>

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
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
