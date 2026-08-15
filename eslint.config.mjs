import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local build/deploy artifacts:
    ".vercel/**",
    ".wrangler/**",
  ]),
  {
    rules: {
      // Content-heavy marketing copy relies on raw quotes/apostrophes in JSX.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
