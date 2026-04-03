import styles from "./styles.module.css";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.ts";
import type { INews } from "@/entities/news";
import Image from "@/shared/ui/Image/Image.tsx";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.lang}){<br />}
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.source?.name || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
