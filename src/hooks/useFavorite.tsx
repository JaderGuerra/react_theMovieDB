import { useState } from "react";
import { Movie } from "../interface/movie.interface";
import { ApiMovie } from "../api/apiMovie";

interface FavoriteMovie extends Movie {
  isFavorite: boolean;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwNjFlMzViMGI5NWNjMjhmMjI5NzM1MThkZjcxYyIsInN1YiI6IjVmOGVmMjhhZDEzMzI0MDAzODJhMTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DyvW_5W3Vss2Cp74Hrstcd0O-S2dzSUr0clJkgU-xEI";

  const addToFavorites = async (movie: Movie) => {
    try {
      const response = ApiMovie.post(
        `account/{account_id}/favorite?api_key=${API_KEY}&session_id={session_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: movie.id,
            favorite: true,
          }),
        }
      );

      if ((await response).status == 200) {
        const newFavorite: FavoriteMovie = { ...movie, isFavorite: true };
        setFavorites([...favorites, newFavorite]);
      } else {
        console.error("Error al agregar a favoritos:", (await response).status);
      }
    } catch (error) {
      console.error("Error al agregar a favoritos:", error);
    }
  };

  const removeFromFavorites = async (movieId: number) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${API_KEY}&session_id={session_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: movieId,
            favorite: false,
          }),
        }
      );

      if (response.ok) {
        const updatedFavorites = favorites.filter(
          (movie) => movie.id !== movieId
        );
        setFavorites(updatedFavorites);
      } else {
        console.error("Error al quitar de favoritos:", response.statusText);
      }
    } catch (error) {
      console.error("Error al quitar de favoritos:", error);
    }
  };

  return { favorites, addToFavorites, removeFromFavorites };
};

