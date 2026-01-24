import WorkoutForm from "../components/workout/WorkoutForm";
import WorkoutList from "../components/workout/WorkoutList";

const WorkoutLog = ({ workouts, setWorkouts }) => {
  const addWorkout = (workout) => {
    setWorkouts((prev) => [workout, ...prev]);
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Workout Log</h1>

      <WorkoutForm onAddWorkout={addWorkout} />

      <WorkoutList workouts={workouts} />
    </section>
  );
};

export default WorkoutLog;
