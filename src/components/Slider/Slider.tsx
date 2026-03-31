import styles from "./styles.module.css";
import { type ReactNode, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.tsx";

interface Props {
  children: ReactNode;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const { isDark } = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} onClick={scrollLeft}>
        {"<"}
      </button>
      <div ref={sliderRef} className={styles.sliderContainer}>
        {children}
      </div>
      <button className={styles.arrow} onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
