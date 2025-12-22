import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import LoadingScreen from "./components/loader/LoadingScreen";
import routesConfig from "./routes/routesConfig";
import LayoutSwitcher from "./layouts/LayoutSwitcher";

const App = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Suspense fallback={<LoadingScreen />}>
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
  );
};

export default App;
