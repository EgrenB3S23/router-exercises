import { ReactElement } from "react";
// import { useOutletContext } from "react-router-dom";

export function Settings(): ReactElement {
	// const [currentSubPage] = useOutletContext();

	return (
		<main className="settings-component component">
			<h2 className="heading">Settings</h2>
			<div className="description">
				<p>Lorem ipsum dolor sit amet.</p>
				<form className="flex-horizontal">
					<input type="radio" name="" id="temp1" />
					<input type="checkbox" name="" id="temp2" />
					<input type="color" name="" id="temp3" />
					<input type="text" name="" id="temp4" />
				</form>
			</div>
		</main>
	);
}
