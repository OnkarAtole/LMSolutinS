import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-secondary">
      <h1 className="text-2xl font-bold text-white"> LMSoftware</h1>
      <div className="flex gap-6 text-gray-200 font-medium">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/why-choose-us">Why Choose Us</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/insights">Insights</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </div>
    </nav>
  );
}
