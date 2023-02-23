import { useState } from "react";
import "./App.css";
import Admit from "./components/Admit/Admit";
import Benefits from "./components/Benefits/Benefits";
import FooterArea from "./components/FooterArea/FooterArea";
import Navigation from "./components/Navbar/Navigation";
import Schedule from "./components/Schedule/Schedule";
import BannerSlider from "./components/Slider/BannerSlider";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navigation />
      <BannerSlider />
      <Benefits />
      <Schedule />
      <Testimonial />
      <Admit />
      <FooterArea />
    </div>
  );
}

export default App;
