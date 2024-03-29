import { Movie } from "../interface/movie.interface";
import { HearIcon } from "./FavoriteIcon";
import { fullPath } from "../helper/tranformPath";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { selectFavoriteMovie } from "../services/selectFavoriteMovie.service";

interface Props {
  movies: Movie;
  ShowButtons?: boolean;
}

export const Card = ({ movies, ShowButtons }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const truncateText = (text: string, maxLength: number = 80): string => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength - 3)}...`;
  };
  const showDetails = () => {
    navigate(`/movie/${movies.id}`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToFavoriteMovies = (id: number) => {
    toggleFavorite();
    if (!isFavorite) {
      selectFavoriteMovie(id);
    }
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
        {ShowButtons && (
          <div className="flex justify-between items-center">
            <button
              onClick={showDetails}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
            <button onClick={() => addToFavoriteMovies(movies.id)}>
              <HearIcon isFavorite={isFavorite} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
