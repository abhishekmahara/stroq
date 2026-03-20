import { useState } from "react";
import ExerciseDescription from "./ExerciseDescription";

const panelShapes = [
  "rounded-[1.25rem] after:absolute after:-bottom-3 after:left-8 after:h-6 after:w-20 after:rounded-full after:bg-black",
  "rounded-[1.25rem] after:absolute after:-top-3 after:left-10 after:h-6 after:w-10 after:rounded-full after:bg-black",
  "rounded-[1.25rem] after:absolute after:-bottom-3 after:right-8 after:h-6 after:w-13 after:rounded-full after:bg-black",
  "rounded-[1.25rem] after:absolute after:-top-3 after:right-10 after:h-6 after:w-9 after:rounded-full after:bg-black",
];

const ExerciseCard = ({ exercise, i }) => {
  const [setsCompleted, setSetsCompleted] = useState(0);

  const handleSetIncrement = () => {
    setSetsCompleted((prev) => (prev + 1) % 4);
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-black p-4 sm:p-5 text-white border border-white/10 justify-center lg:w-7xl ">
      
      {/* top heading */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-2">
            Exercise {String(i + 1).padStart(2, "0")}
          </p>
          <h2 className="capitalize text-xl sm:text-2xl font-semibold leading-tight text-white">
            {exercise.name.replaceAll("_", " ")}
          </h2>
        </div>

        <div className="shrink-0 rounded-[1rem] bg-orange-600 px-4 py-3 text-lg font-semibold text-white relative">
          {String(i + 1).padStart(2, "0")}
        </div>
      </div>

      {/* modular card layout */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
        {/* muscle */}
        <div
          className={`relative col-span-2 md:col-span-4 bg-white text-black p-4 min-h-[120px] ${panelShapes[0]}`}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Muscle Group
          </p>
          <h3 className="capitalize text-lg font-semibold leading-snug">
            {exercise.muscles.join(" & ")}
          </h3>
        </div>

        {/* type */}
        <div
          className={`relative col-span-1 md:col-span-3 bg-white text-black p-4 min-h-[120px] ${panelShapes[1]}`}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Type
          </p>
          <h3 className="capitalize text-lg font-semibold leading-snug">
            {exercise.type}
          </h3>
        </div>

        {/* reps */}
        <div
          className={`relative col-span-1 md:col-span-5 bg-white text-black p-4 min-h-[120px] ${panelShapes[2]}`}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
            {exercise.unit}
          </p>
          <h3 className="text-2xl font-semibold">{exercise.reps}</h3>
        </div>

        {/* rest */}
        <div
          className={`relative col-span-1 md:col-span-3 bg-white text-black p-4 min-h-[118px] ${panelShapes[3]}`}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Rest
          </p>
          <h3 className="text-xl font-semibold">{exercise.rest}</h3>
        </div>

        {/* tempo */}
        <div
          className={`relative col-span-1 md:col-span-4 bg-white text-black p-4 min-h-[118px] ${panelShapes[0]}`}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Tempo
          </p>
          <h3 className="text-xl font-semibold">{exercise.tempo}</h3>
        </div>

        {/* sets button */}
        <button
          onClick={handleSetIncrement}
          className="relative col-span-2 md:col-span-5 min-h-[118px] bg-orange-600 text-white p-4 text-left rounded-[1.25rem] transition-all duration-300 hover:bg-orange-500 active:scale-[0.98] shadow-[0_10px_25px_rgba(234,88,12,0.35)]"
        >
          <div className="absolute -top-3 right-8 h-6 w-13 rounded-full bg-black"></div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/75 mb-3">
            Tap to update
          </p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium">Sets Completed</h3>
              <p className="text-sm text-white/75 mt-1">
                Click to mark your progress
              </p>
            </div>

            <div className="text-3xl sm:text-4xl font-semibold leading-none">
              {setsCompleted}/3
            </div>
          </div>
        </button>
      </div>

      {/* description */}
      <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
        <ExerciseDescription exercise={exercise} />
      </div>
    </div>
  );
};

export default ExerciseCard;