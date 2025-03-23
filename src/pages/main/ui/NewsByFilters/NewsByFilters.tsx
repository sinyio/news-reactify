import { useAppDispatch, useAppSelector } from "@/app/appStore";
import Pagination from "@/features/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsFilters } from "@/widgets/news";
import { useGetCategoriesQuery } from "@/entities/categories/api/api";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={dataCategories?.categories} />

      <NewsListWithPagination
        filters={filters}
        isLoading={isLoading}
        news={data?.news || []}
      />
    </section>
  );
};

export default NewsByFilters;
