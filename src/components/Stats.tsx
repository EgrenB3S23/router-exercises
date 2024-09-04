import { ReactElement } from "react";
// import { useOutletContext } from "react-router-dom";

export function Stats(): ReactElement {
	// const [currentSubPage] = useOutletContext();

	return (
		<main className="stats-component component">
			<h2 className="heading">Stats</h2>
			<div className="description">
				<p>Lorem ipsum dolor sit amet.</p>
				<img src="/src/assets/population-pyramid-of-Sweden-1706527783.png" alt="bar-chart" />
			</div>
		</main>
	);
}
