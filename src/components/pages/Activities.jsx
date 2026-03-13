import React from "react";

const StroqActivities = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <p className="tracking-[0.3em] text-orange-500 text-xs mb-10 uppercase">
            About Stroq
          </p>

          <ul className="space-y-6 text-4xl md:text-5xl font-semibold text-black leading-tight">
            
            <li className="transition hover:text-orange-500">
              Personalized workouts
            </li>

            <li className="transition hover:text-orange-500">
              Training for your goals
            </li>

            <li className="transition hover:text-orange-500">
              Simple nutrition guidance
            </li>

            <li className="transition hover:text-orange-500">
              Build consistent habits
            </li>

            <li className="transition hover:text-orange-500">
              Healthier lifestyle
            </li>

          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src="/assets/hero-bg.jpg"
            alt="Stroq Fitness"
            className="w-full h-[600px] object-cover rounded-xs"
          />

          

        </div>

      </div>
    </section>
  );
};

export default StroqActivities;