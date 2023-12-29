/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
];
export const theme = {
  extend: {
    colors: {
    },
    cursor: {
      'default': 'url(/dot-outline-fill.svg), default',
    }
  },
};
export const plugins = [];
