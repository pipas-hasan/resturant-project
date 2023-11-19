/* eslint-disable react/prop-types */
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
  return (
    <div>
        {title && <Cover img={img} title={title} para={"Would you like to try a dish?"}></Cover>}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 pb-10">
           {
            items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        } 
        </div>
      
    </div>
  );
}

export default MenuCategory;
