import { ApiMovie } from "../api/apiMovie";

export const selectFavoriteMovie = async (movieId: number) => {
  try {
    const response = await ApiMovie.post(`account/9753824/favorite`, {
      media_type: "movie",
      media_id: movieId,
      favorite: true,
    });
    if (response.status === 200) {
      console.log("La película se marcó como favorita correctamente.");
    } else {
      console.error("Error al marcar la película como favorita.");
    }
  } catch (error) {
    console.log({
      error: `Error al marcar la película como favorita, selectFavoriteMovie -> ${error}`,
    });
  }
};
