import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import StroqActivities from "./Activities";
import StroqWordCloud from "./StroqWordCloud";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 items-center bg-white min-h-[85vh] md:min-h-screen">

        {/* LEFT IMAGE */}
        <div className="hidden md:block h-full relative overflow-hidden">
          <img
            src="../assets/heroimg1.jpg"
            alt="fitness"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* CENTER CONTENT */}
     <div className="flex flex-col items-center justify-center my-30 md:my-0 px-6 sm:px-10 py-8 md:py-20">

  <div className="relative w-full max-w-[460px] flex flex-col items-center text-center gap-6 overflow-hidden">

    {/* MOBILE BACKGROUND WORD */}
    <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
      <span className="text-[5rem] max-[375px]:text-[4rem] font-black tracking-[-0.05em] text-black/[0.03] uppercase">
        STROQ
      </span>
    </div>

    <p className="relative z-10 uppercase tracking-[0.24em] text-[11px] text-gray-500 font-semibold">
      Precision Performance Training
    </p>

    <h1 className="relative z-10 text-[clamp(3rem,12vw,4.5rem)] font-bold tracking-[-0.04em] leading-[0.9] text-[#1d1d1d] uppercase">
      Train
      <br />
      Smarter.
      <br />
      <span className="text-orange-600">
        Progress
        <br />
        Faster.
      </span>
    </h1>

    <div className="relative z-10 w-full sm:w-auto pt-2">
      <Button
        text="Generate Workout Plan"
        onClick={() => navigate("/generator")}
      />
    </div>

    <button
      onClick={() => navigate("/guides/workout")}
      className="relative z-10 text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600 hover:text-orange-600 transition"
    >
      Explore Workout Guide
    </button>

    <div className="relative z-10 w-full pt-5 ">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gray-400 leading-relaxed">
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