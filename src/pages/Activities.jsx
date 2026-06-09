import React from "react";

const StroqActivities = () => {
  return (
    <section className="bg-white relative overflow-hidden px-5 sm:px-6 md:px-12 py-16 md:py-20">
      {/* Route Line - Desktop Only */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0 400
             L250 280
             L420 340
             L650 180
             L900 250
             L1180 140
             L1450 350
             L1600 550"
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
          strokeOpacity="0.35"
        />
      </svg>

      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[520px_1fr] gap-10 lg:gap-16 xl:gap-24 items-center">
          
          {/* Image */}
          <div>
            <img
              src="/assets/aboutimg.jpg"
              alt="Stroq Fitness"
              className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover grayscale"
            />
          </div>

          {/* Content */}
          <div>
            {/* Top Info Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
              <div>
                <p className="text-orange-500 text-xs tracking-[0.3em] uppercase mb-3">
                  STROQ
                </p>

                <h4 className="text-lg md:text-xl font-bold leading-tight">
                  Personalized
                  <br />
                  Training
                </h4>
              </div>

              <div>
                <p className="text-orange-500 text-xs tracking-[0.3em] uppercase mb-3">
                  FITNESS
                </p>

                <h4 className="text-lg md:text-xl font-bold leading-tight">
                  Strength &
                  <br />
                  Endurance
                </h4>
              </div>

              <div>
                <p className="text-orange-500 text-xs tracking-[0.3em] uppercase mb-3">
                  HEALTH
                </p>

                <h4 className="text-lg md:text-xl font-bold leading-tight">
                  Nutrition
                  <br />
                  Guidance
                </h4>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-16 md:mb-24">
              <h2
                className="
                  text-[2.2rem]
                  sm:text-[3rem]
                  md:text-[4rem]
                  font-black
                  leading-[0.9]
                  text-black
                  max-w-4xl
                "
              >
                I DON'T TRAIN
                <br />
                TO LOOK FIT.
                <br />
                I TRAIN TO
                <br />
                FEEL STRONG.
              </h2>
            </div>

            {/* Activities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 lg:mb-24">
              <div className=" pl-4">
              

                <h3 className="text-xl md:text-2xl font-black leading-tight text-black">
                  WORKOUT
                  <br />
                  PLANNER
                </h3>
              </div>

              <div className=" pl-4">
              

                <h3 className="text-xl md:text-2xl font-black leading-tight text-black">
                  STRENGTH
                  <br />
                  BUILDING
                </h3>
              </div>

              <div className=" pl-4">
              

                <h3 className="text-xl md:text-2xl font-black leading-tight text-black">
                  NUTRITION
                  <br />
                  GUIDANCE
                </h3>
              </div>
            </div>

            {/* Branding */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <h1
                  className="
                    text-[48px]
                    sm:text-[70px]
                    md:text-[90px]
                    lg:text-[120px]
                    xl:text-[150px]
                    font-black
                    leading-[0.85]
                    text-black
                  "
                >
                  STROQ
                </h1>

                <div className="h-1.5 w-20 sm:w-24 bg-orange-500 mx-auto lg:ml-auto lg:mr-0 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StroqActivities;