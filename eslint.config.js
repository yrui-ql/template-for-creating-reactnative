import globals from "globals"
import eslintPluginReact from "eslint-plugin-react"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: eslintPluginReact
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-trailing-spaces": 2,
      "no-console": 1
    }
  },
  eslintPluginPrettierRecommended
]
