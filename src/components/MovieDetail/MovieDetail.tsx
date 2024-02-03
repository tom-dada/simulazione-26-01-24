import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import { DetailMovieType } from "../../types/types";

interface MovieDetailProps {
    movieDetails: DetailMovieType;
}

export const MovieDetail = ({ movieDetails }: MovieDetailProps) => {
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        p={4}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          borderRadius="lg"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{movieDetails.Title}</Heading>
            <Text py="2">{movieDetails.Year}</Text>
            <Text py="2"><b>Genre:</b> {movieDetails.Genre}</Text>
            <Text py="2"><i>{movieDetails.Plot}</i></Text>
            <Text py="2"><b>Director(s):</b> {movieDetails.Director}</Text>
            <Text py="2"><b>Writer(s):</b> {movieDetails.Writer}</Text>
            <Text py="2"><b>Actors:</b> {movieDetails.Actors}</Text>
            <Text py="2"><b>Imdb Rating:</b> {movieDetails.imdbRating}</Text>
          </CardBody>

          <CardFooter>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};
