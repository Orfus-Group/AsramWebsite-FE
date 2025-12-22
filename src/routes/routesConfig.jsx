import React, { lazy } from "react";

const HomePage = lazy(() => import("@/pages/asram/AsramHome"));
const NursingPage = lazy(() => import("@/pages/nursing/NursingPage"));
const AcademicsPage = lazy(() => import("@/pages/academics/AcademicsPage"));
const ResearchPage = lazy(() => import("@/pages/research/ResearchPage"));
const NewsPage = lazy(() => import("@/pages/news/NewsPage"));
const FacultyPage = lazy(() => import("@/pages/faculty/FacultyPage"));
const GlobalCommunityHealthPage = lazy(() => import("@/pages/faculty/GlobalCommunityHealthPage"));
const CampusLifePage = lazy(() => import("@/pages/campus-life/CampusLifePage"));
const AboutAsramPage = lazy(() => import("@/pages/about-asram/AboutAsramPage"));

const routesConfig = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
    layout: "main",
  },
  {
    path: "/about-asram",
    label: "About ASRAM",
    element: <AboutAsramPage />,
    layout: "aboutasram",
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
  {
    path: "/campus-life",
    label: "Campus Life",
    element: <CampusLifePage />,
    layout: "main",
  },
  {
    path: "/faculty",
    label: "Faculty",
    element: <FacultyPage />,
    layout: "faculty",
  },
  {
    path: "/community-health",
    label: "Global Community Health",
    element: <GlobalCommunityHealthPage />,
    layout: "faculty",
  },
];

export default routesConfig;
