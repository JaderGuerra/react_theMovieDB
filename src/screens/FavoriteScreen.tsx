import { useQuery } from "react-query";
import { Loading, Card } from "../components";
import { Link } from "react-router-dom";
import { Movie } from "../interface/movie.interface";
import { getFavoritesMovies } from "../services/getFavoritesMovies.service";

export default function FavoriteScreen() {
  const { data: movies, isLoading } = useQuery(
    "getFavoritesMovies",
    getFavoritesMovies,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="p-4 dark:bg-slate-700 h-full min-h-screen	">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
            {movies.map((movie: Movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Card movies={movie} ShowButtons={false} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
