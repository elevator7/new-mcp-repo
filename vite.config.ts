import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/new-mcp-repo/', // REQUIRED for GitHub Pages static deploy
  plugins: [react()],
});
