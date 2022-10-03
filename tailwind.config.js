module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        fade: {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 }
        },
        "fade-down": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },

      },
      animation: {
        wiggle: "wiggle 1000ms ease-in-out",
        fade: "fade 200ms ease-in-out",
        "fade-down": "fade-down 200ms ease-in-out"
      }
    }
  },
  plugins: [],
}