import styles from "./styles.module.css";

const SearchStatus = ({ keywords, newsLength, isLoading }) => {
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
