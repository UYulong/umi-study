import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    { path: "/", component: "index", name: 'Home' },
    { path: "/docs", component: "docs", name: 'Docs' },
    { path: '/products', component: 'products', name: 'Products' }
  ],
  npmClient: 'pnpm',
});
