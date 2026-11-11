import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: "js",
    emptyOutDir: false,
    lib: {
      entry: fileURLToPath(new URL("./src/main.jsx", import.meta.url)),
      name: "StudyPlanner",
      formats: ["es"],
      fileName: () => "app.js",
      cssFileName: "app",
    },
    rollupOptions: {
      output: {
        entryFileNames: "app.js",
        assetFileNames: (asset) =>
          asset.name && asset.name.endsWith(".css")
            ? "app.css"
            : "assets/[name]-[hash][extname]",
      },
    },
    copyPublicDir: false,
  },
  root: projectRoot,
});
