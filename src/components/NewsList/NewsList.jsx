import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

const NewsList = ({ news }) => {
  const articles = news || [];

  return (
    <ul className={styles.list}>
      {articles.map((item, index) => {
        return <NewsItem key={item.id || index} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
