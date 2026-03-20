import { FaCaretDown } from "react-icons/fa";
import { SCHEMES, WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../SectionWrappers";
import { useState } from "react";
import Button from "../ui/Button";

function Header({ index, title, description }) {
  return (
    <div className="text-center mt-10 mb-8">
      <p className="text-orange-600 text-[11px] font-semibold tracking-[0.35em] mb-4 uppercase">
        Step {index}
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-orange-600 mb-3 tracking-[-0.03em]">
        {title}
      </h2>

      <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

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
      <div className="max-w-7xl mx-auto space-y-14 lg:mx-4">
        {/* STEP 01 */}
        <div className="rounded-lg border border-black/10 bg-white p-6 md:p-8 ">
          <Header
            index={"01"}
            title={"Pick your split"}
            description={"Select the split you want to train with."}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  setSplit(type);
                  setMuscles([]);
                }}
                className={`group relative min-h-[88px] px-6 py-5 rounded-lg border text-left font-semibold transition-all duration-300
                  ${
                    split === type
                      ? "bg-orange-600 text-white border-orange-600 "
                      : "bg-black text-white border-black "
                  }`}
              >
                <span className="block text-[11px] uppercase tracking-[0.24em] mb-2 opacity-70">
                  Split
                </span>
                <p className="capitalize text-base md:text-lg leading-tight">
                  {type.replaceAll("_", " ")}
                </p>

                {split === type && (
                  <div className="absolute -top-2 right-6 h-5 w-10 rounded-lg bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 02 */}
        <div className="rounded-lg border border-black/10 bg-black text-white p-6 md:p-8 ">
          <Header
            index={"02"}
            title={"Lock on targets"}
            description={
              split === "individual"
                ? "You can choose up to three muscle groups."
                : "Choose one muscle group."
            }
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-lg bg-white text-black overflow-hidden border border-black/10 shadow-sm">
              <button
                onClick={toggleModal}
                className="relative w-full py-4 px-5 flex items-center justify-center text-center"
              >
                <p className="uppercase text-sm font-medium tracking-[0.14em] pr-8">
                  {muscles.length === 0
                    ? "Select muscle groups"
                    : muscles.join(" • ")}
                </p>

                <FaCaretDown
                  className={`absolute right-5 top-1/2 -translate-y-1/2 text-orange-600 transition-transform duration-300 ${
                    showModal ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showModal && (
                <div className="border-t border-black/10 p-3 grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#fffaf6]">
                  {(split === "individual"
                    ? WORKOUTS[split]
                    : Object.keys(WORKOUTS[split] || {})
                  ).map((muscleGroup, muscleGroupIndex) => {
                    const active = muscles.includes(muscleGroup);

                    return (
                      <button
                        key={muscleGroupIndex}
                        onClick={() => updateMuscles(muscleGroup)}
                        className={`relative min-h-[70px] px-4 py-3 rounded-lg text-sm uppercase tracking-[0.12em] font-semibold transition-all duration-300 border
                          ${
                            active
                              ? "bg-orange-600 text-white border-orange-600 "
                              : "bg-white text-[#222] border-black/10 hover:border-orange-500 hover:text-orange-600"
                          }`}
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

        {/* STEP 03 */}
        <div className="rounded-lg border border-black/10 bg-white p-6 md:p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
          <Header
            index={"03"}
            title={"Become Juggernaut"}
            description={"Choose your primary training goal."}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(SCHEMES).map((scheme, index) => (
              <button
                key={index}
                onClick={() => setGoal(scheme)}
                className={`relative min-h-[92px] px-6 py-5 rounded-lg border text-left font-semibold transition-all duration-300
                  ${
                    goal === scheme
                      ? "bg-orange-600 text-white border-orange-600 "
                      : "bg-black text-white border-black"
                  }`}
              >
                <span className="block text-[11px] uppercase tracking-[0.22em] mb-2 opacity-70">
                  Goal
                </span>
                <p className="capitalize text-base md:text-lg leading-tight">
                  {scheme.replaceAll("_", " ")}
                </p>

                {goal === scheme && (
                  <div className="absolute -bottom-2 left-7 h-5 w-10 rounded-full bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center pb-8 ">
          <div className="flex items-center justify-center w-full max-w-sm ">
            <Button text="Formulate Workout" func={updateWorkout} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Generator;