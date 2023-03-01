import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navigation from "./components/Navbar/Navigation";
import Admission from "./pages/Admission/Admission";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teacher/Teachers";

function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/teacher" element={<Teachers />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
