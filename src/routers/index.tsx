/* import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import NotFoundPage from "../screens/NotFoundPage";
const AboutScreen = React.lazy(() => import("../screens/AboutScreen"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<h1>Cargando</h1>}>
        <AboutScreen />
      </Suspense>
    ),
  },
]); */