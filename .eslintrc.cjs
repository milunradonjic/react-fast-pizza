module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:react/recommended", "react-app", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn", // Prettier formatting warnings
    "react/react-in-jsx-scope": "off", // React 17+ doesn't require React in scope
    "react/prop-types": "off",
    "no-unused-vars": "warn", // Warn for unused variables
    "react/no-unescaped-entities": "warn", // Warn for unescaped entities in JSX
  },
};
