import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../constant/instance";
import { SearchMovie } from "../../types/types";
import { SearchState } from "../../types/types";

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (query: string) => {
    try {
      const response = await instance.get(
        `search/movie?query=${query}&language=en-US`
      );
      return response.data.results;
    } catch {
      throw new Error("Failed to search movies. Please try again later.");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  } as SearchState,
  reducers: {
    setSearches: (state, action: PayloadAction<SearchMovie[]>) => {
      state.movies = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error occurred.";
      });
  },
});

export const { reducer: searchReducer, actions } = searchSlice;
export const { setSearches } = actions;

export const selectAllSearch = (state: { search: SearchState }) =>
  state.search.movies;
export const selectIsLoading = (state: { search: SearchState }) =>
  state.search.status === "loading";

export default searchSlice;
