import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../constant/instance";
import { MovieState } from "../../types/types";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await instance.get("trending/movie/day?language=en-US");
    return response.data.results;
  } catch  {
    throw new Error("Failed to fetch movies. Please try again later.");
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  } as MovieState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error occurred.";
      });
  },
});

export const selectAllMovies = (state: { movies: MovieState }) =>
  state.movies.movies;

export const selectIsLoading = (state: { movies: MovieState }) =>
  state.movies.status === "loading";

export const { reducer: moviesReducer } = moviesSlice;

export default moviesSlice;
