import type {
  NewsApiResponse,
  INews,
  GetNewsParams,
  GetLatestNewsParams,
} from "@/entities/news/model/types.ts";

import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner.tsx";
import NewsItem from "@/entities/news/ui/NewsItem/NewsItem.tsx";

export { NewsBanner, NewsItem };
export type { NewsApiResponse, INews, GetLatestNewsParams, GetNewsParams };
