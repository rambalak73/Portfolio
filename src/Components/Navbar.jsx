import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "underline font-bold text-yellow-500" : "";

  return (
    <nav className="flex justify-between items-center mx-auto top-[20px] backdrop-blur-md px-5 md:px-10 bg-[#2c3e5073] fixed rounded-full text-white shadow-lg w-full max-w-[1000px] left-0 right-0 z-50">
      <a href="/"
        className="font-extrabold font-serif text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:scale-110 transition-transform duration-300 ease-in-out"
        aria-label="SRV Home"
      >
        SRV
      </a>

      <ul className="flex gap-5 md:gap-7 items-center">
        <li className="hover:scale-110 hover:font-bold">
          <NavLink to="/home" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li className="hover:scale-110 hover:font-bold">
          <NavLink to="/skills" className={getNavLinkClass}>
            Skills
          </NavLink>
        </li>
        <li className="hover:scale-110 hover:font-bold">
          <NavLink to="/balak" className={getNavLinkClass}>
            Balak
          </NavLink>
        </li>
        <li className="hover:scale-110 hover:font-bold">
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
