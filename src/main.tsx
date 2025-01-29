import "@/styles/main.scss";
import "@/styles/tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
