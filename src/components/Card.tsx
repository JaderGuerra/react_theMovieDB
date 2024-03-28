import { Movie } from "../interface/movie.interface";
import emptyImg from "../assets/no-IMg.webp";
import { URL_IMG } from "../const/transfortPath";
import { HearIcon } from "./FavoriteIcon";

interface Props {
  movies: Movie;
}

export const Card = ({ movies }: Props) => {
  const existImg = (poster: string) => {
    return poster ? `${URL_IMG}/${movies.poster_path}` : emptyImg;
  };

  return (
    <div className="max-w-sm w-96bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-64">
      <img
        className="rounded-t-lg aspect-square"
        src={existImg(movies?.backdrop_path)}
        alt="Poster Img"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movies.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <HearIcon />
      </div>
    </div>
  );
};
