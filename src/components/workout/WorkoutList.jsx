import PRBadge from "./PRBadge";
import {
  calculateVolume,
  isWeightPR,
  isVolumePR,
} from "../../utils/workout";
import { formatWorkoutDate } from "../../utils/date";

const WorkoutList = ({ workouts }) => {
  if (workouts.length === 0) {
    return (
      <p className="text-gray-500 italic">
        No workouts logged yet.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {workouts.map((w) => {
        const volume = calculateVolume(
          w.sets,
          w.reps,
          w.weight
        );

        const weightPR = isWeightPR(
          workouts,
          w.exercise,
          w.weight
        );

        const volumePR = isVolumePR(
          workouts,
          w.exercise,
          volume
        );

        return (
          <div
            key={w.id}
            className="bg-white p-4 rounded-lg shadow"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">
                {w.exercise}
                {weightPR && <PRBadge label="Weight PR" />}
                {volumePR && <PRBadge label="Volume PR" />}
              </h3>

              <span className="text-xs text-gray-400">
                {formatWorkoutDate(w.date)}
              </span>
            </div>

            {/* Main workout info */}
            <p className="text-gray-700 mt-2">
              {w.sets} × {w.reps} @ {w.weight} kg
            </p>

            <p className="text-sm text-gray-500">
              Volume: {volume} kg
            </p>

            {/* Notes */}
            {w.notes && (
              <p className="text-sm text-gray-500 mt-1">
                Notes: {w.notes}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutList;
