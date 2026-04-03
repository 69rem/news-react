export interface INews {
  id: string;
  title: string;
  description: string;
  content?: string;
  url: string;
  image: string;
  lang?: string;
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
