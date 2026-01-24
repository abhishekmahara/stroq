// src/utils/workout.js

export const calculateVolume = (sets, reps, weight) => {
  return sets * reps * weight;
};

export const isWeightPR = (workouts, exercise, weight) => {
  const maxWeight = Math.max(
    0,
    ...workouts
      .filter((w) => w.exercise === exercise)
      .map((w) => w.weight)
  );
  return weight > maxWeight;
};

export const isVolumePR = (workouts, exercise, volume) => {
  const maxVolume = Math.max(
    0,
    ...workouts
      .filter((w) => w.exercise === exercise)
      .map(
        (w) =>
          w.sets * w.reps * w.weight
      )
  );
  return volume > maxVolume;
};
