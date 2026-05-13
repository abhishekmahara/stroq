import SectionWrapper from "../../../components/common/SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = ({ workout }) => {
  const totalExercises = workout.length;
  const totalReps = workout.reduce(
    (acc, item) => acc + (Number(item.reps) || 0),
    0,
  );
  const avgRest =
    totalExercises > 0
      ? Math.round(
          workout.reduce((acc, item) => acc + (Number(item.rest) || 0), 0) /
            totalExercises,
        )
      : 0;

  return (
    <SectionWrapper
      header={"Your Workout is Ready"}
      title={["TIME", "TO", "TRAIN"]}
    >
      <div className="space-y-5">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-4 md:gap-5">
          <div className="relative rounded-lg overflow-hidden border border-black/10 min-h-[260px] md:min-h-[300px]">
            <img
              src="/assets/gen3.jpg"
              alt="Workout ready"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-black/25" />

            <div className="relative z-10 h-full p-5 md:p-7 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-orange-300 font-semibold mb-3">
                  Session Dashboard
                </p>
                <h3 className="text-2xl md:text-4xl text-white font-semibold leading-tight max-w-lg">
                  Your plan is set. Track each set and execute with focus.
                </h3>
              </div>

              <div className="rounded-lg border border-white/20 bg-white/10 p-3 md:p-4 max-w-sm">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/60 mb-1">
                  Today Focus
                </p>
                <p className="text-sm md:text-base text-white/90">
                  Controlled tempo, full range, consistent effort.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-black bg-black text-white p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60 mb-1">
                Exercises
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-orange-400">
                {totalExercises}
              </p>
            </div>

            <div className="rounded-lg border border-black bg-black text-white p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60 mb-1">
                Avg. Rest
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-orange-400">
                {avgRest}s
              </p>
            </div>

            <div className="col-span-2 rounded-lg border border-black/10 bg-white p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500 mb-1">
                Planned Volume
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#2f2a24]">
                {totalReps}
                <span className="text-base md:text-lg font-medium text-gray-500 ml-1">
                  total reps
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          {workout.map((exercise, i) => (
            <ExerciseCard key={i} i={i} exercise={exercise} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Workout;
