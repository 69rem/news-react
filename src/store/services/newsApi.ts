import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  GetLatestNewsParams,
  GetNewsParams,
  NewsApiResponse,
} from "../../interfaces";
import { setNews } from "../slices/newsSlice.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL as string;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY as string;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, GetNewsParams>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page = 1, max = 10, category, keywords } = params || {};

        const hasKeywords = keywords && keywords.trim() !== "";

        return {
          url: hasKeywords ? "/search" : "/top-headlines",
          params: hasKeywords
            ? {
                lang: "en",
                country: "us",
                apikey: API_KEY,
                page,
                max,
                q: keywords,
                sortby: "publishedAt",
              }
            : {
                lang: "en",
                country: "us",
                apikey: API_KEY,
                page,
                max,
                ...(category && category !== "all" ? { category } : {}),
              },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setNews(data.articles));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, GetLatestNewsParams>({
      query: (params) => {
        const { max = 10 } = params || {};
        return {
          url: "/search",
          params: {
            lang: "en",
            country: "us",
            apikey: API_KEY,
            max,
            sortby: "publishedAt",
            q: "latest",
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
