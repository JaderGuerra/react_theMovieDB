import axios from "axios";

export const ApiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    language: "es-ES",
    api_key: "a97061e35b0b95cc28f22973518df71c",
  },
});
