import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllMovies, selectIsLoading } from "../../redux/slice/movieSlice";
import { selectAllSearch } from "../../redux/slice/searchSlice";
import { Movie } from "../../types/types";
import instance from "../../constant/instance";

export function useMovieDetails(): { movieData: Movie | null; isLoading: boolean } {
  const { movieId } = useParams();
  const movies = useSelector(selectAllMovies);
  const searchResults = useSelector(selectAllSearch);
  const isLoading = useSelector(selectIsLoading);
  const [movieData, setMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
    
      const movieFromState = [...movies, ...searchResults].find(
        (movie) => movie.id.toString() === movieId
      );

      if (movieFromState) {
        setMovieData(movieFromState);
      } else {
        
        try {
          const response = await instance.get(`/movie/${movieId}?language=en-US`);
          setMovieData(response.data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setMovieData(null);
        }
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId, movies, searchResults]);

  return { movieData, isLoading };
}
