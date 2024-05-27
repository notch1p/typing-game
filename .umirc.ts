import { defineConfig } from "umi";

export default defineConfig({
  base: "/typing-game",
  publicPath: "/typing-game/",
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
