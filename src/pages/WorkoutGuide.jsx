import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  Dumbbell,
  Flame,
  TimerReset,
} from "lucide-react";

const mistakes = [
  {
    no: "01",
    title: "Skipping Recovery",
    desc: "Muscles grow during recovery, not during training.",
  },
  {
    no: "02",
    title: "Ego Lifting",
    desc: "Poor form increases injury risk and slows progress.",
  },
  {
    no: "03",
    title: "Ignoring Nutrition",
    desc: "Training cannot compensate for poor eating habits.",
  },
  {
    no: "04",
    title: "No Progressive Overload",
    desc: "Without progression, your body has no reason to adapt.",
  },
  {
    no: "05",
    title: "Inconsistent Routine",
    desc: "Consistency beats motivation every time.",
  },
  {
    no: "06",
    title: "Skipping Warmups",
    desc: "Proper preparation improves performance and mobility.",
  },
];

const tracks = [
  {
    id: "mass-gain",
    title: "Mass Gain",
    subtitle: "Strength + hypertrophy focused progression",
    image: "../assets/gen2.jpg",
    icon: <Dumbbell size={20} strokeWidth={2.2} />,
    description:
      "Focused on progressive overload, muscle growth, and strength adaptation with structured recovery.",

    principles: [
      "Train heavy compound movements.",
      "Increase weekly training volume.",
      "Prioritize calorie surplus.",
      "Optimize post-workout recovery.",
    ],

    weekly: [
      "Push Strength",
      "Pull Hypertrophy",
      "Leg Power",
      "Upper Volume",
      "Recovery Session",
    ],
  },

  {
    id: "fat-loss",
    title: "Weight Loss",
    subtitle: "Conditioning and fat reduction",
    image: "../assets/gen6.jpg",
    icon: <Flame size={20} strokeWidth={2.2} />,
    description:
      "High movement frequency and conditioning focused on sustainable fat reduction and endurance.",

    principles: [
      "Maintain calorie deficit.",
      "Increase movement frequency.",
      "Use conditioning strategically.",
      "Preserve lean muscle mass.",
    ],

    weekly: [
      "HIIT Conditioning",
      "Upper Body",
      "Mobility + Core",
      "Lower Body",
      "Cardio Intervals",
    ],
  },

  {
    id: "recomposition",
    title: "Recomposition",
    subtitle: "Build muscle while losing fat",
    image: "../assets/gen7.jpg",
    icon: <Activity size={20} strokeWidth={2.2} />,
    description:
      "Balanced training structure combining hypertrophy, conditioning, and recovery optimization.",

    principles: [
      "Balance strength and cardio.",
      "Maintain high protein intake.",
      "Track progressive overload.",
      "Focus on recovery quality.",
    ],

    weekly: [
      "Upper Strength",
      "Conditioning",
      "Lower Hypertrophy",
      "Athletic Training",
      "Recovery + Mobility",
    ],
  },
];

