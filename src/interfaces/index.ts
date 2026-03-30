export interface INews {
  id: string;
  title: string;
  description: string;
  content?: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url?: string;
  };
}

export interface GetNewsParams {
  page?: number;
  max?: number;
  category?: string | null;
  keywords?: string;
}

export interface GetLatestNewsParams {
  max?: number;
}

export interface NewsApiResponse {
  articles: INews[];
  totalArticles?: number;
  page?: number;
  status?: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

export interface IFilters {
  page: number;
  max: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type CategoriesType =
  | "all"
  | "world"
  | "nation"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
