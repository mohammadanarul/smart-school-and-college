import Admit from "../../components/Admit/Admit";
import Benefits from "../../components/Benefits/Benefits";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";
import Schedule from "../../components/Schedule/Schedule";
import BannerSlider from "../../components/Slider/BannerSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import Topper from "../../components/Topper/Topper";

function Home() {
  return (
    <>
      <Navigation />
      <BannerSlider />
      <Benefits />
      <Topper />
      <Schedule />

      <Testimonial />
      <Admit />
      <Footer />
    </>
  );
}

export default Home;
