import { FaCaretDown } from "react-icons/fa";
import { SCHEMES, WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../SectionWrappers";
import { useState } from "react";
import Button from "../ui/Button";

function Header({ index, description, title }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-[#43423F] text-xl sm:text-2xl md:text-3xl">
          {title}
        </h4>
      </div>
      <p className="text-[#43423F] text-sm sm:text-base mx-auto text-center">
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

    if (muscles.length >= 3) {
      return;
    }

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
      {/* STEP 01 */}
      <Header
        index={"01"}
        title={"Pick your split"}
        description={"Select the split you want to train with."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, index) => (
          <button
            key={index}
            onClick={() => {
              setSplit(type);
              setMuscles([]);
            }}
            className={`px-8 py-4 rounded-md border font-semibold duration-200
              ${
                split === type
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white text-[#43423F] hover:border-orange-500"
              }`}
          >
            <p className="capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>

      {/* STEP 02 */}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscle groups you want to focus on."}
      />

      <div className="bg-white border rounded-lg flex flex-col shadow-sm">
        <button
          onClick={toggleModal}
          className="relative py-3 flex items-center justify-center text-[#43423F]"
        >
          <p className="uppercase">
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </button>

        {showModal && (
          <div className="flex flex-col p-3 gap-2 border-t">
            {(split === "individual"
              ? WORKOUTS[split]
              : Object.keys(WORKOUTS[split])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  key={muscleGroupIndex}
                  onClick={() => updateMuscles(muscleGroup)}
                  className={`px-4 py-2 duration-200 text-sm uppercase
                    ${
                      muscles.includes(muscleGroup)
                        ? "text-orange-600 font-semibold"
                        : "text-[#43423F] hover:text-orange-600"
                    }`}
                >
                  {muscleGroup}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* STEP 03 */}
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Choose your primary training goal."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, index) => (
          <button
            key={index}
            onClick={() => setGoal(scheme)}
            className={`px-8 py-4 rounded-md border font-semibold duration-200
              ${
                goal === scheme
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white text-[#43423F] hover:border-orange-500"
              }`}
          >
            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center pb-8">
        <Button text="Formulate Workout" func={updateWorkout} />
      </div>
    </SectionWrapper>
  );
};

export default Generator;