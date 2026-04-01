import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.ts";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery({});

  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        news={data?.articles}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
