import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Root from "./pages/Root";
import MultiStepFormContainer from "./pages/containers/MultiStepFormContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/user-details", element: <MultiStepFormContainer /> },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
