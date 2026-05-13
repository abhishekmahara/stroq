import Hero from "./pages/Hero";
import Generator from "./features/workout/components/Generator";
import Workout from "./features/workout/components/Workout";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Splash from "./components/splash/Splash";

import { useState } from "react";
import { generateWorkout } from "./features/workout/utils/generateWorkout";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Nutrition from "./pages/Nutrition";
import WorkoutGuide from "./pages/WorkoutGuide";
import ScrollToTop from "./components/common/ScrollToTop";
import StroqActivities from "./pages/Activities";

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
        <Route path="/activities" element={<StroqActivities />} />
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
        <Route path="/guides/nutrition" element={<Nutrition />} />
        <Route path="/guides/workout" element={<WorkoutGuide />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
