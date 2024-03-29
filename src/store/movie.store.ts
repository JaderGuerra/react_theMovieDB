import { create } from "zustand";
import { Movie } from "../interface/movie.interface";

interface MovieState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
/*   setMoviesStorage: (id: number) => void;
  getMoviesLocalStorage: () => void;
  moviesLocal:Movie[] | null */
}

export const useMovieStore = create<MovieState>()((set) => ({
  movies: [],
  moviesLocal:[],
  setMovies: (movies: Movie[]) => set({ movies }),
/*   setMoviesStorage: (id: number) => {
    const moviesIds = [];
    moviesIds.push({ id: id });
    localStorage.setItem("@moviesDb@", JSON.stringify(moviesIds));
  },
  getMoviesLocalStorage: () => {
    const moviesJSON = localStorage.getItem("@moviesDb@");
    const movies = moviesJSON ? (JSON.parse(moviesJSON) as Movie[]) : null;
    get().moviesLocal = movies
  }, */
}));
