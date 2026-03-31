import styles from "./styles.module.css";
import { type ForwardedRef, forwardRef } from "react";
import type { CategoriesType } from "@/entities/category";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const CategoriesButtons = forwardRef(
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

CategoriesButtons.displayName = "CategoriesButtons";

export default CategoriesButtons;
