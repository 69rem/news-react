import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore.ts";
import { Link } from "react-router-dom";
import "@/app/styles/errorElement.css";
import { NewsDetails } from "@/entities/news";

const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);
  if (!currentNews) {
    return (
      <div className="error">
        <h3>Sorry! We're cannot find this piece of news :(</h3>
        <br />
        <Link to={`/`}>
          <b>Return to Home page</b>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.news}>
      <h1>{currentNews.title}</h1>

      <NewsDetails item={currentNews} />
    </main>
  );
};

export default NewsPage;
