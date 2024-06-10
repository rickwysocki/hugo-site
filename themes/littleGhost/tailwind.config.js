/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Karla', 'sans-serif'],
        'serif': ['Inconsolata', 'serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
