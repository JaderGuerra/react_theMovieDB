import { ApiMovie } from "../api/apiMovie";

export const getPopularMovies = async () => {
  const response = await ApiMovie.get('/movie/popular');
  return response.data.results;
};