import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/loader/LoadingScreen";
import routesConfig from "./routes/routesConfig";
import LayoutSwitcher from "./layouts/LayoutSwitcher";

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/*" element={<LayoutSwitcher />}>
          {routesConfig.map(({ path, element }) => (
            <Route
              key={path}
              path={path === "/" ? "" : path.slice(1)}
              element={element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
