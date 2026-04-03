import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.ts";
import { NewsList } from "@/widgets/news";
import type { INews } from "@/entities/news";
import { useNavigateTo } from "@/shared/hooks/useNavigateTo.ts";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery({});
  const navigateTo = useNavigateTo();

  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        news={data?.articles}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p style={{ fontSize: "14px" }} onClick={() => navigateTo(news)}>
            View more...
          </p>
        )}
      />
    </section>
  );
};

export default LatestNews;
