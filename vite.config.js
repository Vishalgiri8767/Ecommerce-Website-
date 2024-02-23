import { defineConfig } from 'vite'
// import { actionCreatorInvariantMiddleware } from '@reduxjs/toolkit';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
