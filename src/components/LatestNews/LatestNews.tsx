import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList.tsx";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { getLatestNews } from "../../api/apiNews.ts";
import type { NewsApiResponse } from "../../interfaces";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse>(getLatestNews, []);

  return (
    <section className={styles.section}>
      <BannersList banners={data?.articles} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
