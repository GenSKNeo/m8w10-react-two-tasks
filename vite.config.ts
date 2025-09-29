import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost", // local dev
      "127.0.0.1", // fallback
      "96gyq4-5173.csb.app", // add your sandbox host here
    ],
  },
});
