import styles from "./styles.module.css";
import NewsBanner from "../../components/News-banner/News-banner.jsx";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews.js";
import NewsList from "../../components/News-list/News-list.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.articles || []);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}
    </main>
  );
};

export default Main;
