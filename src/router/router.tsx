import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/error-page";
import Root from "../screens/root/root";
import Movies from "../screens/movies";
import { movieLoader } from "../screens/movies";

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
]);
