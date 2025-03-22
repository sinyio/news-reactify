import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import Search from "@/features/search/ui/Search/Search";
import Slider from "@/features/slider/ui/Slider/Slider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/categories/api/api";
import { Categories } from "@/features/categories";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data: dataCategories } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
