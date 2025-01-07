import { useEffect, useState } from "react";
import { Movie, Season } from "../../types/types";
import instance from "../../constant/instance";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const [moviesResponse, seasonsResponse] = await Promise.all([
        instance.get('/movie/popular'),
        instance.get('/tv/popular')
      ]);
      setMovies(moviesResponse.data.results);
      setSeasons(seasonsResponse.data.results);
      setLoading(false);
    } catch {
      setError("Failed to fetch movies and TV shows");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, seasons, loading, error };
};

export default useMovies;
