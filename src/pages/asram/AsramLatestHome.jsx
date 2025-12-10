import React, { lazy, Suspense } from "react";
import LoadingScreen from "../../components/loader/LoadingScreen";
import AsramPage from "./AsramPage";
import AsramLatestPage from "./AsramPage2";

const NursingPage = lazy(() =>
  import("../../pages/nursing/NursingPage")
);

export default function AsramHomePage() {
  return (
    <>
    <AsramLatestPage />
    </>
  );
}
