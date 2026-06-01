import { ArrowUpRight } from "lucide-react";

const StroqWordCloud = () => {
  return (
   <section className="bg-black text-white  py-8 sm:py-10 overflow-hidden">


    {/* HERO */}
    <div className="relative min-h-[560px] flex flex-col items-center justify-center px-5 sm:px-8">

      {/* ORBITS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="relative w-[520px] h-[520px] max-w-full">

          <div className="absolute inset-0 border border-white/10 rounded-[50%] rotate-[22deg]" />

          <div className="absolute inset-0 border border-white/10 rounded-[50%] rotate-[-22deg]" />

          {/* STAR */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="relative">

              <div className="absolute inset-0 bg-[#fc5200] blur-[45px] opacity-70 rounded-full" />

              <div className="relative w-5 h-5 bg-[#fc5200] rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">

        <h1 className="text-[2.6rem] sm:text-[4.5rem] lg:text-[5.7rem] leading-[0.88] tracking-[-0.08em] font-black uppercase text-[#d7d7d7]">
          BUILD
          <br />
          ATHLETIC
          <br />
          CONSISTENCY
        </h1>

        <p className="mt-7 text-white/40 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed uppercase tracking-[0.14em]">
          Training systems focused on recovery,
          performance, and discipline.
        </p>
      </div>

      {/* CURVE */}
      <svg
        className="absolute bottom-[12%] left-0 w-full opacity-25"
        viewBox="0 0 1440 400"
        fill="none"
      >
        <path
          d="M0 180C300 260 520 130 760 180C980 220 1180 210 1440 280"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </div>

   
   
  
</section>
  );
};
export default StroqWordCloud;