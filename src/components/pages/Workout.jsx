

import SectionWrapper from "../SectionWrappers";
import ExerciseCard from "../ui/ExerciseCard";

const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      header={"Your Workout is Ready"}
      title={["TIME", "TO", "TRAIN"]}
    >
      <div className="flex flex-col gap-5 ">
        {workout.map((exercise, i) => (
          <ExerciseCard key={i} i={i} exercise={exercise} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
