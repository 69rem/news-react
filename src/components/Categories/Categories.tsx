import styles from "./styles.module.css";
import { type ForwardedRef, forwardRef } from "react";
import type { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

Categories.displayName = "Categories";

export default Categories;
