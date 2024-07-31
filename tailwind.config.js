/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

import colors from "tailwindcss/colors";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    black:'#121212',
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#eff0f6",
    "gray-light": "#d3dce6",
    fontGray: "#19114a",
    textGrey: "#6f6c8f",
    buttonColor: "#175bb5",
    resumeColor: "#3e323e",
    textResume: "#ffffff",
    navBar: "#b7b7a4",
    black: "#00000",
    ...colors,
    bgBlack: "#292929",
  },
  extend: {},
};
export const plugins = [];