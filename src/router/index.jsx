import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layout/RootLayout";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import MyPortfolio from "../fragments/MyPortfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <MyPortfolio />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
