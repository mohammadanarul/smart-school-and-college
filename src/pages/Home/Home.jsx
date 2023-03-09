import Admit from "../../components/Admit/Admit";
import Benefits from "../../components/Benefits/Benefits";
import Schedule from "../../components/Schedule/Schedule";
import BannerSlider from "../../components/Slider/BannerSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import Topper from "../../components/Topper/Topper";

function Home() {
  return (
    <div className="">
      <BannerSlider />
      <Benefits />
      <Topper />
      <Schedule />

      <Testimonial />
      <Admit />
    </div>
  );
}

export default Home;
