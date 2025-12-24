import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 
      bg-white/70 dark:bg-[#0B1120]/70 
      backdrop-blur border-b border-gray-200 dark:border-blue-500/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          LM<span className="text-blue-600">Software</span>
        </NavLink>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Why Us", "/why-choose-us"],
            ["Insights", "/insights"],
            ["Careers", "/careers"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <NavLink
          to="/about"
          className="hidden md:inline-block px-6 py-2 rounded-full
            bg-blue-600 hover:bg-blue-700 text-white
            text-sm font-medium transition"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
}
