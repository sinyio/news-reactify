import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, error, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data?.news} />

      <NewsByFilters
        isLoading={isLoading}
        news={data?.news}
        filters={filters}
        changeFilters={changeFilters}
      />
    </main>
  );
};

export default Main;
