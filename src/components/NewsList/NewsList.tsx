import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem.tsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import type { INews } from "../../interfaces";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  const articles = news || [];

  return (
    <ul className={styles.list}>
      {articles?.map((item, index) => {
        return <NewsItem key={item.id || index} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
