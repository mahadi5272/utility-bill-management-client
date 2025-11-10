import { createBrowserRouter } from "react-router";
import LayOut from "../Layout/LayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Bills from "../pages/Bills";
import MyPayBills from "../pages/MyPayBills";
import ProfileAvatar from "../pages/ProfileAvatar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
      {
        path: "/home",
        Component: Home,
        loader: () =>
          fetch("http://localhost:3000/Recent").then((res) => res.json()),
      },
      {
        path: "/bills",
        Component: Bills,
        loader:()=>fetch("http://localhost:3000/bills").then((res)=>res.json())
      },
      {
        path: "/mybills",
        Component: MyPayBills,
      },
      {
        path: "/profile",
        Component: ProfileAvatar,
      },
      {
        path: "/registition",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
