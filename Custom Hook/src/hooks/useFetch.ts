import { useEffect, useState } from "react";

type UseFetchState<TData> = {
  data: TData | null;
  error: unknown;
  loading: boolean;
};

export default function useFetch<TData = unknown>(
  url: string
): UseFetchState<TData> {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const json = (await res.json()) as TData;
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, loading };
}
