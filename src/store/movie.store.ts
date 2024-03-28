import { create } from "zustand";
import { Movie } from "../interface/movie.interface";
import { ApiMovie } from "../api/apiMovie";

interface MovieState {
  //movies: Movie[];
  loading: boolean;
  hasErrors: boolean;
  movie?: Movie;
  getMovieDetails: (id: string) => void;
}

export const useMovieStore = create<MovieState>()((set) => ({
  loading: false,
  hasErrors: false,
  getMovieDetails: async (id: string) => {
    try {
      set(() => ({ loading: true }));
      const response = await ApiMovie.get(`movie/${id}`);
      set((state) => ({ data: (state.movie = response.data), loading: false }));
    } catch (error) {
      set(() => ({ hasErrors: true, loading: false }));
      console.log(error);
    }
  },
}));
