import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ page = 1, max = 10, category }) => {
  try {
    const params = {
      lang: "en",
      country: "us",
      apikey: API_KEY,
      page,
      max,
      category,
    };

    if (category && category !== "All") {
      params.category = category;
    }

    const response = await axios.get(`${BASE_URL}/top-headlines`, { params });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
