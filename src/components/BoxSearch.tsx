import { FormEvent, useRef, useState } from "react";
import { useMovieStore } from "../store/movie.store";
import { searchMovies } from "../services/searchMovie.service";
import { useQueryClient } from "react-query";

export const BoxSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const setMovies = useMovieStore((state) => state.setMovies);
  const queryClient = useQueryClient();
  const previousSearch = useRef(searchQuery);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchQuery === "") return null;
    if (searchQuery === previousSearch.current) return;

    previousSearch.current = searchQuery;

    const movies = await searchMovies(searchQuery);
    setMovies(movies);
    queryClient.setQueryData("popularMovies", movies);
  };

  return (
    <form className="max-w-md mx-auto my-8" onSubmit={handleSearch}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          autoComplete="off"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Movies..."
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
