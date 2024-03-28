import { useGetMovies } from "../hooks/useGetMovies";
import { Loading } from "../components";
import { Card } from "../components/Card";

//import { Suspense } from "react";
//import { Link } from "react-router-dom";

export default function HomeScreen() {
  const { isloading, movies } = useGetMovies();

  return (
    <div>
      {isloading && <Loading />}
      {!isloading && (
        <div className="flex justify-center flex-wrap gap-3 max-w-screen-xl	mx-auto md:gap-9">
          {movies.map((movie) => (
            <Card key={movie.id} movies={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
