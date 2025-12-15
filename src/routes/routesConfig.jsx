import React, { lazy } from "react";

const AsramHomePage = lazy(() => import("@/pages/asram/AsramLatestHome"));
const HomePage = lazy(() => import("@/pages/asram/AsramHome"));
const NursingPage = lazy(() => import("@/pages/nursing/NursingPage"));
const AcademicsPage = lazy(() => import("@/pages/academics/AcademicsPage"));
const ResearchPage = lazy(() => import("@/pages/research/ResearchPage"));
const NewsPage = lazy(() => import("@/pages/news/NewsPage"));

const routesConfig = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
    layout: "main",
  },
  {
    path: "/asram-home",
    label: "AsramHome",
    element: <AsramHomePage />,
    layout: "main",
  },
  {
    path: "/academics",
    label: "Academics",
    element: <AcademicsPage />,
    layout: "academics",
  },
  {
    path: "/nursing",
    label: "Nursing",
    element: <NursingPage />,
    layout: "nursing",
  },
  {
    path: "/research",
    label: "Research",
    element: <ResearchPage />,
    layout: "research",
  },
  {
    path: "/news",
    label: "News",
    element: <NewsPage />,
    layout: "news",
  },
];

export default routesConfig;
