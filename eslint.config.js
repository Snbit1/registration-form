import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        axios: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 12, // или 2021
        sourceType: "module",
      },
    },
    extends: [
      js.configs.recommended, // базовые правила ESLint
      prettier,               // отключает конфликты с Prettier
    ],
    rules: {
      'no-unused-vars': 'warn', // неиспользуемые переменные — предупреждение
      'no-console': 'off',      // console.log разрешен
      'linebreak-style': ['error', 'unix'], // ставим LF, а не CRLF
    },
  },
]);
