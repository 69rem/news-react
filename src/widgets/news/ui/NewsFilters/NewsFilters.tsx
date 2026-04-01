import Slider from "@/features/slider/ui/Slider/Slider.tsx";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { useAppDispatch } from "@/app/appStore.ts";
import CategoriesButtons from "@/features/categories/ui/CategoriesButtons/CategoriesButtons.tsx";
import { CATEGORIES } from "@/shared/constants/constants.ts";
import { setFilters } from "@/entities/news/model/newsSlice.ts";
import Search from "@/features/search/ui/Search/Search.tsx";
import SearchStatus from "@/shared/ui/SearchStatus/SearchStatus.tsx";
import styles from "./styles.module.css";
import type { INews } from "@/entities/news";
import type { IFilters } from "@/pages/main/model/types.ts";

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
        <CategoriesButtons
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
