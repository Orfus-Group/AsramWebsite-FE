import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NursingLayout from "./layouts/NursingLayout";
import LoadingScreen from "./components/loader/LoadingScreen";
import routesConfig from "./routes/routesConfig";
import AcademicsLayout from "./layouts/AcademicsLayout";

const App = () => {
  const nursingRoute = routesConfig.find(r => r.path === "/nursing");
  const academicsRoute = routesConfig.find(r => r.path === "/academics");

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

        {/* ---------- ASRAM MAIN LAYOUT ---------- */}
        <Route path="/" element={<MainLayout />}>
          {routesConfig
            .filter((r) => !r.nursing && r.path !== "/nursing")
            .map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
        </Route>

        {/* ---------- NURSING LAYOUT ---------- */}
        <Route path="/nursing" element={<NursingLayout />}>
          <Route index element={nursingRoute.element} />
        </Route>

          <Route path="/academics" element={<AcademicsLayout />}>
          <Route index element={academicsRoute.element} />
        </Route>

      </Routes>
    </Suspense>
  );
};

export default App;
