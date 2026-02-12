import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  // better-sqlite3に合わせてcjs
  format: "cjs",
  platform: "node",
  noExternal: [/.*/],
  external: ["better-sqlite3"],
});
