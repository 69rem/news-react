import type {
  NewsApiResponse,
  INews,
  GetNewsParams,
  GetLatestNewsParams,
} from "@/entities/news/model/types.ts";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard.tsx";
import NewsDetails from "@/entities/news/ui/NewsDetails/NewsDetails.tsx";

export { NewsCard, NewsDetails };
export type { NewsApiResponse, INews, GetLatestNewsParams, GetNewsParams };
