import React from "react";

const StroqActivities = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="max-w-7xl">
          <p className="tracking-[0.3em] text-orange-500 text-xs mb-10 uppercase">
            Stroq Activities
          </p>

          <ul className="space-y-4 md:space-y-6 text-2xl sm:text-3xl md:text-5xl font-semibold text-black leading-tight">
            <li className="transition hover:text-orange-500">
              Personalized workout generator
            </li>

          

            <li className="transition hover:text-orange-500">
              Goal tracks: strength, hypertrophy, endurance
            </li>

            <li className="transition hover:text-orange-500">
              Nutrition & hydration guidance
            </li>

            <li className="transition hover:text-orange-500">
              Workout guide: mass gain, weight loss, recomposition
            </li>

          
          </ul>
        </div>

        <div className="relative">
          <img
            src="/assets/aboutimg.jpg"
            alt="Stroq Fitness"
            className="w-full h-[340px] sm:h-[460px] md:h-[620px] object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default StroqActivities;


