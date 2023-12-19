import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense, useEffect } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const InfoPage = lazy(() => import("./pages/InfoPage"));
const GradesPage = lazy(() => import("./pages/GradesPage"));
const RatingPage = lazy(() => import("./pages/RatingPage"));
const SchedulePage = lazy(() => import("./pages/SchedulePage"));
const AssignmentsPage = lazy(() => import("./pages/AssignmentsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const Layout = () => {
  return (
    <div className="h-[100dvh] grid grid-rows-[3.5rem,1fr]">
      <Navbar />
      <div className="overflow-hidden sm:p-5 bg-soft-white dark:bg-soft-black-200 dark:text-soft-white text-soft-black-200">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Route>
    </Routes>
  );
};

export default App;
