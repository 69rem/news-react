import styles from "./styles.module.css";

interface Props {
  keywords: string;
  newsLength: number;
  isLoading: boolean;
}

const SearchStatus = ({ keywords, newsLength, isLoading }: Props) => {
  if (!keywords || isLoading) return null;

  if (newsLength > 0) {
    return (
      <div className={styles.searchInfo}>
        Search results for: <b>{keywords}</b>
      </div>
    );
  }

  return (
    <div className={styles.noResults}>
      No results found for "<b>{keywords}</b>"
    </div>
  );
};

export default SearchStatus;
