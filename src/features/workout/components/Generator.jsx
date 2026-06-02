import { useMemo, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

import {
  Activity,
  ArrowRight,
  Check,
  Flame,
  Zap,
} from "lucide-react";

import { SCHEMES, WORKOUTS } from "../data/swoldier";

import SectionWrapper from "../../../components/common/SectionWrapper";
import SectionStepHeader from "../../../components/common/SectionStepHeader";

const splitDescriptions = {
  individual:
    "Target specific muscle groups with flexible focused sessions.",

  bro_split:
    "Classic bodybuilding structure focused on volume and isolation.",

  bodybuilder_split:
    "High-volume muscle isolation with maximum hypertrophy focus.",

  upper_lower:
    "Balanced upper and lower structure for progression and recovery.",
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

  const selectedSplitLabel =
    split.replaceAll("_", " ");

  const selectedGoalLabel =
    goal.replaceAll("_", " ");

  const workoutIntensity = useMemo(() => {

    const ratio =
      SCHEMES[goal]?.ratio || [2, 3];

    return ratio[0] >= ratio[1]
      ? "Strength Bias"
      : "Hypertrophy Bias";

  }, [goal]);

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  function updateMuscles(muscleGroup) {

    if (muscles.includes(muscleGroup)) {

      setMuscles(
        muscles.filter((m) => m !== muscleGroup)
      );

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
      header="Performance Generator"
      title={["BUILD", "YOUR", "SYSTEM"]}
    >

      <div className="max-w-[1536px] mx-auto px-1 space-y-5">

       

        {/* WORKFLOW SECTION */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-black rounded-xl text-white">

  <div className="p-5">

    <p className="text-[10px] uppercase tracking-[0.16em] mb-3">
      Step 01 | Split
    </p>

    <h3 className="text-xl font-semibold capitalize leading-tight">
      bodybuilder split
    </h3>

  </div>

  <div className=" p-5">

    <p className="text-[10px] uppercase tracking-[0.16em] mb-3">
      Step 02 | Goal
    </p>

    <h3 className="text-xl font-semibold capitalize  leading-tight">
      cardiovascular endurance
    </h3>

  </div>

  <div className=" p-5">

    <p className="text-[10px] uppercase tracking-[0.16em] mb-3">
      Step 03 | Target
    </p>

    <h3 className="text-xl font-semibold capitalize  leading-tight">
      1 selected below
    </h3>

  </div>

</div> 

        {/* MAIN */}
        <div className="space-y-5">

          {/* TOP */}
          <div className="grid lg:grid-cols-2 gap-5">

            {/* STEP 1 */}
            <div className="stroq-panel rounded-xl p-5">

              <SectionStepHeader
                index="01"
                title="Training split"
                description="Select your preferred workout structure."
              />

              <div className="space-y-3 mt-6">

                {Object.keys(WORKOUTS).map((type, index) => (

                  <button
                    key={index}
                    onClick={() => {
                      setSplit(type);
                      setMuscles([]);
                    }}
                    className={`w-full text-left rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                      split === type
                        ? "bg-[#111] text-white border-[#111]"
                        : "bg-[#f8f8f8] border-black/5 hover:border-black/10 text-black"
                    }`}
                  >

                    <div className="flex justify-between gap-4">

                      <div>

                        <p className={`text-[10px] uppercase tracking-[0.16em] mb-2 ${
                          split === type
                            ? "text-gray-400"
                            : "text-gray-500"
                        }`}>
                          Split
                        </p>

                        <h3 className="text-lg font-semibold capitalize tracking-tight mb-2">
                          {type.replaceAll("_", " ")}
                        </h3>

                        <p className={`text-sm leading-relaxed ${
                          split === type
                            ? "text-gray-300"
                            : "text-[#666]"
                        }`}>
                          {splitDescriptions[type]}
                        </p>

                      </div>

                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        split === type
                          ? "bg-white text-black"
                          : "bg-[#111] text-white"
                      }`}>
                        <ArrowRight size={16} />
                      </div>

                    </div>

                  </button>

                ))}

              </div>

            </div>

            {/* STEP 2 */}
            <div className="bg-[#0d0d0d] text-white rounded-xl p-5 relative overflow-hidden shadow-[0_22px_70px_rgba(0,0,0,0.14)]">

              <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-[#fc5200]/6 blur-3xl rounded-full" />

              <div className="relative z-10">

                <SectionStepHeader
                  index="02"
                  title="Performance goal"
                  description="Choose the outcome you want to optimize."
                  tone="dark"
                />

                <div className="space-y-3 mt-6">

                  {Object.keys(SCHEMES).map((scheme, index) => (

                    <button
                      key={index}
                      onClick={() => setGoal(scheme)}
                      className={`w-full rounded-xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                        goal === scheme
                          ? "bg-white text-black border-white"
                          : "bg-white/5 border-white/10 text-white"
                      }`}
                    >

                      <div className="flex justify-between gap-4">

                        <div>

                          <p className={`text-[10px] uppercase tracking-[0.16em] mb-2 ${
                            goal === scheme
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}>
                            Goal
                          </p>

                          <h3 className="text-lg font-semibold capitalize tracking-tight">
                            {scheme.replaceAll("_", " ")}
                          </h3>

                        </div>

                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          goal === scheme
                            ? "bg-[#111] text-white"
                            : "bg-white text-black"
                        }`}>
                          <Flame size={16} strokeWidth={2.2} />
                        </div>

                      </div>

                    </button>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* STEP 3 */}
          <div className="stroq-panel rounded-xl p-5">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:pl-136 gap-6 mb-8">

              <SectionStepHeader
                index="03"
                title="Muscle targeting"
                description={
                  split === "individual"
                    ? "Select up to three muscle groups."
                    : "Choose one muscle group."
                }
              />

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#111] text-white w-fit">

                <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center">
                  <Activity size={14} strokeWidth={2.2} />
                </div>

                {workoutIntensity}

              </div>

            </div>

            {/* SELECTOR */}
            <button
              onClick={toggleModal}
              className="w-full rounded-xl border border-black/10 bg-[#f8f8f8] p-5 flex items-center justify-between gap-5"
            >

              <div className="text-left">

                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500 mb-2">
                  Muscle Selection
                </p>

                <p className="text-lg font-semibold capitalize text-[#111]">

                  {muscles.length === 0
                    ? "Choose muscle groups"
                    : muscles.join(" • ")}

                </p>

              </div>

              <div className="w-11 h-11 rounded-xl bg-[#111] text-white flex items-center justify-center shrink-0">

                <FaCaretDown
                  className={`transition-transform duration-300 ${
                    showModal ? "rotate-180" : ""
                  }`}
                />

              </div>

            </button>

            {/* MUSCLES */}
            {showModal && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">

                {(split === "individual"
                  ? WORKOUTS[split]
                  : Object.keys(WORKOUTS[split] || {})
                ).map((muscleGroup, muscleGroupIndex) => {

                  const active =
                    muscles.includes(muscleGroup);

                  return (
                    <button
                      key={muscleGroupIndex}
                      onClick={() =>
                        updateMuscles(muscleGroup)
                      }
                      className={`min-h-[92px] rounded-xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                        active
                          ? "bg-[#111] text-white border-[#111]"
                          : "bg-[#f8f8f8] border-black/5 hover:border-black/10 text-black"
                      }`}
                    >

                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                        active
                          ? "bg-white text-black"
                          : "bg-[#111] text-white"
                      }`}>
                        <Check size={15} strokeWidth={2.5} />
                      </div>

                      <p className="text-base font-semibold capitalize tracking-tight leading-tight">
                        {muscleGroup}
                      </p>

                    </button>
                  );
                })}

              </div>
            )}

          </div>

          {/* BUTTON */}
          <button
            onClick={updateWorkout}
            className="w-full h-14 rounded-xl bg-[#111] hover:bg-[#fc5200] transition-all duration-300 text-white text-base font-semibold flex items-center justify-center gap-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
          >

            Formulate Workout

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </SectionWrapper>
  );
};

export default Generator;
