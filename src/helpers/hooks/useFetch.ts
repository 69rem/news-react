import { useState, useEffect } from "react";

interface FetchFunction<T> {
  (): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T>(
  fetchFunction: FetchFunction<T>,
  deps: any[] = [],
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const result = await fetchFunction();
          setData(result);
          setError(null);
        } catch (e) {
          setError(error instanceof Error ? error : new Error(String(error)));
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, 100);

    return () => clearTimeout(timer);
  }, deps);

  return { data, isLoading, error };
};
