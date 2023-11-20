/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {

    const {image, name, price, recipe} = item;

  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="photo"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <p>Price: ${price}</p>
            <div className="card-actions justify-center">
            <button className="btn bg-slate-700 text-yellow-700 uppercase">add to cart</button>
          </div>
          </div>
        </div>
      </div>
  );
}

export default FoodCard;
