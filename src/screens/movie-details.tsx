import { Box } from "@chakra-ui/react";
import { getDetailMovie } from "../api/omdb";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { DetailMovieType } from "../types/types";
import { useLoaderData } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const movieDetailsLoader = async ({ id }: { id: string }) => {
  const movieDetails = await getDetailMovie(id);
  return movieDetails;
}

export default function MovieDetails() {
  const movieDetailsFromApi = useLoaderData() as DetailMovieType;
  return (
    <Box>
      <Header />
      <MovieDetail movieDetails={movieDetailsFromApi} />
    </Box>
  );
}
