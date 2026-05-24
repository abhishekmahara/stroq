import { Link, NavLink, useLocation } from "react-router-dom";

const guideLinks = [
  {
    label: "Nutrition Guide",
    to: "/guides/nutrition",
  },

  {
    label: "Workout Guide",
    to: "/guides/workout",
  },
];

const Navbar = () => {
  const location = useLocation();

  const guideActive = location.pathname.includes("/guides");

  const navLinkClass = ({ isActive }) =>
    `relative transition-all duration-300 hover:text-orange-600 ${
      isActive ? "text-orange-600" : "text-[#43423F]"
    }`;

  return (
    <nav className="w-full z-50 fixed top-0 bg-white/90 backdrop-blur-xl">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center px-6 sm:px-8 lg:px-13 py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="uppercase font-bold tracking-wide sm:text-xl md:text-2xl shrink-0"
        >
          <img
            src="/assets/stroqnewlogoo.png"
            alt="STROQ"
            className="h-8 w-auto"
          />
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-5 sm:gap-7 font-medium text-sm sm:text-[15px]">
          {/* GENERATOR */}
          <NavLink to="/generator" className={navLinkClass}>
            <span className="relative">
              Generator
            </span>
          </NavLink>

          {/* GUIDE */}
          <div className="relative group">
            <button
              type="button"
              className={`flex items-center gap-2 transition-all duration-300 hover:text-orange-600 ${
                guideActive ? "text-orange-600" : "text-[#43423F]"
              }`}
            >
              <span className="relative">
                Guide
              </span>

              <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </button>

            {/* DROPDOWN */}
            <div className="absolute right-0 top-12 w-56 rounded-md border border-black/5 bg-white/95 backdrop-blur-xl p-2 space-y-2 opacity-0 invisible translate-y-2 transition-all duration-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {guideLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => document.activeElement.blur()}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-md px-4 py-3 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#111] text-white"
                        : "text-[#111] hover:bg-neutral-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <NavLink to="/contact" className={navLinkClass}>
            <span className="relative">
              Contact
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;