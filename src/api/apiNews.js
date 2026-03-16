import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page = 1,
  max = 10,
  category,
  keywords,
} = {}) => {
  try {
    const params = {
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

    const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLatestNews = async ({ max = 10 } = {}) => {
  try {
    const params = {
      lang: "en",
      country: "us",
      apikey: API_KEY,
      max,
      sortby: "publishedAt",
      q: "latest",
    };

    const response = await axios.get(`${BASE_URL}/search`, { params });
    return response.data;
  } catch (e) {
    console.log(e);
    return { articles: [] };
  }
};
