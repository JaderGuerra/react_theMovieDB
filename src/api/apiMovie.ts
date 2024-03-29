import axios from "axios";

export const ApiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwNjFlMzViMGI5NWNjMjhmMjI5NzM1MThkZjcxYyIsInN1YiI6IjVmOGVmMjhhZDEzMzI0MDAzODJhMTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DyvW_5W3Vss2Cp74Hrstcd0O-S2dzSUr0clJkgU-xEI",
  },
  params: {
    language: "es-ES",
    api_key: "a97061e35b0b95cc28f22973518df71c",
  },
});
