export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22d3ee", // cyan-400
          dark: "#0891b2", // cyan-600
        },
        secondary: {
          DEFAULT: "#818cf8", // indigo-400
          dark: "#4f46e5", // indigo-600
        },
        dark: {
          DEFAULT: "#0f172a", // slate-900
          light: "#1e293b", // slate-800
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
