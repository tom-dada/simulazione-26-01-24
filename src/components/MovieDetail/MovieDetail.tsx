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
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={movieDetails.Poster}
          alt={movieDetails.Title}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{movieDetails.Title}</Heading>
            <Text py="2">{movieDetails.Year}</Text>
            <Text py="2">{movieDetails.Genre}</Text>
            <Text py="2">{movieDetails.Plot}</Text>
            <Text py="2">{movieDetails.Director}</Text>
            <Text py="2">{movieDetails.Writer}</Text>
            <Text py="2">{movieDetails.Actors}</Text>
            <Text py="2">{movieDetails.imdbRating}</Text>
          </CardBody>

          <CardFooter>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};
