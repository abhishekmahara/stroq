import { useMemo, useState } from "react";
import { useNutrition } from "../components/context/NutritionProvider";
import NutritionCard from "../features/workout/components/NutritionCard";

import {
  Droplets,
  Flame,
  Drumstick,
  Wheat,
  Salad,
  Check,
  AlertTriangle,
  Search,
} from "lucide-react";

const nutritionPillars = [
  {
    title: "Protein Priority",
    desc: "Build lean muscle and improve recovery with quality protein sources.",
    target: "1.6 - 2.2g/kg",
    icon: <Drumstick size={22} />,
  },
  {
    title: "Smart Carbs",
    desc: "Fuel workouts and improve performance with strategic carb timing.",
    target: "2 - 5g/kg",
    icon: <Wheat size={20} />,
  },
  {
    title: "Healthy Fats",
    desc: "Support hormones, recovery, and sustainable energy levels.",
    target: "0.6 - 1g/kg",
    icon: <Salad size={20} />,
  },
];

const mealRules = [
  "Build every meal around protein first.",
  "Use minimally processed foods 80% of the time.",
  "Prep meals twice weekly for consistency.",
  "Keep hydration stable throughout the day.",
  "Do not skip post-workout nutrition.",
];

const beginnerMistakes = [
  "Extreme calorie cuts causing muscle loss.",
  "Ignoring protein intake completely.",
  "Changing diet plans every week.",
  "Not tracking hidden calories and oils.",
  "Poor hydration during training phases.",
];

const quickFoods = ["Egg", "Drumstick", "Rice", "Banana", "Oats"];

