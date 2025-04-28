import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [
      react(),
      Sitemap({ hostname: "https://camping-kshurta.ru" }),
    ],
    base:
      env.VITE_NODE_ENV === "production" ? "/camping-kshurta-frontend" : "/",
  };
});
