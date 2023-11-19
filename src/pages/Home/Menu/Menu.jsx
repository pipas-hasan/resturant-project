import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const dessert =  menu.filter(item => item.category === 'dessert');
    const pizza =  menu.filter(item => item.category === 'pizza');
    const salad =  menu.filter(item => item.category === 'salad');
    const soup =  menu.filter(item => item.category === 'soup');
    const offered =  menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
          <title>Our menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"} para={"Would you like to try a dish?"}></Cover>
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory img={dessertImg} items={dessert} title={"dessert"}></MenuCategory>
      <MenuCategory img={pizzaImg} items={pizza} title={"pizza"}></MenuCategory>
      <MenuCategory img={saladImg} items={salad} title={"salad"}></MenuCategory>
      <MenuCategory img={soupImg} items={soup} title={"soup"}></MenuCategory>
    </div>
  );
}

export default Menu;
