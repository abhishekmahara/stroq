import { FaCaretDown } from "react-icons/fa";
import { SCHEMES, WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../SectionWrappers";
import { useState } from "react";
import Button from "../ui/Button";


function Header({ index, title, description }) {
  return (
    <div className="text-center mt-8">

      <p className="text-orange-600 text-sm font-semibold tracking-[0.35em] mb-4">
        STEP {index}
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1d] mb-3">
        {title}
      </h2>

      <p className="text-gray-500 text-sm max-w-xl mx-auto">
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
            className={`px-8 py-4 lg:py-6 rounded-md border font-semibold duration-200
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
        description={split === "individual"
            ? "You can choose up to three muscle groups."
            : "Choose one muscle group."}
      />

      <div className="bg-white  border-1 border-slate-600  rounded-lg flex flex-col shadow-sm">
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
            className={`px-8 py-4 lg:py-6 rounded-md border font-semibold duration-200
              ${
                goal === scheme
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-neutral-900 text-white hover:border-orange-500"
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