import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBar/NavBer";

const Main = () => {
  return (
    <div>
      <NavBer/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Main;
