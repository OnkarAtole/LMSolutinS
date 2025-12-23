/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#2563EB",   // clean blue
      secondary: "#0F172A", // dark navy (header/footer)
      background: "#F8FAFC", // light page background
      muted: "#64748B",     // muted text
    },
  },
},

};
