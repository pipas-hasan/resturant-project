/* eslint-disable react/prop-types */
import cardImage from "../../../assets/home/slide1.jpg"


const SubSection = ({ subTitle, subPragraph }) => {
  return (
    <div>
      <div className="card w-96 shadow rounded-none">
        <figure className="">
          <img
            src={cardImage}
            alt="img"
            className="w-full max-h-96"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{subTitle}</h2>
          <p>{subPragraph}</p>
          <div className="card-actions">
            <button className="btn bg-slate-700 text-yellow-700 uppercase">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
