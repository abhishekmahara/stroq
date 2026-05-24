import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] overflow-hidden">

      <div className="relative overflow-hidden bg-black">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">

          {/* LEFT ORANGE */}
          <div className="absolute left-[-5%] bottom-[-10%] w-[420px] h-[350px] bg-[#fc5200] blur-[130px] opacity-55" />

          {/* CENTER RED */}
          <div className="absolute left-[35%] bottom-[-12%] w-[420px] h-[320px] bg-red-600 blur-[120px] opacity-40" />

          {/* RIGHT GOLD */}
          <div className="absolute right-[-5%] bottom-[-10%] w-[420px] h-[320px] bg-orange-300 blur-[130px] opacity-50" />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-between">

          {/* TOP AREA */}
          <div className="grid lg:grid-cols-3 gap-10 p-6 sm:p-8 lg:p-12">

            {/* LEFT NAV */}
            <div>

              <div className="flex flex-col gap-2">

                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition w-fit"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-white transition w-fit"
                >
                  About
                </Link>

                <Link
                  to="/nutrition"
                  className="text-sm text-gray-300 hover:text-white transition w-fit"
                >
                  Nutrition
                </Link>

                <Link
                  to="/generator"
                  className="text-sm text-gray-300 hover:text-white transition w-fit"
                >
                  Workout Generator
                </Link>

              

                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-white transition w-fit"
                >
                  Contact
                </Link>
              </div>

             
            </div>

            {/* CENTER */}
            <div className="text-center">

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                Developer
              </p>

              <p className="text-sm text-gray-300 leading-relaxed max-w-[260px] mx-auto">
                Frontend developer focused on sports-inspired
                digital experiences and premium UI systems.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center justify-center gap-2 mt-8">

                <a
                  href="https://www.linkedin.com/in/abhishekmahara/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#fc5200] transition"
                >
                  <FaLinkedin size={14} />
                </a>

                <a
                  href="https://x.com/abhishekmahara_"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#fc5200] transition"
                >
                  <FaXTwitter size={14} />
                </a>

                <a
                  href="https://github.com/abhishekmahara"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#fc5200] transition"
                >
                  <FaGithub size={14} />
                </a>
              </div>

             
            </div>

            {/* RIGHT */}
            <div className="lg:text-right lg:ml-auto">

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                Stroq Theme
              </p>

              <p className="text-sm text-gray-300 leading-relaxed max-w-[240px] lg:ml-auto">
                Sports-inspired fitness experiences with modern
                frontend craftsmanship.
              </p>

           
            </div>
          </div>

          {/* HUGE LOGO */}
          <div className="relative px-4 sm:px-8 lg:px-14 pb-4">

            <h1 className="text-[5rem] sm:text-[9rem] lg:text-[12rem] xl:text-[16rem] font-semibold tracking-[-0.1em] leading-none text-[#f3ece8] select-none">
              STROQ
              <span className="font-normal text-[#f3ece8] italic">
                Fitness
              </span>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;