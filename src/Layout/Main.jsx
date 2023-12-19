import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBar/NavBer";

const Main = () => {

  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login');

  return (
    <div>
      
      {noHeaderFooter || <NavBer/>}
      <Outlet/>
      { noHeaderFooter || <Footer/>}
    </div>
  );
}

export default Main;
