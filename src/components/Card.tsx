import { Movie } from "../interface/movie.interface";
import { HearIcon } from "./FavoriteIcon";
import { fullPath } from "../helper/tranformPath";

interface Props {
  movies: Movie;
}

export const Card = ({ movies }: Props) => {
  const truncateText = (text: string, maxLength: number = 80): string => {
    if (text.length <= maxLength) {
      return text;
    }

    return `${text.substring(0, maxLength - 3)}...`;
  };

  return (
    <div className="max-w-sm w-96bg-white min-h-[544px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-64">
      <img
        className="rounded-t-lg aspect-square"
        src={fullPath(movies?.poster_path)}
        alt="Poster Img"
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl	md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movies.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncateText(movies.overview, 130)}
        </p>
        <HearIcon />
      </div>
    </div>
  );
};
