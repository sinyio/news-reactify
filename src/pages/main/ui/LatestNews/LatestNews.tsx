import BannersListWithSkeleton from "@/widgets/news/ui/BannersList/BannersList";
import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
