import { defineConfig } from "umi";
import routes from "./routes";
import defaultSettings from './defaultSettings'

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query', '@umijs/plugins/dist/antd', '@umijs/plugins/dist/layout'],
  reactQuery: {},
  antd: {

  },
  layout: {
    locale: false,
    ...defaultSettings
  },
  routes,
  npmClient: 'pnpm',
});