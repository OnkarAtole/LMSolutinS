export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            LM Software Solutions
          </h3>
          <p className="text-sm">
            Engineering scalable, secure, and high-performance digital solutions
            for modern businesses.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact
          </h4>
          <p className="text-sm">Email: contact@lmsoftware.com</p>
          <p className="text-sm">Location: India</p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} LM Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}
