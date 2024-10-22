// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
const flatCompat = new FlatCompat();
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";

export default tseslint.config(
  ...fixupConfigRules(flatCompat.extends("next/core-web-vitals")),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      // react,
      "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "react/no-unknown-property": [
        "error",
        {
          ignore: ["css"],
        },
      ],

      "react/forbid-dom-props": [
        2,
        {
          forbid: ["css", "style"],
        },
      ],

      "react/forbid-component-props": [
        2,
        {
          forbid: ["css", "style"],
        },
      ],

      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",

      "max-len": [
        "error",
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        },
      ],

      "tailwindcss/classnames-order": 0,
      "tailwindcss/no-arbitrary-value": 2,
    },
  },
  ...tailwind.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
);
