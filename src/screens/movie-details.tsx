import { Box } from "@chakra-ui/react";
import { getDetailMovie } from "../api/omdb";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { DetailMovieType } from "../types/types";
import { useLoaderData } from "react-router-dom";

export const movieDetailsLoader = async (movieId: string) => {
  const movie_by_id = await getDetailMovie(movieId);
  return movie_by_id;
};

export default function MovieDetails() {
  const movieDetailsFromApi = useLoaderData() as DetailMovieType;
  return (
    <Box>
      <MovieDetail movieDetails={movieDetailsFromApi} />
    </Box>
  );
}
