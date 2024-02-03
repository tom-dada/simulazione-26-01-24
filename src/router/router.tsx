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
    ],
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
    errorElement: <ErrorPage />,
    // Pretty ugly, but it works...
    loader: (args: LoaderFunctionArgs<any>) => movieDetailsLoader({ id: args.params?.id ?? '' }),
  },
]);
