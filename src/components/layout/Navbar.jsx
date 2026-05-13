import { Link } from "react-router-dom";

const guideLinks = [
  { label: "Nutrition Guide", to: "/guides/nutrition" },
  { label: "Workout Guide", to: "/guides/workout" },
];

const Navbar = () => {
  return (
    <nav className="w-full z-50 fixed bg-white/95 backdrop-blur-sm ">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 sm:px-8 lg:px-15 py-4">
        <Link
          to="/"
          className="uppercase font-bold text-xl tracking-wide sm:text-xl md:text-2xl"
        >
          <img src="/assets/logostroq.png" alt="STROQ" className="h-8 w-auto" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-[#43423F] font-medium text-sm sm:text-base">
          <Link to="/generator" className="hover:text-orange-600 transition">
            Generator
          </Link>

          <div className="relative group">
            <button
              type="button"
              className="hover:text-orange-600 transition flex items-center gap-1"
            >
              Guide
              <span className="text-xs">v</span>
            </button>

            <div className="absolute right-0 top-8 w-44 rounded-lg border border-black/10 bg-white p-2 opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {guideLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-black hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="hover:text-orange-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


