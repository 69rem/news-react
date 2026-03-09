import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ page = 1, max = 10, category, keywords }) => {
  try {
    const params = {
      lang: "en",
      country: "us",
      apikey: API_KEY,
      page,
      max,
    };

    let endpoint = "";

    if (keywords && keywords.trim() !== "") {
      endpoint = "/search";

      if (category && category.toLowerCase() !== "all") {
        params.q = `${keywords} ${category}`;
      } else {
        params.q = keywords;
      }

      params.sortby = "publishedAt";
    } else if (category && category.toLowerCase() !== "all") {
      endpoint = "/top-headlines";
      params.category = category;
    } else {
      endpoint = "/top-headlines";
    }

    const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
