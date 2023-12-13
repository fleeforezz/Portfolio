/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      background: '#fffff',
      navigation_links: '#3232325c',
      navigation_box_shadow: '#CFCFCF',
      primary: '#150435',
      outline: '#4017d3',
      project_outline: '#140049',
    },
    cursor: {
      // 'default': 'url(/cursor-default.png), default',
    }
  },
};
export const plugins = [];
