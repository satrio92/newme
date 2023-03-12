module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      text: {
        h1: {
          fontSize: "48px",
          fontWeight: "600",
          lineHeight: "64px"
        },
        h2: {
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "42px"
        },
        h4: {
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "32px"
        },
        h4: {
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "26px"
        },
        "body-dekstop": {
          fontSize: "15px",
          fontWeight: "600",
          lineHeight: "24px"
        },
        "body-mobile": {
          fontSize: "10px",
          fontWeight: "600",
          lineHeight: "20px"
        },
      },
      gradientColorStops: {
        'gd-green-01': {
          '100%': '#2DCC70',
          '100%': '#FFFFFF',
        },
        'gd-red-01': {
          '100%': '#EE7878',
          '100%': '#C6512C',
        },
      },
      colors: {
        primary: {
          "green-base": "#2DCC70",
          "green-light": "#C5FFDD"
        },
        secondary: {
          "yellow-base": "#FFCF3D",
          "yellow-light": "#FFF7DE"
        },
        alert: {
          success: "#2DCC70",
          warning: "#FFCF3D",
          error: "#DA2727"
        },
        neutrals: {
          "dark-01": "#27272F",
          "dark-02": "#94949C",
          "light-01": "#FFFFFF",
          "light-02": "#CFCFD4"
        },
        transparent: {
          "tr-dark-50": "rgba(0, 0, 0, 0.5)",
          "tr-light-90": "rgba(255, 255, 255, 0.9)",
          "tr-green-50": "rgba(0, 255, 25, 0.5)",
          "tr-green-70": "rgba(45, 204, 112, 0.7)"
        }
      },
    },
  },
  plugins: [],
}
