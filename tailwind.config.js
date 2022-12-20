module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#fd3d57",
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
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
        "fade-left": {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        "fade-right": {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        'fade-rotate': {
          "0%": { opacity: 0, transform: "rotate(-90deg)" },
          "100%": { opacity: 1, transform: "rotate(0)" }
        },
        'fade-rotate-right': {
          "0%": { opacity: 0, transform: "rotate(180deg)" },
          "100%": { opacity: 1, transform: "rotate(0)" }
        },
        "fade-left2": {
          "0%": { opacity: 0, transform: "translateX(-240px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        'fade-scale': {
          "0%": {
            visibility: "visible",
            opacity: 0, transform: "scale(0)"
          },

          "100%": {

            opacity: 1, transform: "scale(1)"
          }
        },

      },
      animation: {
        wiggle: "wiggle 1000ms ease-in-out",
        fade: "fade 200ms ease-in-out",
        "fade-down": "fade-down 200ms ease-in-out",
        "fade-left": "fade-left 200ms ease-in-out",
        "fade-right": "fade-right 200ms ease-in-out",
        'fade-rotate': 'fade-rotate 200ms ease-in-out',
        'fade-rotate-right': 'fade-rotate-right 200ms ease-in-out',
        'fade-scale': 'fade-scale 200ms ease-in-out',
        'fade-left2': 'fade-left2 300ms ease-in-out',

      },
      backgroundImage: {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    }
  },
}

