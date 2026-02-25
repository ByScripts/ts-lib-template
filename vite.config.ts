import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

import { resolve } from "node:path";

export default defineConfig({
  plugins: [dts()],
  build: {
    sourcemap: true,
    lib: {
      formats: ["es"],
      entry: resolve(import.meta.dirname, "src/main.ts"),
      fileName: "main",
    },
  },
});
