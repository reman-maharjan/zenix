import { useEffect, useState } from "react";

export interface Brand {
  name: string;
  image: string;
}

export const useBrands = () => {
  const [data, setData] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadBrands = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/brands");

        if (!res.ok) {
          throw new Error(`Failed to load brands: ${res.statusText}`);
        }

        const json = (await res.json()) as Brand[];
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
          setData([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadBrands();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
