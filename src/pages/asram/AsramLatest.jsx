import React, { lazy, Suspense } from "react";
import LoadingScreen from "@/components/loader/LoadingScreen";
import AsramPage from "./AsramPage";

const NursingPage = lazy(() =>
    import("@/pages/nursing/NursingPage")
);

export default function AsramLatest() {
    return (
        <>
            <AsramPage />
        </>
    );
}
