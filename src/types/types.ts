export interface Movie {
  id: number;
  vote_average: number;
  poster_path: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export interface Season {
  id: number;
  vote_average: number;
  poster_path: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export interface NavbarProps {
  searchPlaceholder?: string;
  onSearchChange: (query: string) => void;
  showSearchButton?: boolean;
  showPlusButton?: boolean;
}

export interface MoviePosterProps {
  imageUrl: string;
  movieId: number;
  rating: number;
  onClick?: () => void;
}

export interface SeasonPosterProps {
  imageUrl: string;
  movieId?: number;
  rating: number;
  name: string;
}

export interface MovieState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SearchMovie extends Movie {
  id: number;
  poster_path: string;
  vote_average: number;
}

export interface SearchState {
  movies: SearchMovie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SeasonState {
  seasons: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
export interface NavbarProps {
  searchPlaceholder?: string;
  showSearchButton?: boolean;
  showPlusButton?: boolean;
}