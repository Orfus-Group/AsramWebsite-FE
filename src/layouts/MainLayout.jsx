import { Outlet } from "react-router-dom";
import AsramMainHeader from "../features/header/AsramMainHeader";
import AsramFooter from "../pages/asram/AsramFooter";

const MainLayout = () => (
  <>
    <AsramMainHeader />
    <Outlet />
    <AsramFooter />
  </>
);

export default MainLayout;
