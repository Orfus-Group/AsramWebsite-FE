import React, { lazy } from "react";

const HomePage = lazy(() => import("@/pages/asram/AsramHome"));
const NursingPage = lazy(() => import("@/pages/nursing/NursingPage"));
const AcademicsPage = lazy(() => import("@/pages/academics/AcademicsPage"));
const ResearchPage = lazy(() => import("@/pages/research/ResearchPage"));
const NewsPage = lazy(() => import("@/pages/news/NewsPage"));
const FacultyPage = lazy(() => import("@/pages/faculty/FacultyMainPage"));
const FacultyProfilePage = lazy(() => import("@/pages/faculty/FacultyProfilePage"));
const GlobalCommunityHealthPage = lazy(() => import("@/pages/faculty/GlobalCommunityHealthPage"));
const CampusLifePage = lazy(() => import("@/pages/campus-life/CampusLifePage"));
const AboutAsramPage = lazy(() => import("@/pages/about-asram/AboutAsramPage"));
const HealthcarePage = lazy(() => import("@/pages/healthcare/HealthcarePage"));
const NewsArticlePage = lazy(() => import("@/pages/news/NewsArticlePage"));
const GeneralSurgeryPage = lazy(() => import("@/pages/healthcare/departments/general-surgery/GeneralSurgeryPage"));

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
    path: "/news/:id",
    label: "News Detail",
    element: <NewsArticlePage />,
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
    path: "/faculty/:id",
    label: "Faculty Profile",
    element: <FacultyProfilePage />,
    layout: "faculty",
  },
  {
    path: "/community-health",
    label: "Global Community Health",
    element: <GlobalCommunityHealthPage />,
    layout: "faculty",
  },
  {
    path: "/healthcare",
    label: "Healthcare",
    element: <HealthcarePage />,
    layout: "Healthcare",
  },
  {
    path: "/healthcare/general-surgery",
    label: "General Surgery Department",
    element: <GeneralSurgeryPage />,
    layout: "Healthcare",
  },
];

export default routesConfig;
