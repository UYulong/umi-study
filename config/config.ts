import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes,
  npmClient: 'pnpm',
});