const Nutrition = () => {
  const tips = [
    {
      title: "Protein in Every Meal",
      desc: "Protein supports muscle repair and growth. Include eggs, paneer, dal, tofu, chicken or curd in every meal.",
    },
    {
      title: "Add Fiber to Your Diet",
      desc: "Fiber improves digestion and gut health. Eat vegetables like broccoli, spinach, carrots, beans and cabbage daily.",
    },
    {
      title: "Don’t Fear Carbs",
      desc: "Carbohydrates provide energy for workouts. Prefer complex carbs like rice, oats, roti, sweet potatoes and millets.",
    },
    {
      title: "Healthy Fats Matter",
      desc: "Healthy fats support hormones and brain health. Include nuts, seeds, ghee in moderation, olive oil and avocado.",
    },
    {
      title: "Hydrate Properly",
      desc: "Drink at least 2.5–3 liters of water daily. Proper hydration improves performance and recovery.",
    },
    {
      title: "Common Nutrient Gaps",
      desc: "Many Indian diets lack protein, omega-3, vitamin B12 and fiber. Add dal, paneer, nuts, seeds and leafy greens regularly.",
    },
  ];

  return (
    <section className="bg-white text-[#2f2a24] overflow-hidden">
      {/* HERO */}
      <div className="relative px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 items-center">
          {/* LEFT */}
          <div className="relative z-10">
            <p className="uppercase tracking-[0.32em] text-[11px] text-orange-600 font-semibold mb-5">
              StroQ Nutrition
            </p>

            <h1 className="text-[3.2rem] sm:text-[4.4rem] lg:text-[6rem] leading-[0.95] font-semibold tracking-[-0.05em] text-[#2f2a24]">
              Fuel
              <br />
              smarter.
            </h1>

            <p className="mt-6 max-w-md text-sm md:text-base text-[#6d675f] leading-relaxed">
              Your body does not just need calories. It needs structure,
              balance, recovery and consistency. Train with intent, eat with
              intelligence.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[2px] w-16 bg-orange-600"></div>
              <span className="text-xs uppercase tracking-[0.24em] text-[#7b746c]">
                Recovery • Performance • Strength
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="relative">
            <div className="relative rounded-md overflow-hidden bg-white border border-gray-100 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <img
                src="/assets/recovery.jpg"
                alt="fitness nutrition"
                className="w-full h-[300px] md:h-[390px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>

              <div className="absolute bottom-5 left-5 bg-white/92 backdrop-blur-md rounded-md px-4 py-3 shadow-lg max-w-[220px] border border-white/60 lg:hidden">
                <p className="text-[10px] uppercase tracking-[0.25em] text-orange-600 font-semibold mb-1 ">
                  Daily focus
                </p>
                <p className="text-sm font-medium text-[#2f2a24] leading-snug">
                  Better meals lead to better training output.
                </p>
              </div>
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 bg-black/90 text-white rounded-md px-5 py-5 w-48 shadow-2xl">
              <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400 mb-2">
                Key idea
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                Nutrition is support for performance, not restriction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION INTRO */}
      <div className="border-t border-gray-100">
        <div className="px-6 md:px-12 lg:px-20 py-14 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-orange-600 font-semibold mb-3">
              About nutrition
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] leading-tight text-[#2f2a24]">
              Strong progress comes from repeatable eating habits.
            </h2>
          </div>

          <div className="text-[#6d675f] text-sm md:text-base leading-relaxed max-w-xl">
            Good nutrition is not about perfection. It is about building a
            practical system that gives your body enough protein, enough energy,
            enough hydration and enough micronutrients to perform well over time.
          </div>
        </div>
      </div>

      {/* TIPS GRID */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="group relative min-h-[230px] bg-[#fcfcfc] rounded-md p-6 border border-gray-200  "
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#8d857c]">
                  Tip {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-3 h-3 rounded-full bg-orange-500 group-hover:scale-125 transition"></span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2a24] mb-4 leading-snug">
                {tip.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#6d675f] max-w-[95%]">
                {tip.desc}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* LOWER TWO BLOCKS */}
      <div className="px-6 md:px-12 lg:px-10 py-6 md:py-14">
        <div className="grid lg:grid-cols-[0.78fr_1.12fr] gap-5 items-stretch max-w-7xl mx-auto">
          <div className="bg-black/90 rounded-md p-7 md:p-8 text-white flex flex-col justify-between min-h-[250px]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 font-semibold mb-4">
                StroQ method
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] leading-tight">
                Eat to recover. Eat to perform.
              </h3>
            </div>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm mt-6">
              The best nutrition plan is the one you can actually follow.
              Simple meals and strong consistency always beat extreme diets.
            </p>
          </div>

          <div className="relative rounded-md overflow-hidden h-[500px] shadow-[0_16px_50px_rgba(0,0,0,0.07)]">
            <img
              src="/assets/fit.jpg"
              alt="fitness food"
              className="w-full h-full object-cover"
            />
           

            <div className="absolute left-6 md:left-8 bottom-6 md:bottom-8 max-w-md">
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-300 font-semibold mb-3">
                Performance mindset
              </p>
              <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-[-0.04em] leading-[0.98]">
                Train hard.
                <br />
                Eat smart.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;