import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Grades from "./pages/Grades";
import Rating from "./pages/Rating";
import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";

const App = () => {
  return (
    <div className="h-[100dvh] grid grid-rows-[3.5rem,1fr]">
      <Navbar />
      <div className="bg-soft-white dark:bg-soft-black-200 dark:text-soft-white text-soft-black-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
