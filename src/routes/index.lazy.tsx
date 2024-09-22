import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: View,
});

function View() {
	return (
		<div>
			<h1 className="text-2xl">Hello World</h1>
		</div>
	);
}
