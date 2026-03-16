import { useState, useEffect } from "react";

export const useFetch = (fetchFunction, deps = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const result = await fetchFunction();
          setData(result);
        } catch (e) {
          console.log(e);
          setData({ articles: [] });
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, 100);

    return () => clearTimeout(timer);
  }, deps);

  return { data, isLoading };
};
