import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList.tsx";
import { useGetLatestNewsQuery } from "../../store/services/newsApi.ts";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery({});

  return (
    <section className={styles.section}>
      <BannersList banners={data?.articles} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
