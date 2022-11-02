import About from "../Components/Home/About/About";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Sign_up from "../Components/Sign_up/Sign_up";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Sign_up></Sign_up> },
    ],
  },
]);

export default router;
