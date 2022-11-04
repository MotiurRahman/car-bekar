import Checkout from "../Components/Checkout/Checkout";
import About from "../Components/Home/About/About";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Orders from "../Components/Orders/Orders";
import Sign_up from "../Components/Sign_up/Sign_up";
import Main from "../Layout/Main";
import PrivateRoute from "../Privateroute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Sign_up></Sign_up> },
      {
        path: "/checkout/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:8000/service/${params.id}`);
        },
        element: <Checkout></Checkout>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
