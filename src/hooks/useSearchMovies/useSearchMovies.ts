import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovies, selectAllSearch, selectIsLoading } from "../../redux/slice/searchSlice";
import { AppDispatch } from "../../redux/store";
import { Movie } from "../../types/types";

export function useSearchMovies(): {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searches: Movie[];
  isLoading: boolean;
} {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const searches = useSelector(selectAllSearch) || [];
  const isLoading = useSelector(selectIsLoading);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQuery = searchParams.get("query") || "";
    setQuery(newQuery);
  }, [location.search]);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query)).catch((error: Error) => {
        console.error("Error in searchMovies dispatch:", error);
      });
    }
  }, [dispatch, query]);

  return { query, setQuery, searches, isLoading };
}
