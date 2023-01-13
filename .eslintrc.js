module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: ["import", "@typescript-eslint", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/order": "off",
    "prettier/prettier": 2,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "no-console": 0,
    "react/no-unescaped-entities": 0,
    "ban-ts-ignore": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    // "sort-keys": [1, "asc", { "caseSensitive": true, "natural": false, "minKeys": 2 }],
    "no-case-declarations": 0,
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off"
  }
};
