import { Route, Routes } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Footer } from "./components/FooterArea/FooterArea";
import Login from "./components/Login/Login";
import Navigation from "./components/Navbar/Navigation";
import Admission from "./pages/Admission/Admission";
import Contact from "./pages/Contact/Contact";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch/NoMatch";
import Notice from "./pages/Notice/Notice";
import Routine from "./pages/Routine/Routine";
import TeacherDetails from "./pages/Teacher/TeacherDetails";
import Teachers from "./pages/Teacher/Teachers";

function App() {
  return (
    <div className="bg-[url('http://localhost:5173/images/bg-patern.jpg')] bg-repeat">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/teacher/:teacherId" element={<TeacherDetails />}></Route>
        <Route path="/teacher" element={<Teachers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/events" element={<Event />}></Route>
        <Route path="/notices" element={<Notice />}></Route>
        <Route path="/routine" element={<Routine />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
