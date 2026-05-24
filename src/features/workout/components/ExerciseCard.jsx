import { useState } from "react";

import {
  Activity,
  ArrowRight,
  Check,
} from "lucide-react";

import ExerciseDescription from "./ExerciseDescription";

const ExerciseCard = ({ exercise, i }) => {

  const [setsCompleted, setSetsCompleted] = useState(0);

  const totalSets = 3;

  const handleSetIncrement = () => {
    setSetsCompleted((prev) => (prev + 1) % (totalSets + 1));
  };

  const progress = (setsCompleted / totalSets) * 100;

  return (
    <section className="w-full flex items-center justify-center py-6">

      {/* CARD */}
      <div className="w-full max-w-[1536px] bg-white rounded-xl border border-black/10 overflow-hidden relative shadow-[0_22px_70px_rgba(0,0,0,0.07)]">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-[#fc5200]/10 blur-3xl rounded-full" />

        <div className="relative z-10">

          {/* TOP */}
          <div className="bg-[#0d0d0d] p-5 sm:p-6 lg:p-7">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              {/* LEFT */}
              <div className="flex-1">

                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-[10px] uppercase tracking-[0.18em] font-medium mb-4 backdrop-blur-xl">
                  Exercise Session
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.06em] leading-[0.95] text-white capitalize mb-3 max-w-3xl">
                  {exercise.name.replaceAll("_", " ")}
                </h2>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
                  Maintain controlled movement, stable posture,
                  and consistent tempo throughout every repetition.
                </p>

              </div>

              {/* NUMBER */}
              <div className="w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center text-xl font-semibold shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">

              {/* TARGET */}
              <div className="rounded-xl bg-white p-4">

                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500 mb-2">
                  Target
                </p>

                <h3 className="text-sm sm:text-base font-semibold capitalize leading-tight text-[#111]">
                  {exercise.muscles.join(" & ")}
                </h3>

              </div>

              {/* REPS */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">

                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-2">
                  Reps
                </p>

                <h3 className="text-2xl font-semibold text-white tracking-[-0.05em]">
                  {exercise.reps}
                </h3>

              </div>

              {/* REST */}
              <div className="rounded-xl bg-white p-4">

                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500 mb-2">
                  Rest
                </p>

                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#111]">
                  {exercise.rest}s
                </h3>

              </div>

              {/* TEMPO */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">

                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-2">
                  Tempo
                </p>

                <h3 className="text-2xl font-semibold text-white tracking-[-0.05em]">
                  {exercise.tempo}
                </h3>

              </div>

            </div>

          </div>

          {/* LOWER */}
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            {/* LEFT */}
            <div className="border-r border-black/10 p-5 sm:p-6 flex flex-col justify-between gap-6">

              {/* PROGRESS */}
              <button
                onClick={handleSetIncrement}
                className="rounded-xl bg-[#f8f8f8] p-5 text-left relative overflow-hidden transition-all duration-300 hover:scale-[0.99] border border-black/5"
              >

                <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-[#fc5200]/10 blur-3xl rounded-full" />

                <div className="relative z-10">

                  <div className="flex items-start justify-between gap-5 mb-6">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500 mb-3">
                        Set Progress
                      </p>

                      <h3 className="text-5xl font-semibold tracking-[-0.06em] text-[#111]">
                        {setsCompleted}/{totalSets}
                      </h3>

                    </div>

                    <div className="w-11 h-11 rounded-xl bg-[#111] text-white flex items-center justify-center shrink-0">
                      <Check size={18} strokeWidth={2.5} />
                    </div>

                  </div>

                  {/* BAR */}
                  <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden mb-5">

                    <div
                      className="h-full bg-[#fc5200] rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />

                  </div>

                  <div className="flex items-center justify-between gap-4">

                    <p className="text-sm text-[#666] leading-relaxed max-w-xs">
                      Tap after each completed set to update your progress.
                    </p>

                    <div className="w-10 h-10 rounded-xl bg-[#111] text-white flex items-center justify-center shrink-0">
                      <ArrowRight size={16} strokeWidth={2.2} />
                    </div>

                  </div>

                </div>

              </button>

            </div>

            {/* RIGHT */}
            <div className="p-5 sm:p-6 bg-white">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#fc5200] font-semibold mb-3">
                    Movement Guide
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111]">
                    Execute with precision and consistency.
                  </h3>

                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#111] text-white w-fit">

                  <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center">
                    <Activity size={14} strokeWidth={2.2} />
                  </div>

                  Exercise Intelligence

                </div>

              </div>

              <ExerciseDescription exercise={exercise} />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ExerciseCard;
