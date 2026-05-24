import { useMemo, useState } from "react";

import { Moon, Search } from "lucide-react";

import { useNutrition } from "../providers/nutritionContext";

import NutritionCard from "../features/workout/components/NutritionCard";

const stats = [
  { label: "Calories", value: "2450" },

  { label: "Protein", value: "162g" },

  { label: "Water", value: "3.2L" },

  { label: "Recovery", value: "92%" },
];

const nutritionMistakes = [
  {
    title: "Skipping Protein",

    desc: "Many beginners focus only on calories and ignore protein intake.",
  },

  {
    title: "Drinking Less Water",

    desc: "Dehydration reduces workout performance and endurance.",
  },

  {
    title: "No Meal Timing",

    desc: "Long gaps without food reduce energy levels .",
  },

  {
    title: "Ignoring Sleep",

    desc: "Recovery and muscle growth depend heavily on sleep.",
  },
];

const Nutrition = () => {
  const [weight, setWeight] = useState(72);

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
    <main className="bg-white text-[#111111] overflow-hidden">
      {/* HERO SECTION */}

      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1450px] mx-auto">
          <div className="text-center py-10 sm:py-14 lg:py-10 px-4">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-[#fc5200] mb-5">
              Smart Athlete Nutrition
            </p>

            <h2 className="text-[2.4rem] sm:text-[3.8rem] lg:text-[5.5rem] leading-[1] tracking-[-0.06em] font-semibold max-w-5xl mx-auto">
              Every athlete has a
              <span className="italic font-normal"> unique rhythm </span>
              in their performance journey.
            </h2>

            <p className="mt-8 text-[#666] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Balanced nutrition, hydration, and recovery are essential for
              maximizing strength, endurance, and overall athletic performance.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-6xl mx-auto">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white border border-black/5 p-6"
                >
                  <p className="text-[#777] text-xs sm:text-sm mb-3">
                    {item.label}
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SMART FOOD ANALYSIS */}

      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-[1450px] mx-auto bg-white rounded-xl border border-black/5 p-6 lg:p-7">
          {/* TOP */}

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 mb-8">
            <div>
              <p className="uppercase tracking-[0.22em] text-[11px] font-semibold text-[#fc5200] mb-4">
                Smart Food Analysis
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-[-0.06em] leading-[0.95] font-semibold max-w-4xl">
                Track your meals with intelligent nutrition insights.
              </h2>
            </div>

            <div className="bg-white rounded-xl border border-black/5 p-5 min-w-[240px]">
              <p className="text-[#777] text-sm mb-3">Daily Recovery</p>

              <div className="flex items-end gap-2">
                <h3 className="text-6xl leading-none tracking-[-0.07em] font-semibold">
                  92
                </h3>

                <span className="text-[#777] mb-1">%</span>
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}

          <div className="bg-white rounded-xl border border-black/5 p-4 flex flex-col lg:flex-row lg:items-center gap-3 mb-5">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
              />

              <input
                type="text"
                placeholder="Search food nutrition..."
                value={food}
                onChange={(e) => setFood(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full h-14 rounded-xl bg-[#f5f5f2]  border border-black/5 pl-12 pr-4 outline-none text-[15px]"
              />
            </div>

            <button
              onClick={handleSearch}
              className="h-14 px-7 rounded-xl bg-[#111111] text-white font-medium"
            >
              Analyze
            </button>
          </div>

          {/* NUTRITION CARD */}

          <NutritionCard />
        </div>
      </section>

      {/* MISTAKES */}

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1450px] mx-auto">
          <div className="mb-10">
            <p className="uppercase tracking-[0.22em] text-[11px] font-semibold text-[#fc5200] mb-4">
              Nutrition Mistakes
            </p>

            <h2 className="text-5xl lg:text-6xl tracking-[-0.06em] font-semibold leading-[0.95] max-w-4xl">
              Beginner mistakes that slow down progress.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {nutritionMistakes.map((item, index) => (
              <div
                key={index}
                className="bg-[#f5f5f2] rounded-xl border border-black/5 p-6 min-h-[240px] flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                  <span className="font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDRATION */}

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1450px] mx-auto bg-[#111111] rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 p-8 lg:p-14">
            {/* LEFT */}

            <div>
              <p className="uppercase tracking-[0.22em] text-[11px] font-semibold text-[#fc5200] mb-5">
                Hydration Calculator
              </p>

              <h2 className="text-5xl lg:text-7xl text-white tracking-[-0.07em] leading-[0.95] font-semibold">
                Stay hydrated for peak performance.
              </h2>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                Water intake directly affects recovery, endurance, energy, and
                workout efficiency throughout the day.
              </p>
            </div>

            {/* RIGHT */}

            <div className="w-full flex flex-col lg:flex-row gap-6">
              {/* LEFT SIDE */}

              <div className="w-full lg:w-1/2 bg-white rounded-2xl p-8 border border-black/5">
                {/* TOP */}

                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-[#777] text-sm mb-2">
                      Enter Body Weight
                    </p>

                    <h3 className="text-6xl font-semibold tracking-tight leading-none">
                      {weight}

                      <span className="text-2xl text-[#777] ml-2">kg</span>
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#111111] text-white flex items-center justify-center">
                    <Moon size={24} />
                  </div>
                </div>

                {/* INPUT */}

                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your body weight"
                  className="w-full h-14 px-5 rounded-xl border border-black/10 outline-none text-lg font-medium focus:border-[#fc5200]"
                />

                {/* SMALL TEXT */}

                <p className="text-sm text-[#888] mt-4">
                  Example: 70kg body weight
                </p>
              </div>

              {/* RIGHT SIDE */}

              <div className="w-full lg:w-1/2 bg-white rounded-xl p-8 border border-black/5 flex flex-col justify-between">
                <div>
                  <p className="text-[#777] text-sm mb-4">
                    Recommended Daily Water Intake
                  </p>

                  <div className="flex items-end gap-3">
                    <h2 className="text-7xl font-semibold tracking-[-0.07em] leading-none">
                      {hydrationTarget}
                    </h2>

                    <span className="text-3xl text-[#777] mb-2">L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}

      <section className="w-full bg-white py-24 px-4 sm:px-6  overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* TOP TITLE */}
          <div className="mb-24">
            <p className="text-sm uppercase tracking-[0.25em] text-[#777] mb-6">
              Elite Nutrition Rules
            </p>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.08em] leading-[0.9] max-w-5xl">
              Meal rules followed by top athletes.
            </h2>

            <p className="mt-10 text-[#666] text-lg max-w-3xl leading-relaxed">
              These simple nutrition principles create better recovery, muscle
              growth, performance, energy stability, and long-term consistency.
            </p>
          </div>

          {/* RULES SECTION */}
          <div className="relative">
            {/* CENTER BIG TEXT */}
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
              <h1 className="text-[180px] leading-[0.8] font-black tracking-[-0.12em] text-black/5 text-center">
                NUTRITION
                <br />
                RULES
              </h1>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
              {[
                "Eat protein in every major meal for muscle recovery.",
                "Drink water immediately after waking up every day.",
                "Never skip breakfast before intense training sessions.",
                "80% clean nutrition is enough for long-term progress.",
                "Prioritize whole foods over processed packaged foods.",
                "Keep meal timing consistent for stable energy levels.",
                "Sleep minimum 7-8 hours for proper recovery.",
                "Do not rely only on supplements for transformation.",
                "Include fruits and vegetables daily for micronutrients.",
                "Track progress weekly instead of daily fluctuations.",
              ].map((rule, index) => (
                <div
                  key={index}
                  className="group border-t border-black pt-5 flex gap-6"
                >
                  <span className="text-sm text-[#777] min-w-[70px]">
                    Rule {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.05em] leading-tight ">
                    {rule}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* PERFORMANCE TIPS */}
          <div className="mt-32 relative overflow-hidden">
            {/* TOP */}
            <div className="mb-20">
              <p className="text-sm uppercase tracking-[0.25em] text-[#777] mb-5">
                Performance Nutrition Tips
              </p>

              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.08em] leading-[0.9] max-w-5xl">
                World-class athlete tips
              </h2>
            </div>

            {/* MAIN LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* LEFT IMAGE */}
              <div className="lg:col-span-5 relative">
                
                  <img
                    src="../assets/gen1.jpg"
                    alt=""
                    className="w-full h-[320px] sm:h-[400px] md:h-[600px] object-cover object-top rounded-xl"
                  />
                

                {/* FLOATING NOTE */}
                <div className="absolute -bottom-6 -right-4 bg-white border border-black/10 rounded-2xl px-6 py-5 max-w-[260px]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#888] mb-3">
                    Recovery
                  </p>

                  <h3 className="text-lg font-semibold tracking-[-0.04em] leading-snug">
                    Recovery quality directly affects strength, energy, and
                    muscle growth.
                  </h3>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    "Prepare tomorrow's meals at night to avoid unhealthy eating decisions.",
                    "Hydration affects gym performance more than most supplements.",
                    "Your recovery quality determines your next workout quality.",
                    "Consistency for 1 year beats extreme dieting for 1 month.",
                    "Eat slowly because fast eating increases overeating.",
                    "Simple diets are easier to maintain than complicated plans.",
                    "Good sleep improves fat loss and muscle recovery naturally.",
                    "Train hard, but recover even harder for sustainable progress.",
                  ].map((tip, index) => (
                    <div
                      key={index}
                      className="bg-[#f8f8f8] border border-black/5 rounded-2xl p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-[#888] mb-4">
                        Tip {(index + 1).toString().padStart(2, "0")}
                      </p>

                      <h3 className="text-lg font-semibold tracking-[-0.04em] leading-relaxed">
                        {tip}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* BIG TYPO */}
                <div className="mt-16">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.09em] leading-[0.85]">
                    RECOVER
                    <br />
                    HARDER
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nutrition;
