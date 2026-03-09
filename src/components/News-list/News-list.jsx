import styles from "./styles.module.css";
import NewsItem from "../News-item/News-item.jsx";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item, index) => {
        if (index === 0) return null;
        return <NewsItem key={item.url} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
