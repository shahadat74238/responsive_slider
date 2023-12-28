import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import Rating from "react-rating";

const card2 = ({ product }) => {
  return (
    <div className="grid grid-cols-3 cursor-pointer hover:shadow-lg duration-500">
      <div className="col-span-1">
         <img className="h-40 w-full object-cover" src="https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg" alt="Loading Image" />
      </div>
      <div className="col-span-2 p-5">
      <Rating
          emptySymbol={
            <MdOutlineStarOutline className="text-orange-500  text-xl lg:text-2xl" />
          }
          fullSymbol={
            <MdOutlineStarPurple500 className="text-orange-500  text-xl lg:text-2xl" />
          }
          initialRating={product.rating}
          readonly
          fractions={2}
        />
        <h1 className="text-xl font-medium">{product.name}</h1>
        <div className="flex gap-5 relative">
          {product.offer_price && (
            <p className=" text-orange-500 md:text-lg font-medium">
              $ {product.offer_price}
            </p>
          )}
          <p className={product.offer_price ? "text-gray-500  font-medium" : "md:text-lg font-medium text-orange-500"}>
            {" "}
            $ {product.price}
          </p>
          {product.offer_price && <hr className="absolute w-12 border border-gray-500 top-3 left-20" />}
        </div>
      </div>
    </div>
  );
};

export default card2;
