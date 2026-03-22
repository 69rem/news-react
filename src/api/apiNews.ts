import axios from "axios";
import type { NewsApiResponse } from "../interfaces";

interface GetNewsParams {
  page?: number;
  max?: number;
  category?: string | null;
  keywords?: string;
}

interface GetLatestNewsParams {
  max?: number;
}

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL as string;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY as string;

export const getNews = async ({
  page = 1,
  max = 10,
  category,
  keywords,
}: GetNewsParams = {}): Promise<NewsApiResponse> => {
  try {
    const params: Record<string, string | number> = {
      lang: "en",
      country: "us",
      apikey: API_KEY,
      page,
      max,
    };

    let endpoint = "/top-headlines";

    if (keywords && keywords.trim() !== "") {
      endpoint = "/search";
      params.q = keywords;
      params.sortby = "publishedAt";
    } else if (category && category !== "All" && category !== null) {
      params.category = category;
    }

    const response = await axios.get<NewsApiResponse>(
      `${BASE_URL}${endpoint}`,
      { params },
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return { articles: [], totalArticles: 0, page: 1, status: "error" };
  }
};

export const getLatestNews = async ({
  max = 10,
}: GetLatestNewsParams = {}): Promise<NewsApiResponse> => {
  try {
    const params: Record<string, string | number> = {
      lang: "en",
      country: "us",
      apikey: API_KEY,
      max,
      sortby: "publishedAt",
      q: "latest",
    };

    const response = await axios.get<NewsApiResponse>(`${BASE_URL}/search`, {
      params,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return { articles: [], totalArticles: 0, page: 1, status: "error" };
  }
};
