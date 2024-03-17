import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  safelist: [
    "animate-fadeIn-0",
    "animate-fadeIn-1",
    "animate-fadeIn-2",
    "animate-fadeIn-3",
    "animate-fadeIn-4",
    "animate-fadeIn-5",
    "animate-fadeIn-6",
    "animate-fadeIn-7",
    "animate-fadeIn-8",
    "animate-fadeIn-9",
    "animate-fadeIn-10",
    "animate-fadeIn-11",
    "animate-fadeIn-12",
    "animate-fadeIn-13",
    "animate-fadeIn-14",
    "animate-fadeIn-15",
    "text-gray-200",
  ],
  theme: {
    extend: {
      animation: {
        downToTop: "downToTop 50.5s linear infinite",
        fadeIn: "fadeIn 1.5s ease-in-out 0.5s forwards",
        "fadeIn-0": "fadeIn 1.5s ease-in-out 0.5s forwards",
        "fadeIn-1": "fadeIn 1.5s ease-in-out 1s forwards",
        "fadeIn-2": "fadeIn 1.5s ease-in-out 1.5s forwards",
        "fadeIn-3": "fadeIn 1.5s ease-in-out 2s forwards",
        "fadeIn-4": "fadeIn 1.5s ease-in-out 2.5s forwards",
        "fadeIn-5": "fadeIn 1.5s ease-in-out 3s forwards",
        "fadeIn-6": "fadeIn 1.5s ease-in-out 3.5s forwards",
        "fadeIn-7": "fadeIn 1.5s ease-in-out 4s forwards",
        "fadeIn-8": "fadeIn 1.5s ease-in-out 4.5s forwards",
        "fadeIn-9": "fadeIn 1.5s ease-in-out 5s forwards",
        "fadeIn-10": "fadeIn 1.5s ease-in-out 5.5s forwards",
        "fadeIn-11": "fadeIn 1.5s ease-in-out 6s forwards",
        "fadeIn-12": "fadeIn 1.5s ease-in-out 6.5s forwards",
        "fadeIn-13": "fadeIn 1.5s ease-in-out 7s forwards",
        "fadeIn-14": "fadeIn 1.5s ease-in-out 7.5s forwards",
        "fadeIn-15": "fadeIn 1.5s ease-in-out 8s forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        // downToTop: {
        //   from: {
        //     transform: "translate(0, 0);",
        //   },
        //   to: {
        //     transform: "translate(0, -2545px);",
        //   },
        // },
      },
    },
  },
} satisfies Config;
