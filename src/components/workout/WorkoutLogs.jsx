import WorkoutList from "./WorkoutList";
import WorkoutForm from "./WorkoutForm";
import { useState } from "react";

const WorkoutLogs = () => {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        setWorkouts([workout, ...prev]);
    };

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">Workout Logs</h1>
            <WorkoutForm onAddWorkout={addWorkout} />
            <div>
                <h2 className="text-lg font-semibold mb-2">Workout History</h2>
               <WorkoutList workouts={workouts} />

            </div>
        </section>
    );
};

export default WorkoutLogs;
