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
      title: "Don't Fear Carbs",
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
    <section className="min-h-screen">
      {/* HERO */}
      <div className="grid md:grid-cols-2 items-center min-h-[80vh] px-8 md:px-20">
        {/* LEFT */}
        <div className="flex flex-col gap-6 max-w-xl">
          <p className="uppercase tracking-[0.35em] text-xs text-[#43423F] font-semibold">
            StroQ Nutrition
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#43423F] leading-tight">
            Fuel <br /> Your Body
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed">
            Strength is built in the gym, but progress is built in the kitchen.
            Nutrition powers recovery, performance and long-term health.
          </p>

          <div className="w-20 h-[3px] bg-orange-600"></div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="public/assets/recovery.jpg"
            alt="fitness nutrition"
            className="rounded-sm object-cover  h-[180px] w-[500px] sm:h-[220px] md:h-[300px] lg:w-[600px]  "
          />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-gray-200"></div>

      {/* NUTRITION TIPS */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 py-24">
        <h2 className="text-3xl font-bold text-[#43423F] mb-16">
          Nutrition Guidelines
        </h2>

        <div className="flex flex-col gap-12">
          {tips.map((tip, i) => (
            <div key={i} className="flex gap-8 items-start group">
              {/* NUMBER */}
              <div className="text-4xl font-bold text-gray-200 group-hover:text-orange-500 transition">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-[#43423F]">
                  {tip.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                  {tip.desc}
                </p>

                <div className="w-12 h-[2px] bg-orange-600 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FITNESS IMAGE STRIP */}
      <div className="px-8 md:px-20 pb-24">
        <div className="relative rounded-sm overflow-hidden">
          <img
            src="public/assets/fit.jpg"
            alt="fitness food"
            className="w-full h-[380px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Train Hard. Eat Smart.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
