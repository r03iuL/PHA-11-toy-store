import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Home/Main";
import Home from "../pages/Home/Home";
import AddToys from "../component/AddToys/AddToys";
import Blog from "../component/Blog/Blog";
import LogIn from "../component/LogIn/LogIn";
import Reg from "../component/Reg/Reg";
import MyToys from "../component/MyToy/MyToys";
import AllToy from "../component/All toy/AllToy";
import UpdateToy from "../component/UpdateToy/UpdateToy";
import Error from './../component/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/Reg",
        element:<Reg></Reg>,
      },
      {
        path:"/mytoy",
        element:<MyToys></MyToys>
      },
      {
        path:"/alltoy",
        element:<AllToy></AllToy>
      },
      {
        path:"/update/:id",
        element:<UpdateToy></UpdateToy>
      }
    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);
export default router;
