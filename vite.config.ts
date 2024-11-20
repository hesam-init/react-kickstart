import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import ViteReact from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ mode, command }) => {
	return {
		plugins: [
			ViteReact({}),
			TanStackRouterVite({
				generatedRouteTree: "./src/routes.tsx",
			}),
		],
		resolve: {
			alias: {
				"@": resolve("./src"),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
				},
			},
		},
		build: {
			minify: "esbuild",
		},
		optimizeDeps: {
			force: true,
		},
		preview: {
			host: "0.0.0.0",
			port: 2020,
			strictPort: false,
		},
		server: {
			host: "0.0.0.0",
			port: 3030,
			strictPort: false,
		},
	};
});
