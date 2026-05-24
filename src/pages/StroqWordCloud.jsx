import { ArrowUpRight, Flame, TimerReset, Zap } from "lucide-react";

const programs = [
  "Strength biased cycles",
  "Hypertrophy focused routines",
  "Endurance conditioning",
  "Nutrition and hydration basics",
];

const StroqWordCloud = () => {
  return (
    <section className="stroq-surface px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
      <div className="max-w-[1500px] mx-auto bg-[#0d0d0d] text-white rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 p-5 sm:p-8 lg:p-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-3 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#fc5200]" />
              <span className="text-xs uppercase tracking-[0.18em] font-semibold">
                Current Focus
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-semibold max-w-4xl">
              Turn fitness intent into a cleaner weekly system.
            </h2>

            <p className="mt-7 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              The product direction is simple: remove visual clutter, keep
              strong sports imagery, and make every section feel like it belongs
              to the same premium training brand.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="relative min-h-[240px] rounded-xl overflow-hidden">
              <img
                src="/assets/gen4.jpg"
                alt="Training program"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                <span className="w-11 h-11 rounded-xl bg-[#fc5200] flex items-center justify-center">
                  <Zap size={20} />
                </span>
                <h3 className="text-3xl font-semibold tracking-tight">
                  Built for repeatable performance.
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#fc5200] p-5 min-h-[150px] flex flex-col justify-between">
                <Flame size={22} />
                <p className="text-2xl font-semibold tracking-tight">
                  Orange stays as the energy signal.
                </p>
              </div>

              <div className="rounded-xl bg-white text-[#111] p-5 min-h-[150px] flex flex-col justify-between">
                <TimerReset size={22} />
                <p className="text-2xl font-semibold tracking-tight">
                  Recovery, routine, and consistency stay visible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 sm:px-10 lg:px-12 py-6">
          <div className="grid md:grid-cols-4 gap-4">
            {programs.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-4 last:border-r-0"
              >
                <p className="text-sm text-gray-300">{item}</p>
                <ArrowUpRight size={16} className="text-[#fc5200]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StroqWordCloud;
