import { useGetMovies } from "../hooks/useGetMovies";
import { BoxSearch, Loading, Card, Header } from "../components";
import { Link } from "react-router-dom";

//import { Suspense } from "react";
//import { Link } from "react-router-dom";

export default function HomeScreen() {
  const { isLoading, movies } = useGetMovies(); // Movido fuera del componente

  return (
    <div className="p-4 bg-cover bg-center dark:bg-slate-700">
      <Header />
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <BoxSearch />
          <div className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
            {movies.map((movie) => (
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
