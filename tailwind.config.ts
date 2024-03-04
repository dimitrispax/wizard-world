import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-yellow',
    'from-green',
    'to-silver',
  ],
  theme: {
    fontFamily: {
      theme: ['var(--font-verdana)'],
    },
    extend: {
      colors: {
        aqua: '#00FFFF',
        black: '#000000',
        blue: '#0000FF',
        brown: '#A52A2A',
        cyan: '#00FFFF',
        gray: '#808080',
        green: '#008000',
        lime: '#00FF00',
        magenta: '#FF00FF',
        maroon: '#800000',
        navy: '#000080',
        olive: '#808000',
        orange: '#FFA500',
        purple: '#800080',
        red: '#FF0000',
        silver: '#C0C0C0',
        teal: '#008080',
        white: '#FFFFFF',
        yellow: '#FFFF00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
