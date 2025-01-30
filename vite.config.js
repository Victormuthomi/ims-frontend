import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow access from external network
    port: process.env.PORT || 5173,
    proxy: {
      "/api": "https://ims-r6pm.onrender.com", // Proxy API requests to Render backend
    },
  },
  plugins: [react()],
});
