import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules", "build"],
    languageOptions: {
    parser: tsparser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
      project: "./tsconfig.json",
      sourceType: "module"
    },
    globals: {
      browser: true,
      node: true,
      document: true,
      describe: true,
      test: true,
      expect: true
    }
  },

    plugins: {
      react,
      prettier,
      "@typescript-eslint": tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
