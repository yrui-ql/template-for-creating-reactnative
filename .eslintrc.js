module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@react-native-community",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["prettier"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/consistent-type-definitions": "error",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "no-console": 1,
  },
  settings: {
    react: { version: "detect" },
    "import/ignore": ["react-native"],
    "import/resolver": {
      "babel-module": {},
    },
    "prettier/prettier": [2, {}, { usePrettierrc: true }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "last",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: ["!.*", "dist", "node_modules", "lib"],
}
