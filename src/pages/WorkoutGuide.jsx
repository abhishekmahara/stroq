import { useState } from "react";

import {
  Dumbbell,
  Flame,
  Activity,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const tracks = [
  {
    id: "mass-gain",
    title: "Mass Gain",
    subtitle: "Build muscle with controlled calorie surplus",
    color: "bg-[#111111] text-white border-white/10",
    accent: "text-orange-500",
    icon: <Dumbbell size={24} />,
    bullets: [
      "Stay in a 250-400 kcal daily surplus, not a dirty bulk.",
      "Target protein at 1.6-2.2g per kg bodyweight every day.",
      "Use progressive overload on core lifts each week.",
      "Prioritize compound exercises first, isolation after.",
      "Train each major muscle group 2 times per week.",
      "Sleep 7-9 hours for recovery and growth hormones.",
    ],
    sampleSplit: [
      "Day 1: Upper (push focus)",
      "Day 2: Lower",
      "Day 3: Rest or light walk",
      "Day 4: Upper (pull focus)",
      "Day 5: Lower + core",
      "Day 6-7: Active recovery",
    ],
  },

  {
    id: "fat-loss",
    title: "Weight Loss",
    subtitle: "Preserve muscle while dropping body fat",
    color: "bg-white text-[#2f2a24] border-black/5",
    accent: "text-orange-600",
    icon: <Flame size={24} />,
    bullets: [
      "Use a moderate 300-500 kcal deficit for sustainable results.",
      "Keep protein high: 1.8-2.4g per kg bodyweight.",
      "Lift weights 3-5 days per week to protect muscle.",
      "Add 8,000-12,000 daily steps before adding hard cardio.",
      "Use short cardio blocks 2-4 times weekly.",
      "Track waist, strength, and weekly average weight together.",
    ],
    sampleSplit: [
      "Day 1: Full body + incline walk",
      "Day 2: Steps and mobility",
      "Day 3: Full body + intervals",
      "Day 4: Steps and stretching",
      "Day 5: Full body + easy cardio",
      "Day 6-7: Recovery and meal prep",
    ],
  },

  {
    id: "recomposition",
    title: "Recomposition",
    subtitle: "Lose fat and gain muscle simultaneously",
    color: "bg-orange-600 text-white border-orange-600",
    accent: "text-orange-100",
    icon: <Activity size={24} />,
    bullets: [
      "Keep calories near maintenance with high protein.",
      "Prioritize strength progress over scale changes.",
      "Use consistent meal timing around workouts.",
      "Focus on recovery quality and sleep.",
      "Take progress photos every 2-4 weeks.",
      "Best suited for beginners and returners.",
    ],
    sampleSplit: [
      "Day 1: Upper body",
      "Day 2: Lower body",
      "Day 3: Rest + steps",
      "Day 4: Upper body",
      "Day 5: Lower body",
      "Day 6-7: Active recovery",
    ],
  },
];

const beginnerChecklist = [
  "Master squat, hinge, push, and pull patterns first.",
  "Warm up properly before heavy training.",
  "Keep 1-3 reps in reserve on most sets.",
  "Track workouts consistently for measurable progress.",
  "Avoid maxing out every week.",
  "Use controlled tempo and full range of motion.",
  "Rest properly between compound movements.",
  "Stay consistent for at least 12 weeks.",
  "Hydrate throughout the entire day.",
  "Deload every 6-8 hard weeks if needed.",
  "Focus on meal consistency over perfection.",
  "Stop exercises causing sharp joint pain.",
];

const WorkoutGuide = () => {
  const [selectedTrack, setSelectedTrack] = useState("mass-gain");

  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) || tracks[0];

  return (
    <section className="min-h-screen bg-white text-[#2f2a24] pt-20 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden">

      <div className="max-w-8xl mx-auto space-y-10">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-xl bg-white">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div className="p-7 sm:p-10 lg:p-14">

              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-orange-600 mb-5">
                Workout Dashboard
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[0.92] tracking-[-0.05em] font-[650] max-w-2xl">
                Train with{" "}
                <span className="text-orange-600">
                  structure
                </span>{" "}
                & progression.
              </h1>

              <p className="mt-6 text-[#6d675f] text-sm sm:text-base leading-relaxed max-w-xl">
                Choose your training path, follow structured weekly
                progression, and build sustainable strength, muscle,
                and conditioning.
              </p>

              {/* QUICK STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">

                <div className="rounded-md bg-[#f8f7f4] border border-black/5 p-5">
                  <p className="text-xs text-[#7b746c] mb-2">
                    Training Days
                  </p>

                  <h3 className="text-3xl font-semibold">
                    4-5
                  </h3>
                </div>

                <div className="rounded-md bg-[#f8f7f4] border border-black/5 p-5">
                  <p className="text-xs text-[#7b746c] mb-2">
                    Recovery
                  </p>

                  <h3 className="text-3xl font-semibold">
                    7-9h
                  </h3>
                </div>

                <div className="rounded-md bg-[#111111] text-white p-5 col-span-2 sm:col-span-1">
                  <p className="text-xs text-gray-400 mb-2">
                    Progress
                  </p>

                  <h3 className="text-3xl font-semibold">
                    Weekly
                  </h3>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[380px] lg:min-h-[630px]">

              <img
                src="../assets/gen5.webp"
                alt="workout"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* FLOATING PANEL */}
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-6 text-white">

                <div className="flex items-center justify-between gap-4 mb-6">

                  <div>
                    <p className="text-xs text-gray-400 mb-2">
                      Current Focus
                    </p>

                    <h3 className="text-3xl font-semibold">
                      Strength + Hypertrophy
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-md bg-orange-500/15 flex items-center justify-center text-orange-500">
                    <Dumbbell size={30} />
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">

                  <div>
                    <p className="text-xs text-gray-400">
                      Volume
                    </p>

                    <h4 className="text-xl font-semibold mt-1">
                      High
                    </h4>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Intensity
                    </p>

                    <h4 className="text-xl font-semibold mt-1">
                      Moderate
                    </h4>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Frequency
                    </p>

                    <h4 className="text-xl font-semibold mt-1">
                      5x
                    </h4>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRACK SELECTOR */}
        <div className="grid md:grid-cols-3 gap-6">

          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`rounded-lg border p-7 text-left transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)]
              
              ${
                selectedTrack === track.id
                  ? "border-orange-500 scale-[1.01]"
                  : "border-black/5 hover:border-orange-200"
              }

              ${track.color}
              `}
            >

              <div className="flex items-center justify-between mb-8">

                <div className="w-14 h-14 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center">
                  {track.icon}
                </div>

                <ArrowRight size={20} />
              </div>

              <p className={`text-[11px] uppercase tracking-[0.2em] mb-3 ${track.accent}`}>
                Training Track
              </p>

              <h2 className="text-2xl font-semibold mb-3">
                {track.title}
              </h2>

              <p className="text-sm leading-relaxed opacity-80">
                {track.subtitle}
              </p>

            </button>
          ))}
        </div>

        {/* ACTIVE TRACK */}
        <div className={`rounded-xl border overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] ${activeTrack.color}`}>

          <div className="p-7 sm:p-10 border-b border-white/10">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>

                <p className={`uppercase tracking-[0.2em] text-[11px] mb-3 ${activeTrack.accent}`}>
                  Selected Framework
                </p>

                <h2 className="text-4xl font-[650] tracking-tight">
                  {activeTrack.title}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-md bg-white/10 flex items-center justify-center">
                {activeTrack.icon}
              </div>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">

            {/* RULES */}
            <div className="p-7 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">

              <p className="uppercase tracking-[0.2em] text-[11px] opacity-70 mb-6">
                Core Rules
              </p>

              <div className="space-y-5">

                {activeTrack.bullets.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-4"
                  >

                    <div className="min-w-[38px] h-[38px] rounded-md bg-white/10 flex items-center justify-center">
                      <Check size={18} />
                    </div>

                    <p className="leading-relaxed opacity-90">
                      {tip}
                    </p>

                  </div>
                ))}

              </div>
            </div>

            {/* SPLIT */}
            <div className="p-7 sm:p-10">

              <p className="uppercase tracking-[0.2em] text-[11px] opacity-70 mb-6">
                Weekly Template
              </p>

              <div className="space-y-4">

                {activeTrack.sampleSplit.map((day, index) => (
                  <div
                    key={day}
                    className="flex items-center gap-5 rounded-md bg-white/5 border border-white/10 p-5"
                  >

                    <div className="min-w-[42px] h-[42px] rounded-md bg-orange-500/15 text-orange-400 flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>

                    <p className="leading-relaxed">
                      {day}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* CHECKLIST */}
        <div className="rounded-xl bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">

          <div className="p-7 sm:p-10 border-b border-black/5">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>

                <p className="uppercase tracking-[0.22em] text-[11px] text-orange-600 font-semibold mb-3">
                  Beginner Essentials
                </p>

                <h2 className="text-3xl md:text-4xl font-[650] tracking-tight">
                  Build fundamentals before advanced training.
                </h2>

              </div>

              <div className="w-16 h-16 rounded-md bg-orange-50 flex items-center justify-center text-orange-600">
                <ShieldCheck size={30} />
              </div>

            </div>
          </div>

          <div className="p-6 sm:p-10 bg-[#fcfcfc]">

            <div className="grid md:grid-cols-2 gap-5">

              {beginnerChecklist.map((item, index) => (
                <div
                  key={item}
                  className="rounded-lg border border-black/5 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >

                  <div className="flex items-start gap-4">

                    <div className="min-w-[42px] h-[42px] rounded-md bg-orange-50 text-orange-600 flex items-center justify-center font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>

                      <p className="text-[11px] uppercase tracking-[0.2em] text-orange-600 font-semibold mb-2">
                        Essential Rule
                      </p>

                      <p className="text-[#4f4a43] leading-relaxed">
                        {item}
                      </p>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutGuide;