import styles from "./styles.module.css";
import withSkeleton from "@/shared/hocs/withSkeleton.tsx";
import type { INews } from "@/entities/news";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard.tsx";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
}

const NewsList = ({ news, type = "item" }: Props) => {
  const articles = news || [];

  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {articles?.map((item, index) => {
        return <NewsCard key={item.id || index} item={item} type={type} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
