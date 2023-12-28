import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Card2 from "../Card/card2";

const SideSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="">
        <h1 className="uppercase text-3xl font-semibold">Best Sellers</h1>
        <hr className="w-52 border-2 border-orange-600 mt-5 rounded-xl" />
        <hr />
      </div>
      <div className="py-5">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="space-y-6">
              {products?.slice(0, 3).map((product) => (
                <Card2 key={product.id} product={product} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-6">
              {products?.slice(3, 6).map((product) => (
                <Card2 key={product.id} product={product} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-6">
              {products?.slice(6, 9).map((product) => (
                <Card2 key={product.id} product={product} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SideSlider;
