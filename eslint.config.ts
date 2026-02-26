import tsConfig from "@byscripts/eslint-config/typescript";
import oxlint from "eslint-plugin-oxlint";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["src/**/*.ts"],
  extends: [tsConfig, oxlint.buildFromOxlintConfigFile(".oxlintrc.json")],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
});
