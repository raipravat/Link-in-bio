import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/Link-in-bio/", // Replace with your GitHub repo name
  plugins: [react()],
});