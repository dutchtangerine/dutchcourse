import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dutchtangerine.github.io",
  base: "/dutchcourse",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
