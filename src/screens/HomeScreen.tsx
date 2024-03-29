import { BoxSearch, Loading, Card } from "../components";
import { useQuery } from "react-query";
import { Movie } from "../interface/movie.interface";
import { getPopularMovies } from "../services/popularMovies.service";
import { EmptyResult } from "../components/EmptyResult";

export default function HomeScreen() {
  const { data: movies, isLoading } = useQuery(
    "popularMovies",
    getPopularMovies,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="p-4 dark:bg-slate-700 h-full min-h-screen	">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <BoxSearch />
          {movies.length <= 0 && <EmptyResult />}
          <div className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
            {movies.map((movie: Movie) => (
              <Card key={movie.id} movies={movie} ShowButtons />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
