import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./slider.css";
import { useEffect, useState } from "react";
import Card1 from "../Card/Card1";
import "./slider.css";

const Slide1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="p-5 lg:p-10 flex justify-center items-center ">
            <div className="grid grid-cols-2 gap-6">
              {products?.slice(0, 4).map((product) => (
                <Card1 key={product.id} product={product} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 lg:p-10 flex justify-center items-center ">
            <div className="grid grid-cols-2 gap-6">
              {products?.slice(4, 8).map((product) => (
                <Card1 key={product.id} product={product} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 lg:p-10 flex justify-center items-center ">
            <div className="grid grid-cols-2 gap-6">
              {products?.slice(5, 9).map((product) => (
                <Card1 key={product.id} product={product} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide1;
