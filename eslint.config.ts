import { defineConfig } from "eslint/config";
import tsConfig from "@byscripts/eslint-config/typescript";

export default defineConfig({
  files: ["src/**/*.ts"],
  extends: [tsConfig],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
});
