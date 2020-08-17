module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:vue/recommended",
    "airbnb-base",
    "prettier",
    "prettier/vue",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "comma-dangle": ["error", "never"],
    semi: ["error", "never"],
    "import/no-unresolved": "off",
    quotes: [2, "single", { avoidEscape: true }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".vue"],
      },
    },
  },
};
