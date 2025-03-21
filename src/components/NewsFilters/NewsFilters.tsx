import { getCategories } from "../../api/apiNews";
import { useTheme } from "../../context/ThemeContext";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilters }: Props) => {
  const { isDark } = useTheme();
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              changeFilters("category", category)
            }
            selectedCategory={filters.category}
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
