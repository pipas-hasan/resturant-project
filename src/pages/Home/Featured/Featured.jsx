import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item my-14 brightness-50">
      <div className="pt-6 pb-16">
        <div className="text-white">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
        </div>
        <div className="flex gap-8 max-w-3xl mx-auto">
          <div>
            <img className="max-w-[400px]" src={feturedImage} alt="" />
          </div>
          <div className="mt-10">
            <p className="text-white">
              <span className="text-xl">
                March 20, 2023
                <br />
                WHERE CAN I GET SOME?
              </span>
              <br />
              <span className=" text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </span>
            </p>
            <button className="uppercase text-yellow-200 border-b-2 mt-4">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
