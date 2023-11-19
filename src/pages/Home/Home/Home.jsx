import { Helmet } from "react-helmet-async";
import PopulerMenu from "../../PopulerMenu/PopulerMenu";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonals from "../Testimonals/Testimonals";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <Banner/>
      <Category/>
      <PopulerMenu/>
      <Card/>
      <Featured/>
      <Testimonals/>
    </div>
  );
}

export default Home;
