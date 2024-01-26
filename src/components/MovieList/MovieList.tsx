import { Box, SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieType } from "../../types/types";

interface MovieListProps {
  movies: MovieType[];
};

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Box>
      <SimpleGrid columns={4} spacing={10}>
        {movies.map((movie: MovieType) => (
          <MovieCard key={movie.imdbID} movieDetails={movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
