import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
