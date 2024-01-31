import { LoaderFunctionArgs, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/error-page";
import MovieDetails, { movieDetailsLoader } from "../screens/movie-details";
import Movies, { movieLoader } from "../screens/movies";
import Root from "../screens/root/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: movieLoader,
    children: [
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails />,
      }
    ],
  },
]);
