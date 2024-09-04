import { ReactElement } from "react";
import { Settings } from "../components/Settings";
import { Stats } from "../components/Stats";
import { Link, Outlet } from "react-router-dom";
import React from "react";
// import { useNavigate } from "react-router-dom";

export function DashboardPage(): ReactElement {
	// const navigate = useNavigate();
	const [currentSubPage, setCurrentSubPage] = React.useState([
		/* array of ???? #TODO */
	]);

	return (
		<main className="dashboard-page page">
			<h1 className="heading">The "-"-board!</h1>
			<div className="links">
				<div className="flex-horizontal">
					<Link to="./settings">
						<h2>Settings</h2>
					</Link>
					<Link to="./stats">
						<h2>Stats</h2>
					</Link>
					{/* </div> */}
				</div>
			</div>
			<Outlet context={[currentSubPage]} />
			{/* <div className="flex-horizontal">
				<section className="settings-section">
					<Settings />
				</section>
				<section className="settings-section">
					<Stats />
				</section>
			</div> */}
		</main>
	);
}
