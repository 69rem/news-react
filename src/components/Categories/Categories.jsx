import styles from "./styles.module.css";
import { forwardRef } from "react";

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
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
