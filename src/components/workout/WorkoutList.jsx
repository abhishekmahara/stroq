import React from 'react'

const WorkoutList = ({workouts}) => {
    if (workouts.length === 0) {
        return <p className="text-italic text-gray-500">No workouts logged yet.</p>;
    }
  return (
   <div className="space-y-3">
      {workouts.map((w) => (
        <div
          key={w.id}
          className="bg-white p-4 rounded-lg shadow"
        >
          <div className="flex justify-between">
            <h3 className="font-semibold">{w.exercise}</h3>
            <span className="text-sm text-gray-500">
              {w.date}
            </span>
          </div>

          <p className="text-gray-700 mt-1">
            {w.sets} × {w.reps} @ {w.weight} kg
          </p>

          {w.notes && (
            <p className="text-sm text-gray-500 mt-1">
              {w.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default WorkoutList
