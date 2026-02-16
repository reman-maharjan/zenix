import { useEffect, useState } from "react";
import { Video } from "@/types/videos";

export const useVideos = () => {
  const [data, setData] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadVideos = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/videos");

        if (!res.ok) {
          throw new Error(`Failed to load videos: ${res.statusText}`);
        }

        const json = (await res.json()) as Video[];
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

    loadVideos();

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
