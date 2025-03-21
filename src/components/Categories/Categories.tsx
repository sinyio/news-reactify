import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
