import Banner from "../Banner/Banner";
import SideSlider from "../SideSlider/SideSlider";

const Slider2 = () => {
  return (
    <div className="grid mb-5 grid-cols-1 gap-6 lg:grid-cols-2 ">
      <div className="px-5">
        <Banner />
      </div>
      <div className="px-5">
        <SideSlider />
      </div>
    </div>
  );
};

export default Slider2;
