import styles from "./styles.module.css";
import type { DirectionType, SkeletonType } from "../../interfaces/common.ts";

interface Props {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}: Props) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction ? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
};

export default Skeleton;
