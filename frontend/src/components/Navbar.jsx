
import { useState } from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `
    relative pb-1 block

    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px]
    after:transition-all after:duration-300

    ${
      isActive
        ? "after:w-full after:bg-blue-500"
        : "after:w-0 after:bg-white hover:after:w-full"
    }
    `;

  return (
    <>
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

    <nav className="fixed top-0 left-0 z-50 w-full bg-secondary">
      {/* Top bar */}
      <div className="h-16 flex justify-between items-center px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="LMSoftware logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-2xl text-gray-200 tracking-wide font-semibold">
            LMSoftware
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-200 font-medium">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/why-choose-us" className={navLinkClass}>
            Why Choose Us
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/insights" className={navLinkClass}>
            Insights
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-8 pb-6 flex flex-col gap-4 text-gray-200 font-medium bg-secondary">
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/why-choose-us"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Why Choose Us
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/careers"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Careers
          </NavLink>
          <NavLink
            to="/insights"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Insights
          </NavLink>
        </div>
      )}
    </nav>
    </>
  );
}
