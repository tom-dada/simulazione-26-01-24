import { Box } from "@chakra-ui/react";
import { MovieList } from "../components/MovieList/MovieList";
import { getMovies } from "../api/omdb";

async function movieLoader() {
  const movies = getMovies();
  return { movies };
}

export default function Movies() {
  return (
    <Box>
      <MovieList />
    </Box>
  );
}
