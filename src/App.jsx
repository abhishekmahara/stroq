import Hero from "./components/pages/Hero";
import Generator from "./components/pages/Generator";
import Workout from "./components/pages/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/function";
import { Routes, Route } from "react-router-dom";

const App = () => {
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

      </Routes>
    </main>
  );
};

export default App;