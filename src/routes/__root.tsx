import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy } from "react";

const TanStackRouterDevtools = import.meta.env.DEV
	? lazy(() =>
			import("@tanstack/router-devtools").then((res) => ({
				default: res.TanStackRouterDevtools,
			})),
		)
	: () => null;

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}
