import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between z-50 fixed items-center px-6 py-4 bg-white">
      <Link
        to="/"
        className="uppercase font-bold text-xl  tracking-wide sm:text-xl md:text-2xl "
      >
        <img
          src="public/assets/logostroq.png"
          alt="STROQ"
          className="h-8 w-auto"
        />
      </Link>

      <div className="flex gap-6 text-[#43423F] font-medium">
        <Link to="/generator" className="hover:text-orange-600 transition">
          Generator
        </Link>

       

        <Link to="/nutrition" className="hover:text-orange-600 transition">
          Nutrition
        </Link>
        
         <Link to="/contact" className="hover:text-orange-600 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
