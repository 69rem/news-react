import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore.ts";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { useGetNewsQuery } from "@/entities/news/api/newsApi.ts";
import NewsFilters from "@/widgets/news/ui/NewsFilters/NewsFilters.tsx";
import NewsListWithPagination from "@/pages/main/ui/NewsListWithPagination/NewsListWithPagination.tsx";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const articles = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1200);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters
        filters={filters}
        articles={articles}
        isLoading={isLoading}
      />
      <NewsListWithPagination
        isLoading={isLoading}
        articles={articles}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
