module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        laos: {
          "primary": "#2DCC70",
          "secondary": "#FFFFFF",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
