import React, { lazy } from "react";

const HomePage = lazy(() => import("@/pages/asram/AsramHome"));
const MedicalPage = lazy(() => import("@/pages/medical/MedicalPage"));
const MedicalAcademicsPage = lazy(() => import("@/pages/medical/MedicalAcademicsPage"));
const MedicalResearchPage = lazy(() => import("@/pages/medical/MedicalResearchPage"));
const ParaMedicalPage = lazy(() => import("@/pages/paramedical/ParaMedicalPage"));
const ParaMedicalAcademicsPage = lazy(() => import("@/pages/paramedical/ParaMedicalAcademicsPage"));
const ParaMedicalResearchPage = lazy(() => import("@/pages/paramedical/ParaMedicalResearchPage"));
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
const AsramLatest = lazy(() => import("@/pages/asram/AsramLatest"));
const EventsPage = lazy(() => import("@/pages/events/EventsPage"));

const routesConfig = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
    layout: "main",
  },
  {
    path: "/asram-home",
    label: "Asram Latest",
    element: <AsramLatest />,
    layout: "asram-latest",
  },
  {
    path: "/about-asram",
    label: "About ASRAM",
    element: <AboutAsramPage />,
    layout: "aboutasram",
  },
  {
    path: "/nursing-academics",
    label: "Nursing Academics",
    element: <AcademicsPage />,
    layout: "academics",
  },
  {
    path: "/medical",
    label: "Medical College",
    element: <MedicalPage />,
    layout: "medical",
  },
  {
    path: "/medical-academics",
    label: "Medical Academics",
    element: <MedicalAcademicsPage />,
    layout: "medical",
  },
  {
    path: "/medical-research",
    label: "Medical Research",
    element: <MedicalResearchPage />,
    layout: "medical",
  },
  {
    path: "/paramedical",
    label: "ParaMedical College",
    element: <ParaMedicalPage />,
    layout: "paramedical",
  },
  {
    path: "/paramedical-academics",
    label: "ParaMedical Academics",
    element: <ParaMedicalAcademicsPage />,
    layout: "paramedical",
  },
  {
    path: "/paramedical-research",
    label: "ParaMedical Research",
    element: <ParaMedicalResearchPage />,
    layout: "paramedical",
  },
  {
    path: "/nursing",
    label: "Nursing",
    element: <NursingPage />,
    layout: "nursing",
  },
  {
    path: "/nursing-research",
    label: "Nursing Research",
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
    path: "/events",
    label: "Events",
    element: <EventsPage />,
    layout: "events",
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
