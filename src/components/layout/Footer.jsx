import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full mt-auto  bg-white/5 backdrop-blur-2xl border-t border-white/10 px-6 py-10 rounded-t-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand Section */}
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

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-[#43423F] mb-3">Navigation</h3>

          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <Link to="/" className="hover:text-[#43423F] transition">
              Home
            </Link>

            <Link to="/generator" className="hover:text-[#43423F] transition">
              Workout Generator
            </Link>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-[#43423F] mb-3">Follow</h3>

          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <a
              href="https://www.linkedin.com/in/abhishekmahara/"
              className="hover:text-orange-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/abhishekmahara_"
              className="hover:text-orange-600 transition"
            >
              X
            </a>
            <a
              href="https://github.com/abhishekmahara"
              className="hover:text-orange-600 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-700">
        <p>© {new Date().getFullYear()} Stroq. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="src/components/pages/Contact.jsx"
            className="hover:text-[#43423F] transition"
          >
            Privacy
          </a>
          <a href="#" className="hover:text-[#43423F] transition">
            Terms
          </a>
          <a href="#" className="hover:text-[#43423F] transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
