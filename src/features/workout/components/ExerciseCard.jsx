import { useState } from "react";
import ExerciseDescription from "./ExerciseDescription";

const ExerciseCard = ({ exercise, i }) => {
  const [setsCompleted, setSetsCompleted] = useState(0);

  const handleSetIncrement = () => {
    setSetsCompleted((prev) => (prev + 1) % 4);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-black/10 bg-gradient-to-b from-[#101014] to-[#1a1a22] p-4 sm:p-5 md:p-6 text-white w-full">
      <div className="absolute -right-14 -top-14 w-44 h-44 rounded-full bg-orange-600/20" />
      <div className="absolute -left-16 -bottom-16 w-44 h-44 rounded-full bg-white/5" />

      <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/55 mb-2">
            Exercise {String(i + 1).padStart(2, "0")}
          </p>
          <h2 className="capitalize text-xl sm:text-2xl font-semibold leading-tight text-white">
            {exercise.name.replaceAll("_", " ")}
          </h2>
        </div>

        <div className="shrink-0 rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-lg font-semibold text-orange-400">
          {String(i + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-12 gap-3">
        <div className="col-span-2 md:col-span-4 rounded-lg bg-white/95 text-black p-4 min-h-[118px]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">
            Muscle Group
          </p>
          <h3 className="capitalize text-lg font-semibold leading-snug">
            {exercise.muscles.join(" & ")}
          </h3>
        </div>

        <div className="col-span-1 md:col-span-3 rounded-lg bg-white/95 text-black p-4 min-h-[118px]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">
            Type
          </p>
          <h3 className="capitalize text-lg font-semibold leading-snug">
            {exercise.type}
          </h3>
        </div>

        <div className="col-span-1 md:col-span-5 rounded-lg bg-white/95 text-black p-4 min-h-[118px]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">
            {exercise.unit}
          </p>
          <h3 className="text-2xl font-semibold">{exercise.reps}</h3>
        </div>

        <div className="col-span-1 md:col-span-3 rounded-lg bg-white/95 text-black p-4 min-h-[110px]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">
            Rest
          </p>
          <h3 className="text-xl font-semibold">{exercise.rest}s</h3>
        </div>

        <div className="col-span-1 md:col-span-4 rounded-lg bg-white/95 text-black p-4 min-h-[110px]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">
            Tempo
          </p>
          <h3 className="text-xl font-semibold">{exercise.tempo}</h3>
        </div>

        <button
          onClick={handleSetIncrement}
          className="col-span-2 md:col-span-5 min-h-[110px] rounded-lg bg-orange-600 text-white p-4 text-left transition-all duration-300 hover:bg-orange-500 active:scale-[0.98]"
        >
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/75 mb-2">
            Set Tracker
          </p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-base md:text-lg font-medium">Sets Completed</h3>
              <p className="text-xs md:text-sm text-white/75 mt-1">
                Tap after each finished set
              </p>
            </div>

            <div className="text-3xl sm:text-4xl font-semibold leading-none">
              {setsCompleted}/3
            </div>
          </div>
        </button>
      </div>

      <div className="relative z-10 mt-5 rounded-lg border border-white/15 bg-black/35 p-4">
        <ExerciseDescription exercise={exercise} />
      </div>
    </div>
  );
};

export default ExerciseCard;
