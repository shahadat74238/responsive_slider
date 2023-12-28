/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoSearch, IoReloadSharp } from "react-icons/io5";

const Card1 = ({ product }) => {
  // console.log(product);
  return (
    <div className=" group  hover:shadow-md  grid grid-cols-1 md:grid-cols-2">
      <div className="relative overflow-hidden">
        <img
          className=" h-full w-full object-contain transition-transform transform scale-100 duration-500 group-hover:scale-105"
          src="https://cdn.thewirecutter.com/wp-content/media/2022/11/24inchmonitors-2048px-9977-3x2-1.jpg"
          alt="Loading Image"
        />
        {product?.offer && (
          <div className=" absolute top-3 left-3 z-10 ">
            <div className="bg-orange-500 flex items-center justify-center rounded-full h-14 w-14">
              <h1 className="text-white font-medium">-{product.offer}</h1>
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex items-center gap-3 justify-center">
            <div className="p-2  hover:text-orange-500 duration-500  cursor-pointer group rounded-full bg-white">
              <IoMdHeart className="md:text-xl font-bold" />
            </div>
            <div className="p-2 hover:text-orange-500 duration-500 cursor-pointer group rounded-full bg-white">
              <IoSearch className="md:text-xl font-bold" />
            </div>
            <div className="p-2 hover:text-orange-500 duration-500 cursor-pointer group rounded-full bg-white">
              <IoReloadSharp className="md:text-xl font-bold" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
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
        <h1 className="text-lg md:text-xl font-semibold">{product?.name}</h1>
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
        <p className="text-justify text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, officiis.
        </p>
        <div className="flex justify-center mt-5">
          <button className="lg:opacity-0 group-hover:opacity-100 duration-500 lg:hover:text-orange-500 rounded-full bg-orange-500 px-5 hover:bg-transparent border border-orange-500 text-sm md:text-base py-2 text-white md:font-semibold">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
