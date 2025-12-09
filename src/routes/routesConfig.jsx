import React, { lazy } from "react";

const HomePage = lazy(() => import("../pages/asram/AsramHome"));
const NursingPage = lazy(() => import("../pages/nursing/NursingPage"));
const AcademicsPage = lazy(() => import("../pages/academics/AcademicsPage"));

const routesConfig = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
  },
  {
    path: "/academics",
    label: "Academics",
    element: <AcademicsPage />,
  },
  {
    path: "/nursing",
    label: "Nursing",
    element: <NursingPage />,
    nursing: true,
  },
];

export default routesConfig;
