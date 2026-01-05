import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import LoadingScreen from "./components/loader/LoadingScreen";
import routesConfig from "./routes/routesConfig";
import LayoutSwitcher from "./layouts/LayoutSwitcher";
import ScrollToReset from "./components/common/ScrollToReset";
import usePageTitle from "./hooks/usePageTitle";

import { CollegeProvider } from "./context/CollegeContext";

const App = () => {
  usePageTitle();

  return (
    <CollegeProvider>
      <LazyMotion features={domAnimation}>
        <Suspense fallback={<LoadingScreen />}>
          <ScrollToReset />
          <Routes>
            <Route path="/*" element={<LayoutSwitcher />}>
              {routesConfig.map(({ path = "", element }, index) => (
                <Route
                  key={index}
                  path={path === "/" ? "" : path.replace(/^\//, "")}
                  element={element}
                />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </LazyMotion>
    </CollegeProvider>
  );
};

export default App;
