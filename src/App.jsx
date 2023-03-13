import { Route, Routes } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { ProtectedRoute } from "./components/Utils/ProtecteRoute";
import About from "./pages/About/About";
import Admission from "./pages/Admission/Admission";
import AdmissionForm from "./pages/Admission/AdmissionForm";
import Contact from "./pages/Contact/Contact";

import Dashboard from "./pages/Dashboard/Dashboard";

import EBook from "./pages/EBook/EBook";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NoMatch from "./pages/NoMatch/NoMatch";
import Notice from "./pages/Notice/Notice";
import Routine from "./pages/Routine/Routine";
import TeacherDetails from "./pages/Teacher/TeacherDetails";
import Teachers from "./pages/Teacher/Teachers";

function App() {
  return (
    <div className="bg-[url('http://localhost:5173/images/bg-patern.jpg')] bg-repeat">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route
          path="/admission/admission-form"
          element={<AdmissionForm />}
        ></Route>
        <Route path="/teacher/:teacherId" element={<TeacherDetails />}></Route>
        <Route path="/teacher" element={<Teachers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/events" element={<Event />}></Route>
        <Route path="/notices" element={<Notice />}></Route>
        <Route path="/routine" element={<Routine />}></Route>
        <Route path="/e-book" element={<EBook />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
