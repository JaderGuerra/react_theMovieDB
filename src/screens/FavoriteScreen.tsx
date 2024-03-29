import { useQuery } from "react-query";
import { getPopularMovies } from "../services/popularMovies.service";
import { Loading,Card } from "../components";
import { Link } from "react-router-dom";
import { Movie } from "../interface/movie.interface";

export default function FavoriteScreen() {
  const { data: movies, isLoading } = useQuery(
    "popularMovies",
    getPopularMovies,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="p-4 bg-cover bg-center dark:bg-slate-700 h-full">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
            {movies.map((movie: Movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Card movies={movie} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
