import styles from "./styles.module.css";
import { useRef } from "react";

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
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
    <div className={styles.slider}>
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
