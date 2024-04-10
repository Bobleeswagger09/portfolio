import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        bodyBg: "#0F103F",
        secondary: "#0f98fa",
        primary: "#1C1C65",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        btnShad: "0px 10px 20px 0px rgba(8, 12, 33, 0.15)",
      },
      fontFamily: {
        styleFont: "'Rubik Maps', cursive",
      },
      screens: {
        tab: "900px",
      },
    },
  },
  plugins: [],
}
export default config
