/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      background: '#090017',
      navigation_links: '#3232325c',
      navigation_box_shadow: '#0c0754',
      primary: '#150435',
      outline: '#4017d3',
    },
    cursor: {
      'default': 'url(/cursor-default.png), default',
    }
  },
};
export const plugins = [];
