import { createBrowserRouter } from "react-router";
import LayOut from "../Layout/LayOut";
import Home from "../pages/Home"

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:LayOut,
    children:[
        {
            path:'/home',
            Component: Home
        }
    ]
  },
]);