import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ mode, command }) => {
	return {
		plugins: [
			react(),
			TanStackRouterVite({
				generatedRouteTree: "./src/routes.tsx",
			}),
		],
		resolve: {
			alias: {
				"@": resolve("./src"),
			},
		},
		clearScreen: false,
		build: {},
		server: {
			host: "0.0.0.0",
			port: 3000,
			strictPort: true,
		},
	};
});
