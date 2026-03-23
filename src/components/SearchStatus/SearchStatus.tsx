import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext.tsx";

interface Props {
  keywords: string;
  newsLength: number;
  isLoading: boolean;
}

const SearchStatus = ({ keywords, newsLength, isLoading }: Props) => {
  const { isDark } = useTheme();
  if (!keywords || isLoading) return null;

  if (newsLength > 0) {
    return (
      <div
        className={`${styles.searchInfo} ${isDark ? styles.dark : styles.light}`}
      >
        Search results for: <b>{keywords}</b>
      </div>
    );
  }

  return (
    <div
      className={`${styles.noResults} ${isDark ? styles.dark : styles.light}`}
    >
      No results found for "<b>{keywords}</b>"
    </div>
  );
};

export default SearchStatus;
