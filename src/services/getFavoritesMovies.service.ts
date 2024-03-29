import { ApiMovie } from "../api/apiMovie";

export const getFavoritesMovies = async () => {
  const response = await ApiMovie.get("/account/9753824/favorite/movies");
  return response.data.results;
};
