import styles from "./styles.module.css";
import NewsBanner from "../../components/News-banner/News-banner.jsx";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews.js";
import NewsList from "../../components/News-list/News-list.jsx";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.articles || []);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </main>
  );
};

export default Main;
