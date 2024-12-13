import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
  			nanumMyeongjo: ["var(--font-Nanum_Myeongjo)"],
        anton: ["var(--font-anton)"],
        edu: ["var(--font-edu)"],
  		
      },
      colors: {
        //Dark color schemes
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        primary: {
          light: "#FAFAFA",
          dark: "#212121",
        },
        secondary:{
          light: "#F5F5F5",
          dark: "#424242",
        },
        tertiary: {
          light: "#EEEEEE",
          dark: "#454444",
        },
        quaternary: {
          light: "#E0E0E0",
          dark: "#616161",
        },
        BrandMain:{
          light: "#FFFDB8",
          dark: "#3C320A",
        },
        BrandPrimary:{
          light: "#FBE58D",
          dark: "#403406",
        },
        BrandSecondary:{
          light: "#F3D594",
          dark: "#5A4C10",
        },
        BrandTertiary: {
          light: "#E7D27D",
          dark: "#786515",
        },
        BrandFancy: {
          light: "#E9E0D2",
          dark: "#F7EF8A",
        },
        BrandQuaternary: {
          light: "#9B9B9B",
          dark: "#F7EF8A",
        },
        TextMain: {
          light: "#28231D",
          dark: "#FAFAFA",
        },
        TextPrimary: {
          light: "#171717",
          dark: "#ffffff",
        },
        TextSecondary: {
          light: "#828282",
          dark: "#cccccc",
        },
        TextTertiary: {
          light: "#b3b3b3",
          dark: "#636363",
        },
        TextLink:{
          light: "#4A90E2",
          dark: "#1E90FF",
        },
        TextHover: {
          light: "#2366FF",
          dark: "#007bff",
        },
        TextDisabled: {
          light: "#cccccc",
          dark: "#DAC471",
        },
        TextFancy: {
          light: "#FFB300",
          dark: "#FF8C00",
        },
        TextFancyHover: {
          light: "#FFA500",
          dark: "#FF7F00",
        }
      },
      screens: {
        xs: "275px", 
        sm: "350px", 
        md: "768px", 
        lg: "1024px",
        xl: "1280px", 
        "2xl": "1536px",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }  
    },
  },
  plugins: [],
} satisfies Config;
