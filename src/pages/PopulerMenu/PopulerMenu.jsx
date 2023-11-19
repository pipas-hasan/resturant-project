
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  return (
    <div className="max-w-6xl mx-auto my-12">
       <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
    <div className="grid grid-cols-2 gap-4">
        {
            popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
    </div>
    </div>
  );
}

export default PopulerMenu;
