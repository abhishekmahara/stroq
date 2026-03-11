import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-3 items-center">

      {/* LEFT IMAGE */}
      <div className="hidden md:block h-full">
        <img
          src="public\assets\hero-bg.jpg"
          alt="fitness"
          className="h-full w-full object-cover"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center text-center gap-10 px-8 py-20">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <p className="uppercase tracking-[0.3em] text-xs text-[#43423F] font-semibold">
            Precision Performance Training
          </p>

          <h1 className="text-5xl font-bold md:text-6xl text-[#43423F] tracking-tight uppercase">
            StroQ
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-[450px] flex flex-col gap-3">
          <p className="text-lg font-medium uppercase text-[#43423F] tracking-wide">
            It's Time to Get <span className="text-orange-600 font-bold">Enormous</span>
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            Stop wandering the gym floor. StroQ generates personalized
            workouts using performance algorithms and biometrics.
          </p>
        </div>

        {/* CTA */}
        <Button
          text="Generate Plan"
          onClick={() => navigate("/generator")}
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-10 pt-8 border-t border-white/10">
          <div>
            <p className="text-orange-600 font-bold">HANDS-DRIVEN</p>
            <p className="text-[10px] uppercase text-gray-500">Selection</p>
          </div>

          <div>
            <p className="text-orange-600 font-bold">PRO-LEVEL</p>
            <p className="text-[10px] uppercase text-gray-500">Routines</p>
          </div>

          <div>
            <p className="text-orange-600 font-bold">ZERO</p>
            <p className="text-[10px] uppercase text-gray-500">Guesswork</p>
          </div>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block h-full">
        <img
          src="public\assets\bg2.jpg"
          alt="fitness"
          className="h-full w-full object-cover"
        />
      </div>

    </section>
  );
};

export default Hero;