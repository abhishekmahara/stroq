import { useState } from "react";

import Generator from "../features/workout/components/Generator";
import Workout from "../features/workout/components/Workout";
import { generateWorkout } from "../features/workout/utils/generateWorkout";

const WorkoutGenerator = () => {
  const [workout, setWorkout] = useState(null);
  const [split, setSplit] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const updateWorkout = () => {
    if (muscles.length === 0) return;

    const nextWorkout = generateWorkout({ split, muscles, goal });
    setWorkout(nextWorkout);
  };

  return (
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
  );
};

export default WorkoutGenerator;
