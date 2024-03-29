import { ApiMovie } from "../api/apiMovie";

export const searchMovies = async (query: string) => {
  const response = await ApiMovie.get(`search/movie?query=${query}`);
  return response.data.results;
};
