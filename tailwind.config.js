/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        "app-black": "#101010",
        "app-green": "#BADB4D",
        "app-red": "#EB5757",
        "app-gray": "rgba(255, 255, 255, 0.80)",
      },
      fontFamily: {
        "saira-medium": "SairaMedium",
        "saira-semibold": "SairaSemiBold",
        "saira-bold": "SairaBold",
      },
    },
  },
  plugins: [],
};
