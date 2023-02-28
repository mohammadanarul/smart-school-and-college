import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar/Navigation";
import Admission from "./pages/Admission/Admission";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
      </Routes>
    </div>
  );
}

export default App;
