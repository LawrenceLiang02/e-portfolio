import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poetsen': ['Poetsen One', 'sans-serif'],
        'open-sans':["'Open Sans'" , 'sans-serif'],
        'titillium-web':["'Titillium Web'" , 'sans-serif'],
        'league-spartan':["'League Spartan'" , 'sans-serif'],
        'exo-2':["'Exo 2'" , 'sans-serif'],
        'sedan':["'Sedan SC'" , 'sans-serif'],
        'rubik':["'Rubik Mono One'" , 'sans-serif'],
        'roboto':["'Roboto'" , 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
