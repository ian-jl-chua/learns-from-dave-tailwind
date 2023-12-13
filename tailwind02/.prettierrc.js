module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["**/*.html"],
      options: {
        parser: "html",
        plugins: ["prettier-plugin-tailwindcss"],
      },
    },
  ],
};
