import { Box } from "@chakra-ui/react";
import { MovieList } from "../components/MovieList/MovieList";
import { getMovies } from "../api/omdb";
import { useLoaderData } from "react-router-dom";
import { MovieType } from "../types/types";

export const movieLoader = async () => {
  const movies = await getMovies();
  return movies;
}

export default function Movies() {
  const moviesFromApi = useLoaderData() as MovieType[];
  return (
    <Box>
      <MovieList movies={moviesFromApi} />
    </Box>
  );
}
