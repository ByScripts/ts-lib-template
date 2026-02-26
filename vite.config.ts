import { resolve } from "node:path";

import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [dts({ exclude: ["**/*.test.ts"] })],
  build: {
    sourcemap: true,
    lib: {
      formats: ["es"],
      entry: resolve(import.meta.dirname, "src/main.ts"),
      fileName: "main",
    },
  },
});
