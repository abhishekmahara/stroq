import SectionWrapper from "../../../components/common/SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = ({ workout }) => {

  const totalExercises = workout.length;

  const totalReps = workout.reduce(
    (acc, item) => acc + (Number(item.reps) || 0),
    0
  );

  const avgRest =
    totalExercises > 0
      ? Math.round(
          workout.reduce(
            (acc, item) => acc + (Number(item.rest) || 0),
            0
          ) / totalExercises
        )
      : 0;

  return (
    <SectionWrapper
      header="Your Workout is Ready"
      title={["TIME", "TO", "TRAIN"]}
    >

      <div className="space-y-6">

        {/* TOP */}
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-4">

          {/* LEFT */}
          <div className="relative overflow-hidden rounded-xl min-h-[220px] border border-black/10 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">

            <img
              src="/assets/gen4.jpg"
              alt="Workout ready"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/60 to-black/20" />

            <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#fc5200]/10 blur-3xl rounded-full" />

            <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-between">

              <div>

                <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-5 backdrop-blur-xl">
                  Session Overview
                </div>

                <h3 className="text-2xl md:text-[2.5rem] text-white font-semibold leading-[1] tracking-[-0.05em] max-w-lg">
                  Your workout is prepared and ready to execute.
                </h3>

              </div>

              <div className="max-w-sm rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 mt-5">

                <p className="text-[10px] uppercase tracking-[0.16em] text-orange-300 mb-2">
                  Today Focus
                </p>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Controlled tempo, clean execution, and consistent effort.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-[#111] border border-black p-5 flex flex-col justify-between min-h-[105px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                Exercises
              </p>

              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                {totalExercises}
              </h3>

            </div>

            <div className="rounded-xl bg-[#111] border border-black p-5 flex flex-col justify-between min-h-[105px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                Avg. Rest
              </p>

              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                {avgRest}s
              </h3>

            </div>

            <div className="col-span-2 rounded-xl border border-black/10 bg-white p-5 min-h-[120px] flex flex-col justify-between relative overflow-hidden shadow-[0_16px_42px_rgba(0,0,0,0.05)]">

              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-[#fc5200]/5 blur-3xl rounded-full" />

              <div className="relative z-10">

                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                  Planned Volume
                </p>

                <h3 className="text-4xl font-semibold tracking-[-0.06em] text-[#111] leading-none">
                  {totalReps}

                  <span className="text-base font-medium text-gray-500 ml-3 uppercase tracking-[0.02em]">
                    total reps
                  </span>

                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* EXERCISES */}
        <div className="flex flex-col gap-4 justify-center items-center">

          {workout.map((exercise, i) => (
            <ExerciseCard
              key={i}
              i={i}
              exercise={exercise}
            />
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
};

export default Workout;
