import {
  ArrowUpRight,
  Brain,
  Dumbbell,
  Flame,
  HeartPulse,
  Sparkles,
  Trophy,
} from "lucide-react";

const mindset = [
  {
    title: "Discipline",
    text: "Consistency creates real transformation. Stroq focuses on repeatable training systems instead of shortcuts.",
  },
  {
    title: "Performance",
    text: "Training, hydration, recovery, and nutrition are treated as one connected performance ecosystem.",
  },
  {
    title: "Clarity",
    text: "Fitness guidance should feel clean, understandable, and practical for everyday athletes.",
  },
];

const moodboard = [
  "../assets/hero-bg.jpg",
  "../assets/gen7.jpg",
  "../assets/bg21.jpg",
  "../assets/Innerpace.jpg",
  "../assets/fit.jpg",
];

const About = () => {
  return (
    <main className="bg-white text-[#111] overflow-hidden">

      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        <div className="max-w-[1500px] mx-auto">

          {/* TOP HANDWRITTEN STYLE */}
          <div className="mb-16">

            <p className="text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.08em] font-black uppercase text-[#111] max-w-6xl">
              Built around
              <span className="text-[#fc5200]"> discipline</span>,
              performance &
              consistency.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">

            {/* IMAGE */}
            <div className="relative">

              <div className="overflow-hidden rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="/assets/np.jpg"
                  alt="Stroq athlete"
                  className="w-full h-[520px] object-cover"
                />
              </div>

              {/* FLOATING NOTE */}
              <div className="absolute -left-4 top-10 bg-[#111] text-white p-5 rounded-xl max-w-[220px] rotate-[-3deg] shadow-2xl">

                <p className="text-lg leading-relaxed font-medium">
                  “Train hard. Recover smart. Stay consistent.”
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>

              <div className="mb-14">

                <p className="uppercase tracking-[0.24em] text-[11px] font-semibold text-[#fc5200] mb-5">
                  About Stroq
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-[-0.06em] leading-[0.95] font-semibold max-w-4xl">
                  A modern sports-inspired fitness platform built with frontend precision.
                </h2>

                <p className="mt-8 text-[#555] text-base sm:text-lg leading-relaxed max-w-3xl">
                  Stroq is a personal frontend project focused on workouts,
                  recovery, nutrition, and athletic consistency. The experience
                  combines premium sports branding with practical fitness tools
                  that help users stay focused and disciplined.
                </p>
              </div>

              {/* CONCEPT */}
              <div className="grid sm:grid-cols-3 gap-5">

                {mindset.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-white border border-black/5 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight mb-4">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#666]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOODBOARD */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">

        <div className="max-w-[1500px] mx-auto">

          <div className="text-center mb-16">

            <p className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] tracking-[-0.08em] font-black uppercase">
              Sports Moodboard
            </p>

            <p className="mt-6 text-[#555] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              The visual direction of Stroq is inspired by athlete mentality,
              sports campaigns, gym culture, recovery routines, and performance-driven environments.
            </p>
          </div>

          {/* COLLAGE */}
          <div className="relative min-h-[900px]">

            {/* IMAGE 1 */}
            <div className="absolute left-0 top-0 w-[240px] sm:w-[280px] rotate-[-4deg]">
              <img
                src={moodboard[0]}
                alt=""
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="absolute left-[28%] top-[12%] w-[220px] sm:w-[260px] rotate-[3deg]">
              <img
                src={moodboard[1]}
                alt=""
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="absolute right-[8%] top-0 w-[240px] sm:w-[290px] rotate-[-2deg]">
              <img
                src={moodboard[2]}
                alt=""
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="absolute left-[10%] bottom-[12%] w-[260px] sm:w-[320px] rotate-[2deg]">
              <img
                src={moodboard[3]}
                alt=""
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>

            {/* IMAGE 5 */}
            <div className="absolute right-[15%] bottom-0 w-[250px] sm:w-[310px] rotate-[-5deg]">
              <img
                src={moodboard[4]}
                alt=""
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>

            {/* CENTER TEXT */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[620px]">

              <p className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.08em] font-black uppercase text-[#111] text-center">
                Strong bodies are built through
                <span className="text-[#fc5200]"> consistent effort.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS MINDSET */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">

        <div className="max-w-[1500px] mx-auto rounded-xl overflow-hidden bg-[#111] text-white">

          <div className="grid lg:grid-cols-2 gap-10 p-6 sm:p-10 lg:p-16 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.24em] text-[11px] text-[#fc5200] font-semibold mb-5">
                Stroq Philosophy
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-[-0.06em] leading-[0.95] font-semibold">
                Fitness should feel focused,
                intentional, and motivating.
              </h2>

              <p className="mt-8 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Every page inside Stroq is designed around athlete behavior:
                generating workouts quickly, understanding recovery, improving
                nutrition habits, and staying consistent without confusion.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: Dumbbell,
                  title: "Workout Systems",
                  text: "Structured workout generation focused on practical training splits.",
                },
                {
                  icon: HeartPulse,
                  title: "Recovery Focus",
                  text: "Hydration, recovery, and sleep treated as core performance tools.",
                },
                {
                  icon: Brain,
                  title: "Fitness Education",
                  text: "Simple guidance that helps users make better training decisions.",
                },
                {
                  icon: Trophy,
                  title: "Sports Mentality",
                  text: "Inspired by discipline, athlete routines, and performance culture.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#fc5200] flex items-center justify-center text-white mb-5">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">

        <div className="max-w-[1500px] mx-auto">

          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-10 items-end">

            <div>

              <p className="uppercase tracking-[0.24em] text-[11px] text-[#fc5200] font-semibold mb-6">
                Final Vision
              </p>

              <h2 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.08em] font-black uppercase">
                More than workouts.
                <br />
                A platform built around
                <span className="text-[#fc5200]"> athletic consistency.</span>
              </h2>
            </div>

            <div className="lg:pl-10">

              <div className="rounded-xl bg-white border border-black/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-12 h-12 rounded-xl bg-[#111] text-white flex items-center justify-center">
                    <Flame size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-[#777]">
                      Built by
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      Abhishek Mahara
                    </h3>
                  </div>
                </div>

                <p className="text-[#555] leading-relaxed text-base sm:text-lg">
                  Stroq combines premium sports aesthetics,
                  structured fitness thinking, and modern frontend design
                  into a focused digital fitness experience.
                </p>

               
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;