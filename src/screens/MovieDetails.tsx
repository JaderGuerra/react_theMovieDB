import { useParams } from "react-router-dom";
import { StarIcon } from "../components/StarIcon";
import { useQuery } from "react-query";
import { ApiMovie } from "../api/apiMovie";
import { fullPath } from "../helper/tranformPath";

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: movie } = useQuery(["movieDetail", id], async () => {
    const response = await ApiMovie.get(`/movie/${id}`);
    return response.data;
  });

  const handleGoBack = () => {
    history.back();
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="p-4 max-w-[1920px] md:mx-auto h-screen bg-cover bg-center dark:bg-slate-700"
      style={{ backgroundImage: `url(${fullPath(movie.backdrop_path)})` }}
    >
      <div className="bg-white border border-gray-200 mx-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:flex md:h-auto md:w-3/4">
        <img
          className="rounded-t-lg aspect-square md:w-60"
          src={fullPath(movie?.poster_path)}
          alt={movie.title}
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
            {movie?.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
          <time className="text-slate-800 dark:text-gray-400">
            Fecha {movie?.release_date}
          </time>
          <p>
            <small className="text-slate-800 dark:text-gray-400">
              Cantidad de votos : {movie?.vote_count}
            </small>
          </p>
          <p className=" flex justify-between items-center my-5">
            <small className="text-slate-800 dark:text-gray-400 flex gap-3 items-center ">
              <StarIcon />
              {movie.vote_average}
            </small>
          </p>
          <div className="flex justify-end mt-2">
            <button
              onClick={handleGoBack}
              type="button"
              className=" text-white bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-600 "
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
