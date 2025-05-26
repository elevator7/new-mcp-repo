import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from package.json or environment variables
const getRepoName = () => {
  // Use environment variable in CI/CD if available
  if (process.env.REPOSITORY_NAME) {
    return '/' + process.env.REPOSITORY_NAME + '/';
  }
  // Default to '/new-mcp-repo/'
  return '/new-mcp-repo/';
};

export default defineConfig({
  base: getRepoName(), // Dynamic base path for GitHub Pages static deploy
  plugins: [react()],
  // Add build optimization options
  build: {
    minify: 'terser',
    sourcemap: false,
    cssCodeSplit: false,
    // Reduce chunk size for better loading performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material']
        }
      }
    }
  }
});