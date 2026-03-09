import styles from "./styles.module.css";
import NewsBanner from "../../components/News-banner/News-banner.jsx";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews.js";
import NewsList from "../../components/News-list/News-list.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import SearchStatus from "../../components/SearchStatus/SearchStatus.jsx";

const CATEGORIES = [
  "all",
  "world",
  "nation",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const Main = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeywords = useDebounce(keywords, 1200);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page: currentPage,
        max: pageSize,
        category: selectedCategory,
        keywords: debouncedKeywords,
      });
      setNews(response.articles || []);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className={styles.main}>
      <Categories
        categories={CATEGORIES}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Search keywords={keywords} setKeywords={setKeywords} />

      <SearchStatus
        keywords={debouncedKeywords}
        newsLength={news.length}
        isLoading={isLoading}
      />

      {!isLoading && news.length > 0 && (
        <>
          <NewsBanner item={news[0]} />
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          <NewsList news={news} />
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      )}

      {isLoading && (
        <>
          <Skeleton count={1} type={"banner"} />
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          <Skeleton count={10} type={"item"} />
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      )}
    </main>
  );
};

export default Main;
