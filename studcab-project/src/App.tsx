import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-[100dvh] grid grid-rows-[3.5rem,1fr]">
      <Navbar />
      <div className="bg-soft-white"></div>
    </div>
  );
};

export default App;
