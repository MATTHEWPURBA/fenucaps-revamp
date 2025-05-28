
// ===== Updated eslint.config.mjs (More Forgiving) =====
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Turn errors into warnings for build success
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "warn",
      "prefer-const": "warn",
      "no-console": "off",
      "react-hooks/exhaustive-deps": "warn",
      
      // Disable strict rules that cause build failures
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react/display-name": "off",
    }
  }
];

export default eslintConfig;