import Admit from "../../components/Admit/Admit";
import Benefits from "../../components/Benefits/Benefits";
import FooterArea from "../../components/FooterArea/FooterArea";
import Schedule from "../../components/Schedule/Schedule";
import BannerSlider from "../../components/Slider/BannerSlider";
import Testimonial from "../../components/Testimonial/Testimonial";

function Home() {
  return (
    <div className="">
      <BannerSlider />
      <Benefits />
      <Schedule />
      <Testimonial />
      <Admit />
      <FooterArea />
    </div>
  );
}

export default Home;
