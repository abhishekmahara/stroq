import { calculateVolume } from "./workout";

export const getPerformanceTrend = (workouts) => {
  if (!workouts || workouts.length < 2) return "improving";

  const [latest, previous] = workouts;

  const latestVolume = calculateVolume(
    latest.sets,
    latest.reps,
    latest.weight
  );

  const previousVolume = calculateVolume(
    previous.sets,
    previous.reps,
    previous.weight
  );

  if (latestVolume > previousVolume) return "improving";
  if (latestVolume < previousVolume) return "dropping";
  return "stagnant";
};
