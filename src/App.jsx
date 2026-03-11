import Hero from "./components/pages/Hero";
import Generator from "./components/pages/Generator";
import Workout from "./components/pages/Workout";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Splash from "./components/splash/Splash";

import { useState } from "react";
import { generateWorkout } from "./utils/function";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Nutrition from "./components/pages/Nutrition";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [workout, setWorkout] = useState(null);
  const [split, setSplit] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) return;
    let newWorkout = generateWorkout({ split, muscles, goal });
    setWorkout(newWorkout);
  }

  return (
    <main className="bgColor min-h-screen flex flex-col text-white text-sm sm:text-base">

      {loading && <Splash onFinish={() => setLoading(false)} />}
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route
          path="/generator"
          element={
            <>
              <Generator
                split={split}
                muscles={muscles}
                goal={goal}
                setSplit={setSplit}
                setMuscles={setMuscles}
                setGoal={setGoal}
                updateWorkout={updateWorkout}
              />

              {workout && <Workout workout={workout} />}
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;