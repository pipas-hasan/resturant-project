/* eslint-disable react/prop-types */
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";
import { Link  } from "react-router-dom"

const MenuCategory = ({items, title, img}) => {
  return (
    <div className="max-w-6xl mx-auto">
        {title && <Cover img={img} title={title} para={"Would you like to try a dish?"}></Cover>}
        <div className="grid grid-cols-2 gap-8 pb-10">
           {
            items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        } 
        </div>
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mb-8">Order now</button>
        </Link>
      
    </div>
  );
}

export default MenuCategory;
