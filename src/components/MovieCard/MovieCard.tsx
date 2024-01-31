import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { MovieType } from "../../types/types";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movieDetails: MovieType;
}

export const MovieCard = ({ movieDetails }: MovieCardProps) => {
  return (
    <Box>
      <Link to={`/movie/${movieDetails.imdbID}`}>
        <Card maxW="sm">
          <CardBody>
            <Image src={movieDetails.Poster} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{movieDetails.Title}</Heading>
              <Text>{movieDetails.Year}</Text>
              <Text>{movieDetails.Type}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};
