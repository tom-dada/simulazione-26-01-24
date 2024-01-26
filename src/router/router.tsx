import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/error-page";
import Root from "../screens/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
