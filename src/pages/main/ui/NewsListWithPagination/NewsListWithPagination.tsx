import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import Pagination from "@/features/pagination/ui/Pagination/Pagination.tsx";
import NewsList from "@/widgets/news/ui/NewsList/NewsList.tsx";
import type { IFilters } from "@/pages/main/model/types.ts";
import type { INews } from "@/entities/news";
import { usePagination } from "@/pages/main/utils/hooks/usePagination.ts";

interface Props {
  filters: IFilters;
  articles: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, articles, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePagination(filters);

  return (
    <Pagination
      top={true}
      bottom={(articles.length ?? 0) > 0 && true}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page}
    >
      <NewsList
        type="item"
        direction="column"
        news={articles}
        isLoading={isLoading}
      />
    </Pagination>
  );
};

export default NewsListWithPagination;
