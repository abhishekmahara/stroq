import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

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
  const [guideOpen, setGuideOpen] = useState(false);
  const dropdownRef = useRef(null);

  const guideActive = location.pathname.includes("/guides");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setGuideOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition-all duration-300 hover:text-orange-600 ${
      isActive ? "text-orange-600" : "text-[#43423F]"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="shrink-0"
        >
          <img
            src="/assets/stroqnewlogoo.png"
            alt="STROQ"
            className="h-7 sm:h-8 w-auto"
          />
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-3 sm:gap-6 text-[13px] sm:text-[15px] font-medium">

          <NavLink to="/generator" className={navLinkClass}>
            Generator
          </NavLink>

          {/* GUIDE */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => window.innerWidth >= 768 && setGuideOpen(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setGuideOpen(false)}
          >
            <button
              type="button"
              onClick={() => setGuideOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 transition-all duration-300 hover:text-orange-600 ${
                guideActive ? "text-orange-600" : "text-[#43423F]"
              }`}
            >
              <span>Guide</span>

              <span
                className={`text-[10px] transition-transform duration-300 ${
                  guideOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`absolute right-0 top-11 w-52 rounded-xs border border-black/5 bg-white shadow-xl p-2 transition-all duration-200 ${
                guideOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              {guideLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setGuideOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xs px-4 py-3 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "text-black hover:bg-neutral-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;