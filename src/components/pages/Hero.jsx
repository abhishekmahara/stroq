import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import StroqActivities from "./Activities";
import Thirdheropage from "./thirdheropage";
import StroqWordCloud from "./StroqWordCloud";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 items-center bg-white min-h-screen ">

        {/* LEFT IMAGE */}
        <div className="hidden md:block h-full relative overflow-hidden">
          <img
            src="/assets/heroimg1.jpg"
            alt="fitness"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center gap-12 px-8 py-20">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <p className="uppercase tracking-[0.35em] text-xs text-gray-500 font-semibold">
              Precision Performance Training
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1d] uppercase">
              Stro<span className="text-orange-600">Q</span>
            </h1>

            <div className="w-16 h-[3px] bg-orange-600 mx-auto"></div>
          </div>

          {/* Description */}
          <div className="max-w-[460px] flex flex-col gap-4">
            <p className="text-lg font-semibold uppercase tracking-wide text-[#333]">
              It's Time to Get{" "}
              <span className="text-orange-600 font-bold">Stronger</span>
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Stop wandering the gym floor. StroQ generates personalized
              workouts based on your preferences and provides simple
              nutrition guidance to help you stay consistent and improve
              your performance.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button
              text="Generate Workout Plan"
              onClick={() => navigate("/generator")}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 pt-7 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              <p className="text-orange-600 font-bold text-sm tracking-wide">
                SMART
              </p>
              <p className="text-[11px] uppercase text-gray-400">
                Workouts
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-orange-600 font-bold text-sm tracking-wide">
                GOAL
              </p>
              <p className="text-[11px] uppercase text-gray-400">
                Based Plans
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-orange-600 font-bold text-sm tracking-wide">
                SIMPLE
              </p>
              <p className="text-[11px] uppercase text-gray-400">
                Nutrition
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block h-full relative overflow-hidden">
          <img
            src="/assets/bg2.jpg"
            alt="fitness"
            className="h-full w-full object-cover"
          />
        </div>

      </section>

      <StroqActivities />
      <StroqWordCloud />
    
    </>
  );
};

export default Hero;