import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "540px" },
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        accent: {
          red: "#FF4800",
          blue: "#375FFF",
        },
        gray: {
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#C4C4C4",
          400: "#A0A0A0",
          450: "#818181",
          500: "#5D5D5D",
          600: "#474747",
          700: "#303030",
          800: "#27272A",
          900: "#1D1D1D",
        },
        filter: {
          pink: "#FF89BB",
          red: "#FF685F",
          orange: "#FF9F46",
          yellow: "#FFE03C",
          green: "#74D472",
          blue: "#79CAE4",
          beige: "#F6E9C9",
          brown: "#8D7360",
          kaki: "#4B734A",
          navy: "#3C72C2",
          purple: "#AA78DD",
        },
      },
      fontSize: {
        // Heading
        "h-0-bold": ["48px", { lineHeight: "140%", fontWeight: 700 }],
        "h-0-semibold": ["48px", { lineHeight: "140%", fontWeight: 600 }],
        "h-0-regular": ["48px", { lineHeight: "140%", fontWeight: 400 }],

        "h-1-bold": ["38px", { lineHeight: "140%", fontWeight: 700 }],
        "h-1-semibold": ["38px", { lineHeight: "140%", fontWeight: 600 }],
        "h-1-regular": ["38px", { lineHeight: "140%", fontWeight: 400 }],

        "h-2-bold": ["32px", { lineHeight: "140%", fontWeight: 700 }],
        "h-2-semibold": ["32px", { lineHeight: "140%", fontWeight: 600 }],
        "h-2-regular": ["32px", { lineHeight: "140%", fontWeight: 400 }],

        "h-3-bold": ["28px", { lineHeight: "140%", fontWeight: 700 }],
        "h-3-semibold": ["28px", { lineHeight: "140%", fontWeight: 600 }],
        "h-3-regular": ["28px", { lineHeight: "140%", fontWeight: 400 }],

        "h-4-bold": ["24px", { lineHeight: "140%", fontWeight: 700 }],
        "h-4-semibold": ["24px", { lineHeight: "140%", fontWeight: 600 }],
        "h-4-regular": ["24px", { lineHeight: "140%", fontWeight: 400 }],

        "h-5-bold": ["20px", { lineHeight: "140%", fontWeight: 700 }],
        "h-5-semibold": ["20px", { lineHeight: "140%", fontWeight: 600 }],
        "h-5-regular": ["20px", { lineHeight: "140%", fontWeight: 400 }],

        // Body
        "b-0-bold": ["18px", { lineHeight: "150%", fontWeight: 700 }],
        "b-0-semibold": ["18px", { lineHeight: "150%", fontWeight: 600 }],
        "b-0-regular": ["18px", { lineHeight: "150%", fontWeight: 400 }],

        "b-1-bold": ["16px", { lineHeight: "150%", fontWeight: 700 }],
        "b-1-semibold": ["16px", { lineHeight: "150%", fontWeight: 600 }],
        "b-1-regular": ["16px", { lineHeight: "150%", fontWeight: 400 }],

        "b-2-bold": ["14px", { lineHeight: "150%", fontWeight: 700 }],
        "b-2-semibold": ["14px", { lineHeight: "150%", fontWeight: 600 }],
        "b-2-regular": ["14px", { lineHeight: "150%", fontWeight: 400 }],

        "b-3-bold": ["12px", { lineHeight: "150%", fontWeight: 700 }],
        "b-3-semibold": ["12px", { lineHeight: "150%", fontWeight: 600 }],
        "b-3-regular": ["12px", { lineHeight: "150%", fontWeight: 400 }],
      },
    },
    fontFamily: { sans: "Poppins" },
    backgroundImage: {
      "hover-gradient":
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.35%, rgba(0, 0, 0, 0.60) 100%)",
    },
  },
  plugins: [],
};
export default config;
