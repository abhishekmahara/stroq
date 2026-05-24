import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <main className="bg-white text-[#111] overflow-hidden">
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-[1500px] mx-auto">
          {/* TOP */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start mb-24">
            {/* LEFT */}
            <div>
              <p className="text-orange-600 text-[11px] uppercase tracking-[0.22em] font-semibold mb-6">
                STROQ FITNESS
              </p>

              <h1 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.88] tracking-[-0.07em] font-semibold max-w-[10ch]">
                We Build Performance- Driven Fitness Experiences.
              </h1>
            </div>

            {/* RIGHT */}
            <div className="lg:pt-16">
              <p className="text-[#666] text-base sm:text-lg leading-relaxed max-w-sm">
                Reach out for workout systems, athlete performance support,
                recovery guidance, and customized fitness strategies.
              </p>
            </div>
          </div>

          {/* PROJECT STYLE CARDS */}
          <div className="relative flex gap-5 overflow-x-auto pb-6 mb-28 no-scrollbar">
            {/* CARD 1 */}
            <div className="min-w-[280px] sm:min-w-[320px]">
              <div className="relative h-[420px] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="/assets/gen5.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="mt-5">
                <p className="text-xs text-[#888] mb-2">Personalized</p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  Workout Systems
                </h3>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="min-w-[280px] sm:min-w-[320px] mt-16">
              <div className="relative h-[420px] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="/assets/gen6.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="mt-5">
                <p className="text-xs text-[#888] mb-2">Athlete Focused</p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  Strength Coaching
                </h3>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="min-w-[320px] sm:min-w-[380px]">
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src="/assets/np.jpg"
                  alt=""
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs text-[#888] mb-2">Elite Coaching</p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  Performance Transformation
                </h3>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
            {/* LEFT */}
            <div>
              <p className="text-orange-600 text-[11px] uppercase tracking-[0.22em] font-semibold mb-6">
                // SERVICES
              </p>

              <h2 className="text-3xl sm:text-5xl leading-[0.95] tracking-[-0.05em] font-semibold max-w-[12ch]">
                Helping athletes turn consistency into results.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-3 gap-10">
              {/* ITEM */}
              <div>
                <p className="text-[#999] text-sm mb-5">/01</p>

                <h3 className="text-3xl font-semibold tracking-tight mb-4">
                  Workout
                </h3>

                <p className="text-[#666] leading-relaxed">
                  Goal-based training plans designed for long-term progression.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <p className="text-[#999] text-sm mb-5">/02</p>

                <h3 className="text-3xl font-semibold tracking-tight mb-4">
                  Nutrition
                </h3>

                <p className="text-[#666] leading-relaxed">
                  Structured nutrition guidance built around performance goals.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <p className="text-[#999] text-sm mb-5">/03</p>

                <h3 className="text-3xl font-semibold tracking-tight mb-4">
                  Recovery
                </h3>

                <p className="text-[#666] leading-relaxed">
                  Recovery systems focused on sustainability and athletic
                  output.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="mt-32 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
            {/* LEFT */}
            <div>
              <p className="text-orange-600 text-[11px] uppercase tracking-[0.22em] font-semibold mb-6">
                Contact
              </p>

              <h2 className="text-4xl sm:text-6xl leading-[0.9] tracking-[-0.06em] font-semibold max-w-[8ch]">
                Let’s Build Your Strongest Version.
              </h2>
            </div>

            {/* RIGHT */}
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-black/10 pb-5 outline-none text-lg placeholder:text-[#888]"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-black/10 pb-5 outline-none text-lg placeholder:text-[#888]"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-black/10 pb-5 outline-none text-lg placeholder:text-[#888]"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your fitness goals..."
                className="w-full border-b border-black/10 pb-5 outline-none text-lg resize-none placeholder:text-[#888]"
              />

              <div className="flex items-center justify-between gap-6 pt-6 flex-wrap">
                {/* SOCIALS */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://x.com/abhishekmahara_"
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <FaXTwitter size={16} />
                  </a>

                  <a
                    href="https://github.com/abhishekmahara"
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <FaGithub size={16} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abhishekmahara/"
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin size={16} />
                  </a>
                </div>

                {/* BUTTON */}
                <button className="h-14 px-8 rounded-xl bg-orange-600 hover:bg-black transition-all duration-300 text-white font-medium flex items-center gap-3">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
