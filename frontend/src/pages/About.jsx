export default function About() {
  return (
    <>
      <div className="bg-[#0B1120] text-gray-300">
        {/* ================= ABOUT US ================= */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              About Us
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-4xl mb-14 text-lg">
              We are a Pune-based software company established in 2024,
              delivering scalable, secure, and high-performance digital
              solutions for businesses of all sizes. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/10 hover:border-cyan-400/40 transition">
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Our Mission
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our
                  mission is to empower organizations through innovative
                  technology solutions that drive growth, efficiency, and
                  long-term success.
                </p>
              </div>

              <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/10 hover:border-cyan-400/40 transition">
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Our Vision
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. We
                  envision becoming a trusted global technology partner known
                  for quality, integrity, and innovation.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
                What We Do
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Custom Software Development",
                  "Web & Mobile Applications",
                  "Cloud & DevOps Solutions",
                ].map((title, i) => (
                  <div
                    key={i}
                    className="bg-[#111827] p-6 rounded-2xl border border-blue-500/10 hover:border-cyan-400/40 transition"
                  >
                    <h3 className="font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT US ================= */}
        <section className="px-6 md:px-12 py-24 bg-[#020617]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out
              to us for business inquiries, partnerships, or technical support.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {/* Location */}
              <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/10 hover:border-cyan-400/40 transition text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto mb-4 text-cyan-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 6.018 8.25 11.25 8.25 11.25s8.25-5.232 8.25-11.25c0-4.556-3.694-8.25-8.25-8.25z"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Our Office
                </h3>
                <p className="text-gray-400 text-sm">
                  Pune, Maharashtra, India <br />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {/* Email */}
              <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/10 hover:border-cyan-400/40 transition text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto mb-4 text-cyan-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.832 1.742l-7.5 6a2.25 2.25 0 01-2.836 0l-7.5-6A2.25 2.25 0 012.25 6.993V6.75"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Email Us
                </h3>
                <p className="text-gray-400 text-sm">
                  contact@yourcompany.com <br />
                  support@yourcompany.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/10 hover:border-cyan-400/40 transition text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto mb-4 text-cyan-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38A12.035 12.035 0 015.48 9.87a1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.464 2.094a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 3.5v3.25z"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Call Us
                </h3>
                <p className="text-gray-400 text-sm">
                  +91 98765 43210 <br />
                  Mon – Fri, 9:30 AM – 6:30 PM
                </p>
              </div>
            </div>

            {/* Form + Map */}
            <div className="grid md:grid-cols-2 gap-12">
              <form className="bg-[#111827] p-10 rounded-2xl border border-blue-500/10 space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Send Us a Message
                </h3>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#020617] border border-blue-500/10 rounded-lg px-4 py-3 text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#020617] border border-blue-500/10 rounded-lg px-4 py-3 text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-[#020617] border border-blue-500/10 rounded-lg px-4 py-3 text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow-lg shadow-blue-600/30"
                >
                  Submit Message
                </button>
              </form>

              <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/10">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Visit Our Office
                </h3>
                <div className="w-full h-72 rounded-lg overflow-hidden">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