const WorkoutGuide = () => {
  const [selectedTrack, setSelectedTrack] = useState("mass-gain");

  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) || tracks[0];

  return (
    <main className="bg-white text-[#111] overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full min-h-[calc(100svh-80px)] px-3 sm:px-4 lg:px-6 pt-20 pb-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_0.7fr_0.95fr] gap-4 items-stretch">
            {/* LEFT CARD */}
            <div className="bg-black rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
              <div>
                <h1 className="text-white uppercase font-black leading-[0.85] tracking-[-0.07em] text-[clamp(3rem,5vw,6.5rem)] max-w-[5ch]">
                  Take Your Fitness To The Next Level
                </h1>

                <p className="text-gray-400 leading-relaxed mt-5 max-w-md text-sm sm:text-base lg:text-lg">
                  Structured strength systems, recovery optimization, and
                  elite-level programming for real athletic performance.
                </p>
              </div>
            </div>

            {/* CENTER */}
            <div className="flex flex-col gap-4">
              {/* IMAGE */}
              <div className="relative rounded-xl overflow-hidden min-h-[240px] sm:min-h-[300px] xl:flex-1">
                <img
                  src="../assets/gen5.webp"
                  alt=""
                  className="w-full h-full object-cover absolute inset-0"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* STATS */}
              <div className="bg-orange-600 rounded-xl p-5 sm:p-6 text-white">
                <div className="text-center">
                  <h2 className="text-[clamp(2.3rem,4vw,4.5rem)] leading-none font-black tracking-[-0.05em]">
                    4-5
                  </h2>

                  <p className="text-white/70 text-sm sm:text-base mt-2">
                    Training Days per Week
                  </p>
                </div>

                <div className="h-[1px] w-full bg-white/10 my-5" />

                <div className="text-center">
                  <h2 className="text-[clamp(2.3rem,4vw,4.5rem)] leading-none font-black tracking-[-0.05em]">
                    7-9h
                  </h2>

                  <p className="text-white/70 text-sm sm:text-base mt-2">
                    Recovery
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative rounded-xl overflow-hidden min-h-[340px] xl:min-h-[620px]">
              <img
                src="../assets/np.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-xl p-4 text-white max-w-[240px]">
                <h3 className="text-lg sm:text-2xl font-semibold leading-tight">
                  Strength + Athletic Conditioning
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <p className="uppercase tracking-[0.2em] text-[11px] text-[#fc5200] font-semibold mb-3">
              Training Modes
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Choose your goal.
            </h2>
          </div>

          <div className="bg-[#f5f5f2] rounded-3xl p-2">
            <div className="grid md:grid-cols-3 gap-2">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`relative rounded-2xl p-6 transition-all duration-300 text-left
              ${
                selectedTrack === track.id
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-white"
              }`}
                >
                  {selectedTrack === track.id && (
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#fc5200]" />
                  )}

                  <div className="mb-4">{track.icon}</div>

                  <h3 className="text-xl font-bold mb-2">{track.title}</h3>

                  <p
                    className={`text-sm ${
                      selectedTrack === track.id
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    {track.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE SYSTEM */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <p className="uppercase tracking-[0.2em] text-[11px] text-[#fc5200] font-semibold mb-3">
              Selected Framework
            </p>

            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              {activeTrack.title}
            </h2>

            <p className="mt-5 text-[#666] text-lg leading-relaxed max-w-3xl">
              {activeTrack.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* PRINCIPLES */}
            <div className="rounded-[30px] p-6 sm:p-8 bg-[#ecece7]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="uppercase tracking-[0.2em] text-[11px] text-[#fc5200] font-semibold mb-3">
                    Core Principles
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Training Rules
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                  {activeTrack.icon}
                </div>
              </div>

              <div className="space-y-5">
                {activeTrack.principles.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-black/5 pb-5"
                  >
                    <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                      <Check size={18} strokeWidth={2.5} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item}</h4>

                      <p className="text-[#666]">
                        Structured progression and intelligent recovery create
                        long-term athletic results.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WEEKLY */}
            <div className="bg-black text-white rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#fc5200]/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="uppercase tracking-[0.2em] text-[11px] text-[#fc5200] font-semibold mb-3">
                      Weekly Structure
                    </p>

                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                      Performance Split
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center">
                    <TimerReset size={22} />
                  </div>
                </div>

                <div className="space-y-4">
                  {activeTrack.weekly.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>

                        <p className="text-lg">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f2] px-6 lg:px-10 py-24">
  <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20">

    {/* LEFT SIDE */}
    <div className="lg:sticky lg:top-24 h-fit">
      <p className="uppercase tracking-[0.25em] text-[#fc5200] text-xs font-semibold mb-6">
        STROQ GUIDE
      </p>

      <h2 className="font-black tracking-[-0.08em] leading-[0.9]
                     text-[clamp(3.5rem,9vw,8rem)]">
        Workout
        <br />
        Mistakes.
        <br />
        To Avoid.
      </h2>
    </div>

    {/* RIGHT SIDE */}
    <div>
      {mistakes.map((item) => (
        <div
          key={item.no}
          className="grid grid-cols-[70px_1fr] gap-8 py-8 border-b border-black/10 group cursor-pointer"
        >
          <div className="text-gray-400 text-lg font-medium">
            {item.no}
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-[#fc5200] transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2 text-base md:text-lg max-w-xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    </main>
  );
};

export default WorkoutGuide;
