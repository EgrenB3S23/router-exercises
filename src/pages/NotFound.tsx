import { ReactElement } from "react";

export function NotFound(): ReactElement {
	return (
		<main className="404-page page">
			<h2 className="heading">Page not found.</h2>
			<h1>Error 2^2*101</h1>
			<div className="description">
				<p>The page is in another castle.</p>
			</div>
		</main>
	);
}
