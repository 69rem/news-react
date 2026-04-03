import styles from "./styles.module.css";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.ts";
import type { INews } from "@/entities/news";
import Image from "@/shared/ui/Image/Image.tsx";
import type { ReactNode } from "react";

interface Props {
  item: INews;
  type: "banner" | "item";
  viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsItem = ({ item, type = "item", viewNewsSlot }: Props) => {
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner} `}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}
      <div className={styles.info}>
        <h3
          className={`${type === "item" ? styles.title : styles.bannerTitle}`}
        >
          {item.title}
        </h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.source?.name || "Unknown"}
        </p>
      </div>
      {viewNewsSlot ? (
        <div className={styles.slot}>{viewNewsSlot(item)}</div>
      ) : null}
    </li>
  );
};

export default NewsItem;
