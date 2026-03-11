import { FaCaretDown } from "react-icons/fa";
import { SCHEMES, WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../sectionWrapper";
import { useState } from "react";
import Button from "../ui/Button";

function Header({ index, description, title }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto text-center">{description}</p>
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
    //already selected, remove it
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((m) => m !== muscleGroup));
      return;
    }
    // If individual → allow max 3 selections
    if (muscles.length >= 3) {
      return;
    }
    // split is NOT individual → allow only one selection
    if (split !== "individual") {
      setMuscles([muscleGroup]);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 3) {
      setMuscles(false);
    }
  }

  return (
    <SectionWrapper
      header={"Your Personalized Workout"}
      title={["TRAIN", "WITH", "PURPOSE"]}
    >
      {/*  STEP 01 */}
      <Header
        index={"01"}
        title={"Pick your split"}
        description={"Select the Split you wish to enjoy."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, index) => (
          <button
            key={index}
            onClick={() => {
              setSplit(type);
              setMuscles([]);
            }}
            className={`px-8 py-4 rounded-md shadow-md  font-bold duration-200
              ${
                split === type
                  ? "bg-orange-600 text-white"
                  : " bg-black text-white"
              }`}
          >
            <p className="capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>

      {/* /step2 */}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />

      <div className="bg-black shadow-md rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative py-3 flex items-center justify-center"
        >
          <p className="uppercase">{` ${muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")} `}</p>
          <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </button>
        {showModal && (
          <div className="flex flex-col p-3 gap-2">
            {(split === "individual"
              ? WORKOUTS[split]
              : Object.keys(WORKOUTS[split])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  key={muscleGroupIndex}
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  className={`hover:text-bg-orange-600 px-4 py-2 duration-200 ${muscles.includes(muscleGroup) ? "text-orange-500" : "text-white"}`}
                >
                  <p className="uppercase">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* STEP 03  */}
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />

      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, index) => (
          <button
            key={index}
            onClick={() => setGoal(scheme)}
            className={`px-8 py-4 rounded-md font-bold  shadow-md shadow-white/1
              ${
                goal === scheme
                  ? "bg-orange-600 text-white"
                  : "bg-black text-white "
              }`}
          >
            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center pb-8">
        <Button text="Formulate" func={updateWorkout} />
      </div>
    </SectionWrapper>
  );
};

export default Generator;
