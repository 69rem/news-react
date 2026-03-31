import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entities/news/model/newsSlice.ts";
import { newsApi } from "@/entities/news/api/newsApi.ts";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
