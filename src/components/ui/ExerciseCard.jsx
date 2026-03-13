import { useState } from "react";
import ExerciseDescription from "./ExerciseDescription";


const ExerciseCard = ({ exercise, i }) => {
    const [setsCompleted, setSetsCompleted] = useState(0);
    const handleSetIncrement = () => {
        setSetsCompleted((prev) => (prev + 1) % 4);
    };
  return (
    <div className="p-4 rounded-md flex flex-col bg-black/95 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text text-sm">Muscle Group</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>
     
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map(info=>{
            return(
                <div key={info} className="flex flex-col p-2 rounded border-[1.5px] borde-solid border-slate-900  w-full">
                    <h3 className="text text-sm">{info==="reps" ?`${exercise.unit}`: info }</h3>
                    <p className="font-medium">{exercise[info]}</p>
                </div>
            )
        })}
         <button onClick={handleSetIncrement} className="flex flex-col p-2 rounded-xs bg-orange-600  w-full duration-200">
        <h3 className="text text-sm ">Sets</h3>
        <p className="font-medium">{setsCompleted}/3</p>
      </button>
      </div>
      
     <ExerciseDescription exercise={exercise}/>
    </div>
  );
};

export default ExerciseCard;
