import { create } from "zustand";
import { Movie } from "../interface/movie.interface";

interface MovieState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export const useMovieStore = create<MovieState>()((set) => ({
  movies: [],
  moviesLocal: [],
  setMovies: (movies: Movie[]) => set({ movies }),
}));
