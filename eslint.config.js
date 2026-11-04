import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules"] },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module", globals: globals.browser },
  },
  { files: ["eslint.config.js"], languageOptions: { globals: globals.node } },
];
