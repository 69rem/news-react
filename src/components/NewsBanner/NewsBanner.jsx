import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.jsx";

const NewsBanner = ({ item }) => {
  if (!item) return null;

  return (
    <div className={styles.banner}>
      <Image image={item?.image} alt={item.title} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.source?.name || "Unknown"}
      </p>
    </div>
  );
};

export default NewsBanner;
