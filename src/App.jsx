import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Splash from "./components/splash/Splash";
import About from "./pages/About";
import StroqActivities from "./pages/Activities";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Nutrition from "./pages/Nutrition";
import WorkoutGenerator from "./pages/WorkoutGenerator";
import WorkoutGuide from "./pages/WorkoutGuide";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bgColor min-h-screen flex flex-col text-white text-sm sm:text-base">
      {loading && <Splash onFinish={() => setLoading(false)} />}

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<StroqActivities />} />
        <Route path="/generator" element={<WorkoutGenerator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/guides/nutrition" element={<Nutrition />} />
        <Route path="/guides/workout" element={<WorkoutGuide />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
