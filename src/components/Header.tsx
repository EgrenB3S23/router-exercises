import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header() {
	return (
		<header className="page-header">
			{/* //// */}
			{/* //// */}
			<div className="links">
				<Link to="/">
					<h2>Home</h2>
				</Link>
				<Link to="/about">
					<h2>About</h2>
				</Link>
				<Link to="/contact">
					<h2>Contact</h2>
				</Link>
				<Link to="/dashboard">
					<h2>Dashboard</h2>
				</Link>
			</div>
		</header>
	);
}
