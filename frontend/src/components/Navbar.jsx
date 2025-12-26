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
  );
}
