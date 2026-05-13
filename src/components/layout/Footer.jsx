import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialLink from "../common/SocialLink";

const Footer = () => {
  return (
    <footer className="w-full mt-auto  bg-white/5 backdrop-blur-2xl border-t border-white/10 px-6 py-10 rounded-t-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <Link
            to="/"
            className="uppercase font-bold text-xl  tracking-wide sm:text-xl md:text-2xl "
          >
            <img
              src="/assets/logostroq.png"
              alt="STROQ"
              className="h-8 w-auto"
            />
          </Link>

          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Stroq helps you generate personalized workouts based on your fitness
            goals, targeted muscle groups, and training split. Train smarter and
            build consistency.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#43423F] mb-3">Navigation</h3>

          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <Link to="/" className="hover:text-[#43423F] transition">
              Home
            </Link>

            <Link to="/generator" className="hover:text-[#43423F] transition">
              Workout Generator
            </Link>

            <Link
              to="/guides/nutrition"
              className="hover:text-[#43423F] transition"
            >
              Nutrition Guide
            </Link>

            <Link
              to="/guides/workout"
              className="hover:text-[#43423F] transition"
            >
              Workout Guide
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#43423F] mb-3">Follow</h3>

          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <SocialLink
              href="https://www.linkedin.com/in/abhishekmahara/"
              icon={FaLinkedin}
              label="LinkedIn"
              variant="text"
            />
            <SocialLink
              href="https://x.com/abhishekmahara_"
              icon={FaXTwitter}
              label="X"
              variant="text"
            />
            <SocialLink
              href="https://github.com/abhishekmahara"
              icon={FaGithub}
              label="GitHub"
              variant="text"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-3 text-sm text-gray-700">
        <p>&copy; {new Date().getFullYear()} Stroq. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

