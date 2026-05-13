import { useMemo, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

import { SCHEMES, WORKOUTS } from "../data/swoldier";

import SectionWrapper from "../../../components/common/SectionWrapper";
import SectionStepHeader from "../../../components/common/SectionStepHeader";
import Button from "../../../components/ui/Button";

const splitDescriptions = {
  individual: "Target up to 3 muscle groups in one session.",
  bro_split: "Classic bodybuilding style push/pull/legs structure.",
  bodybuilder_split: "Focused daily muscle isolation for high volume work.",
  upper_lower: "Balanced upper/lower split for consistency and recovery.",
};

const Generator = ({
  split,
  muscles,
  goal,
  setSplit,
  setMuscles,
  setGoal,
  updateWorkout,
}) => {
  const [showModal, setShowModal] = useState(false);

  const selectedSplitLabel = split.replaceAll("_", " ");
  const selectedGoalLabel = goal.replaceAll("_", " ");

  const workoutIntensity = useMemo(() => {
    const ratio = SCHEMES[goal]?.ratio || [2, 3];

    return ratio[0] >= ratio[1] ? "High Strength Bias" : "Hypertrophy Bias";
  }, [goal]);

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((m) => m !== muscleGroup));
      return;
    }

    if (muscles.length >= 3) return;

    if (split !== "individual") {
      setMuscles([muscleGroup]);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
  }

  return (
    <SectionWrapper
      header={"Your Personalized Workout"}
      title={["TRAIN", "WITH", "PURPOSE"]}
    >
      <div className="max-w-8xl mx-auto space-y-6 lg:mx-4">
        {/* HERO */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5">
          {/* LEFT HERO */}
          <div className="relative rounded-xl overflow-hidden border border-black/5 min-h-[320px] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <img
              src="/assets/gen2.jpg"
              alt="Workout planning"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-black/20" />

            <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-orange-300 font-semibold mb-4">
                  Workout Blueprint
                </p>

                <h3 className="text-3xl md:text-5xl font-[650] text-white leading-tight max-w-xl tracking-tight">
                  Build your next session with precision and intent.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-lg border border-white/10 bg-white/10 backdrop-blur-sm p-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/60 mb-2">
                    Split
                  </p>

                  <p className="text-sm md:text-base font-semibold text-white capitalize">
                    {selectedSplitLabel}
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/10 backdrop-blur-sm p-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/60 mb-2">
                    Goal
                  </p>

                  <p className="text-sm md:text-base font-semibold text-white capitalize">
                    {selectedGoalLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-lg bg-[#111111] text-white border border-black p-5 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/60 mb-2">
                Muscles Picked
              </p>

              <p className="text-3xl font-semibold text-orange-400">
                {muscles.length}
              </p>
            </div>

            <div className="rounded-lg bg-white border border-black/5 p-5 shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
              <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 mb-2">
                Training Bias
              </p>

              <p className="text-base font-semibold text-[#2f2a24]">
                {workoutIntensity}
              </p>
            </div>

            <div className="col-span-2 rounded-xl bg-white border border-black/5 p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
              <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 mb-3">
                Selected Split Summary
              </p>

              <p className="text-sm md:text-base text-[#4f4a43] leading-relaxed">
                {splitDescriptions[split] ||
                  "Choose your split and start building."}
              </p>
            </div>
          </div>
        </div>

        {/* SPLIT */}
        <div className="rounded-xl border border-black/5 bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <SectionStepHeader
            index={"01"}
            title={"Pick your split"}
            description={"Select the training structure you want to follow."}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.keys(WORKOUTS).map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  setSplit(type);
                  setMuscles([]);
                }}
                className={`group relative min-h-[90px] px-5 py-5 rounded-lg border text-left font-semibold transition-all duration-300

                ${
                  split === type
                    ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-100"
                    : "bg-white text-[#2f2a24] border-black/5 hover:bg-orange-50 hover:border-orange-200"
                }
                `}
              >
                <span className="block text-[10px] uppercase tracking-[0.14em] mb-2 opacity-70">
                  Split
                </span>

                <p className="capitalize text-sm sm:text-base leading-tight">
                  {type.replaceAll("_", " ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* TARGETS */}
        <div className="rounded-xl border border-black/10 bg-[url('../assets/np.jpg')] bg-cover bg-center text-white p-6 md:p-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10">
            <SectionStepHeader
              index={"02"}
              title={"Lock on targets"}
              description={
                split === "individual"
                  ? "You can choose up to three muscle groups."
                  : "Choose one muscle group."
              }
              tone="dark"
            />

            <div className="relative max-w-4xl mx-auto">
              <div className="rounded-lg bg-white text-black overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                <button
                  onClick={toggleModal}
                  className="relative w-full py-5 px-5 flex items-center justify-center text-center"
                >
                  <p className="uppercase text-xs sm:text-sm font-medium tracking-[0.12em] pr-8 break-words">
                    {muscles.length === 0
                      ? "Select muscle groups"
                      : muscles.join(" | ")}
                  </p>

                  <FaCaretDown
                    className={`absolute right-5 top-1/2 -translate-y-1/2 text-orange-600 transition-transform duration-300 ${
                      showModal ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showModal && (
                  <div className="border-t border-black/10 p-4 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white">
                    {(split === "individual"
                      ? WORKOUTS[split]
                      : Object.keys(WORKOUTS[split] || {})
                    ).map((muscleGroup, muscleGroupIndex) => {
                      const active = muscles.includes(muscleGroup);

                      return (
                        <button
                          key={muscleGroupIndex}
                          onClick={() => updateMuscles(muscleGroup)}
                          className={`relative min-h-[70px] px-4 py-4 rounded-lg text-xs sm:text-sm uppercase tracking-[0.08em] font-semibold transition-all duration-300 border

                          ${
                            active
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-[#222] border-black/10 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                          }
                          `}
                        >
                          {muscleGroup}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* GOALS */}
        <div className="rounded-xl border border-black/5 bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <SectionStepHeader
            index={"03"}
            title={"Choose your goal"}
            description={"Define your training output for this session."}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.keys(SCHEMES).map((scheme, index) => (
              <button
                key={index}
                onClick={() => setGoal(scheme)}
                className={`relative min-h-[90px] px-5 py-5 rounded-lg border text-left font-semibold transition-all duration-300

                ${
                  goal === scheme
                    ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-100"
                    : "bg-white text-[#2f2a24] border-black/5 hover:bg-orange-50 hover:border-orange-200"
                }
                `}
              >
                <span className="block text-[10px] uppercase tracking-[0.14em] mb-2 opacity-70">
                  Goal
                </span>

                <p className="capitalize text-sm sm:text-base leading-tight">
                  {scheme.replaceAll("_", " ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center pt-2 pb-8">
          <Button
            text="Formulate Workout"
            onClick={updateWorkout}
            className="w-full py-4 text-lg font-semibold"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Generator;
