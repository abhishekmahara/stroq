import { FaCaretDown } from "react-icons/fa";
import { WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../sectionWrapper";

function Header(props) {
  const { index, description, title } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center   justify-center  gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto ">{description}</p>
    </div>
  );
}

const Generator = () => {
  return (
    <SectionWrapper
      header={"Generate Your Workout Plan"}
      title={["IT's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your workout"}
        description={"Select the workout you wish to enjoy."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button key={typeIndex} className="px-8 py-4 rounded-md bg-blue-500 text-white font-bold py-2 px-4 rounded blueShadow duration-200">
              <p className="capitalize ">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
       <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div  className="bg-slate-950 py-3 border-solid border border-blue-500 rounded-lg">
       <div>
        <p>Select muscle groups</p>
        <FaCaretDown />
       </div>
      </div>
    </SectionWrapper>
  );
};

export default Generator;
