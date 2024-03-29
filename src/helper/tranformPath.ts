const URL_IMG = "https://image.tmdb.org/t/p/original";
import emptyImg from "../assets/no-IMg.webp";

export const fullPath = (moviePath: string) => {
  return moviePath ? `${URL_IMG}${moviePath}` : emptyImg;
};
