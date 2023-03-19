/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        dark: {
          border: {
            light: "#ffffff1a",
          },
          background: {
            base: "#141324",
            neutral: "#24233D",
            primary: "#FFFFFF1A",
            secondary: "#7269F0",
            light: "#403E5C",
          },
          typography: {
            base: "#ffff",
            primary: "#fffffCCC",
            secondary: "#ffff",
            light: "#ffffff99",
            danger: "#7269F0",
          },
        },
        border: {
          light: "#28262C1a",
        },
        background: {
          base: "#fff",
          neutral: "#EfEfEf",
          primary: "#F4F4F4",
          secondary: "#6371FF",
          light: "#28262C0D",
        },
        typography: {
          base: "#28262C1",
          primary: "#28262CCC",
          secondary: "#ffff",
          light: "#28262C99",
          danger: "#6371FF",
        },
      },
      backgroundImage: {
        auth_screen: "url('/src/assets/images/auth_screen.jpg')",
        select_organization_wave:
          "url('/src/assets/svgs/select_workspace_wave.svg')",
        select_organization_wave_180:
          "url('/src/assets/svgs/select_workspace_wave_180.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        post: ["Mulish", "sans-serif"],
      },
    },
    keyframes: {
      "floating": {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-128px)" },
        "100%": { transform: "translateY(0)" },
      },
      "floating-2": {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-64px)" },
        "100%": { transform: "translateY(0)" },
      },
      "slide-in": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      "slide-in-right": {
        "0%": { transform: "translateX(200%)" },
        "100%": { transform: "translateX(0)" },
      },
      "slide-up": {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
      "fade-in": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      "fade-out": {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 }
      },
      "spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      "scale-up": {
        "0%": { transform: "scaleY(0.4)", transformOrigin: "100% 0%" },
        "100%": { transform: "scaleY(1)", transformOrigin: "100% 0%" }
      },
      "rotate-scale-up": {
        "0%": { transform: "scale(1) rotateZ(0)" },
        "50%": { transform: " scale(1.1) rotateZ(180deg)" },
        "100%": { transform: "scale(1) rotateZ(360deg)" }
      },
      "pulse": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 }
      },
      'fade-up': {
        '0%': { opacity: 0, transform: 'translateY(36px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      "fade-up": 'fade-up 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
      "floating-2": "floating-2 7s ease-in-out infinite",
      "floating": "floating 9s ease-in-out infinite",
      "slide-in": "slide-in 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-in-left": "slide-in 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-in-right": "slide-in-right 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-up": "slide-up 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "fade-in": "fade-in 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "fade-out": "fade-out 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "spin": "spin 1s linear infinite",
      "scale-up": "scale-up 0.16s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      "switch-theme": "rotate-scale-up 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      "pulse": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    boxShadow: {
      "custom": "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-inner-border"),
  ],
};
