import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList
        news={data?.news}
        type="banner"
        direction="row"
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
