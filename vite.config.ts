import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import ViteReact from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode, command }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const usePreact = env.VITE_USE_PREACT === "true";

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
				...(usePreact
					? {
							react: "preact/compat",
							"react-dom": "preact/compat",
						}
					: {}),
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
