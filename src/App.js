import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div data-theme="cupcake" className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
