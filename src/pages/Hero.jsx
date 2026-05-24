import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import StroqActivities from "./Activities";
import StroqWordCloud from "./StroqWordCloud";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 items-center bg-white min-h-screen">

        {/* LEFT IMAGE */}
        <div className="hidden md:block h-full relative overflow-hidden">

          <img
            src="../assets/heroimg1.jpg"
            alt="fitness"
            className="h-full w-full object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-10 left-8 rounded-[24px] border border-black/10 bg-black/20 backdrop-blur-xl p-5 max-w-[260px]">

            <p className="text-[10px] uppercase tracking-[0.18em] text-white mb-2">
              Smart Training
            </p>

            <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-white">
              Structured progression built for consistency.
            </h3>

          </div>

          <div className="absolute inset-0 bg-black/10"></div>

        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center px-6 sm:px-10 py-16 sm:py-20">

          <div className="w-full max-w-[460px] flex flex-col items-center text-center gap-6">

            <p className="uppercase tracking-[0.24em] text-[11px] text-gray-500 font-semibold">
              Precision Performance Training
            </p>

            <p className="uppercase text-2xl sm:text-3xl font-bold tracking-[0.10em] text-orange-600">
              STROQ
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95] text-[#1d1d1d] uppercase">
              Train Smarter.
              <br />
              <span className="text-orange-600">
                Progress Faster.
              </span>
            </h1>

            <div className="pt-10 rounded-[24px]">

              <Button
                text="Generate Workout Plan"
                onClick={() => navigate("/generator")}
              />

            </div>

            <button
              onClick={() => navigate("/guides/workout")}
              className="text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600 hover:text-orange-600 transition"
            >
              Explore Workout Guide
            </button>

            <div className="w-full pt-5 border-t border-gray-200">

              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gray-400">
                Goal-based plans | Beginner-friendly | Clean structure
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