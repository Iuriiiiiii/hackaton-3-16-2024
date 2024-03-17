import { defineConfig, RenderFunction } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// static approach
const renderFn: RenderFunction = (ctx, render) => {
  ctx.lang = "en-Es";
  render();
};

export default defineConfig({
  plugins: [tailwind()],
  render: renderFn,
});
