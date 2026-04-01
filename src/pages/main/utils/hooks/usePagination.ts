import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import { useAppDispatch } from "@/app/appStore.ts";
import { setFilters } from "@/entities/news/model/newsSlice.ts";
import type { IFilters } from "@/pages/main/model/types.ts";

export const usePagination = (filters: IFilters) => {
  const dispatch = useAppDispatch();

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

  return {
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
  };
};
