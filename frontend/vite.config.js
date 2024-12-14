import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import du plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),          // Plugin React
    tsconfigPaths(),  // Plugin pour synchroniser les alias
  ],
  
});
