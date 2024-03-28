import { useEffect, useState } from "react";
import { Movie, MovieResponse } from "../interface/movie.interface";
import { ApiMovie } from "../api/apiMovie";

export const useGetMovies = () => {
  const [isloading, setIsloading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    try {
      setIsloading(true);
      const response = await ApiMovie.get<MovieResponse>("popular");
      setIsloading(false);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { isloading, movies };
};
