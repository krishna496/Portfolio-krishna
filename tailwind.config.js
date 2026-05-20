/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDarker: "#050508",
        bgDark: "#0a0b10",
        bgCard: "rgba(16, 18, 27, 0.4)",
        bgCardHover: "rgba(22, 25, 38, 0.6)",
        borderGlow: "rgba(255, 255, 255, 0.08)",
        borderGlowHover: "rgba(255, 255, 255, 0.15)",
        accentPurple: "#8b5cf6",
        accentCyan: "#06b6d4",
        accentPink: "#ec4899",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      },
      animation: {
        'float-blob': 'floatBlob 20s infinite alternate ease-in-out',
        'float-element': 'floatElement 4s infinite alternate ease-in-out',
        'heartbeat': 'heartbeat 1.5s infinite',
      },
      keyframes: {
        floatBlob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -40px) scale(1.05)' },
          '100%': { transform: 'translate(-20px, 30px) scale(0.95)' },
        },
        floatElement: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.25)', opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
