import { createBrowserRouter } from "react-router";
import LayOut from "../Layout/LayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Bills from "../pages/Bills";
import MyPayBills from "../pages/MyPayBills";
import ProfileAvatar from "../pages/ProfileAvatar";
import BillDetails from "../pages/BillDetails";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
      {
        path: "/home",
        Component: Home,
        loader: () =>
          fetch("https://bill-management-server-indol.vercel.app/Recent").then((res) => res.json()),
      },
      {
        path: "/bills",
        Component: Bills,
        loader: () =>
          fetch("https://bill-management-server-indol.vercel.app/bills").then((res) => res.json()),
      },
      {
        path: "/billDetails/:id",
        Component: BillDetails,
        loader: ({params}) =>
          fetch(`https://bill-management-server-indol.vercel.app/billDetails/${params.id}`).then((res) => res.json()),
      },
      {
        path: "/profile",
        Component: ProfileAvatar,
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
      {
        path:"*",
        Component:ErrorPage
      }
    ],
  },
]);
