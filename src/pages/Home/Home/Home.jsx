import PopulerMenu from "../../PopulerMenu/PopulerMenu";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <PopulerMenu/>
      <Card/>
    </div>
  );
}

export default Home;