const Nutrition = () => {
  const [weight, setWeight] = useState(70);
  const [food, setFood] = useState("");

  const { fetchNutrition } = useNutrition();

  const hydrationTarget = useMemo(() => {
    const liters = (Number(weight) || 0) * 0.035;
    return Math.max(2, liters).toFixed(1);
  }, [weight]);

  const handleSearch = () => {
    if (!food.trim()) return;
    fetchNutrition(food);
  };

  return (
    <section className="min-h-screen bg-white text-[#2f2a24] pt-20 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden">

      <div className="max-w-8xl mx-auto space-y-6">

        {/* HERO */}
        <div className="relative rounded-xl overflow-hidden bg-white ">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center">

            {/* LEFT */}
            <div className="p-7 sm:p-10 lg:p-14 z-10">

              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-orange-600 mb-5">
                Nutrition Dashboard
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[0.92] tracking-[-0.05em] font-[650] max-w-2xl">
                Fuel your body for{" "}
                <span className="text-orange-600">
                  strength
                </span>
                , recovery & performance.
              </h1>

              <p className="mt-6 text-[#6d675f] text-sm sm:text-base leading-relaxed max-w-xl">
                Build sustainable nutrition habits with structured
                macros, hydration tracking, and intelligent food
                insights designed for serious progress.
              </p>

              {/* QUICK CHIPS */}
              <div className="flex flex-wrap gap-3 mt-10">

                {quickFoods.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setFood(item);
                      fetchNutrition(item);
                    }}
                    className="px-4 py-2  bg-orange-50 hover:bg-orange-100 transition text-sm font-medium text-orange-700 border border-orange-100"
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            {/* RIGHT */}
            <div className="relative h-full min-h-[350px] lg:min-h-[620px]">

              <img
                src="/assets/recovery.jpg"
                alt="nutrition"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* METRICS */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-[#111111]/90 rounded-lg p-5 text-white border border-white/10">

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Protein Goal
                    </p>

                    <h3 className="text-2xl font-semibold">
                      160g
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Calories
                    </p>

                    <h3 className="text-2xl font-semibold">
                      2450
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Recovery
                    </p>

                    <h3 className="text-2xl font-semibold">
                      92%
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Workout Fuel
                    </p>

                    <h3 className="text-2xl font-semibold">
                      High
                    </h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HYDRATION */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">

          {/* LEFT */}
          <div className="bg-[#111111] text-white border border-white/10 rounded-lg p-7 md:p-10 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-52 h-52 bg-orange-500/10 rounded-full blur-3xl" />

            <p className="uppercase tracking-[0.22em] text-[11px] text-orange-500 font-semibold mb-4 relative z-10">
              Hydration System
            </p>

            <h2 className="text-3xl md:text-4xl font-[650] tracking-[-0.04em] leading-tight mb-5 relative z-10">
              Your body performs better when hydration stays consistent.
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-lg relative z-10">
              Water intake directly impacts strength, recovery,
              digestion, energy levels, and workout performance.
            </p>

            <div className="mt-8 flex items-center gap-4 relative z-10">

              <div className="w-14 h-14 rounded-md bg-orange-500/15 flex items-center justify-center text-orange-500">
                <Droplets size={26} />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Recommended Intake
                </p>

                <h3 className="text-3xl font-semibold">
                  {hydrationTarget}L
                </h3>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white border border-black/5 rounded-xl p-7 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] text-orange-600 font-semibold mb-2">
                  Daily Tracking
                </p>

                <h3 className="text-2xl md:text-3xl font-[650] tracking-tight">
                  Hydration Calculator
                </h3>
              </div>

              <div className="w-16 h-16 rounded-md bg-orange-50 flex items-center justify-center text-orange-600">
                <Droplets size={30} />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* INPUT */}
              <div className="bg-[#f8f7f4] border border-black/5 rounded-lg p-6">

                <label className="block text-sm font-medium text-[#5f5952] mb-3">
                  Enter Weight (kg)
                </label>

                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full h-14 rounded-md border border-black/10 bg-white px-4 outline-none focus:border-orange-500 transition"
                />

                <p className="mt-4 text-sm text-[#7b746c]">
                  Formula used:
                </p>

                <p className="text-orange-600 font-medium mt-1">
                  Weight × 0.035
                </p>

              </div>

              {/* RESULT */}
              <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-lg p-6 flex flex-col justify-between">

                <div>
                  <p className="text-sm text-[#7b746c] mb-3">
                    Daily Water Target
                  </p>

                  <h2 className="text-5xl font-[650] tracking-tight text-[#2f2a24]">
                    {hydrationTarget}
                    <span className="text-2xl ml-1 text-orange-600">
                      L
                    </span>
                  </h2>
                </div>

                <div className="mt-8">

                  <div className="w-full h-3 bg-orange-100 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-orange-600 rounded-full"
                      style={{
                        width: `${Math.min(
                          (hydrationTarget / 5) * 100,
                          100
                        )}%`,
                      }}
                    />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PILLARS */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">

          {/* LARGE CARD */}
          <div className="rounded-lg p-8 bg-gradient-to-br from-white to-orange-50 border border-orange-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] text-orange-600 font-semibold mb-2">
                  Core Foundation
                </p>

                <h2 className="text-3xl font-[650] tracking-tight">
                  Nutrition Anchors
                </h2>
              </div>

              <div className="w-14 h-14 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center">
                <Drumstick size={24} />
              </div>

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {nutritionPillars[0].title}
            </h3>

            <p className="text-[#6d675f] leading-relaxed mb-6">
              {nutritionPillars[0].desc}
            </p>

            <div className="inline-flex px-5 py-3 rounded-md bg-orange-600 text-white font-medium">
              {nutritionPillars[0].target}
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">

            {nutritionPillars.slice(1).map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg bg-white border border-black/5 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >

                <div className="w-12 h-12 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {pillar.title}
                </h3>

                <p className="text-[#6d675f] text-sm leading-relaxed mb-5">
                  {pillar.desc}
                </p>

                <div className="inline-flex px-4 py-2 rounded-md bg-orange-50 text-orange-700 text-sm font-medium">
                  {pillar.target}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SEARCH + RESULTS */}
        <div className="rounded-xl bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">

          {/* HEADER */}
          <div className="p-7 sm:p-10 border-b border-black/5 bg-gradient-to-r from-white to-orange-50">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              {/* LEFT */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[11px] text-orange-600 font-semibold mb-3">
                  Smart Nutrition Analysis
                </p>

                <h2 className="text-3xl md:text-4xl font-[650] tracking-tight mb-4">
                  Food Nutrition Insights
                </h2>

                <p className="text-[#6d675f] leading-relaxed max-w-xl">
                  Analyze calories, protein, carbohydrates, and
                  fats for your favorite foods instantly.
                </p>

              </div>

              {/* RIGHT */}
              <div className="w-full lg:max-w-[520px]">

                <div className="flex flex-col sm:flex-row gap-3">

                  <div className="flex-1 relative">

                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d766d]"
                    />

                    <input
                      type="text"
                      placeholder="Search food nutrition..."
                      value={food}
                      onChange={(e) => setFood(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleSearch()
                      }
                      className="w-full h-14 rounded-md border border-black/10 bg-white pl-12 pr-4 outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <button
                    onClick={handleSearch}
                    className="h-14 px-8 rounded-md bg-orange-600 hover:bg-orange-700 transition text-white font-medium"
                  >
                    Analyze
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div className="p-6 sm:p-10 bg-[#fcfcfc]">
            <NutritionCard />
          </div>
        </div>

        {/* RULES + MISTAKES */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* RULES */}
          <div className="rounded-xl bg-white border border-black/5 p-8">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center">
                <Check size={24} />
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] text-orange-600 font-semibold">
                  Daily System
                </p>

                <h2 className="text-2xl font-semibold">
                  Meal Rules
                </h2>
              </div>

            </div>

            <div className="space-y-5">

              {mealRules.map((rule) => (
                <div
                  key={rule}
                  className="flex items-start gap-4 border-b border-black/5 pb-5"
                >

                  <div className="min-w-[38px] h-[38px] rounded-md bg-orange-50 flex items-center justify-center text-orange-600">
                    <Check size={18} />
                  </div>

                  <p className="text-[#5f5952] leading-relaxed">
                    {rule}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* MISTAKES */}
          <div className="rounded-xl bg-[#111111] text-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-md bg-white/10 flex items-center justify-center text-orange-500">
                <AlertTriangle size={24} />
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] text-orange-500 font-semibold">
                  Avoid These
                </p>

                <h2 className="text-2xl font-semibold">
                  Beginner Mistakes
                </h2>
              </div>

            </div>

            <div className="space-y-5">

              {beginnerMistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="flex items-start gap-4 border-b border-white/10 pb-5"
                >

                  <div className="min-w-[38px] h-[38px] rounded-md bg-white/10 flex items-center justify-center text-orange-400">
                    <Flame size={18} />
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {mistake}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;