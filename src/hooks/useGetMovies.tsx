import { useEffect, useState, useCallback } from "react";
import { Movie, MovieResponse } from "../interface/movie.interface";
import { ApiMovie } from "../api/apiMovie";

export const useGetMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchData = useCallback(async (endpoint: string) => {
    try {
      setIsLoading(true);
      const response = await ApiMovie.get<MovieResponse>(endpoint);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      await fetchData("movie/popular");
    };

    loadMovies();
  }, [fetchData]);

  const searchMovies = useCallback(async (movie: string) => {
    await fetchData(`search/movie?&query=${movie}`);
  }, [fetchData]);

  return { isLoading, movies, searchMovies };
};
