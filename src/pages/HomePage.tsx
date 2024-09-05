import { ReactElement } from "react";
import { useGlobalState } from "../hooks/useGlobalState";

export function HomePage(): ReactElement {
	// const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [isLoggedIn, toggleIsLoggedIn] = useGlobalState();

	return (
		<main className="home-page page">
			<h1 className="heading">Welcome home!</h1>
			<div className="description">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci excepturi officia fugit vitae explicabo aspernatur voluptatibus voluptatum cupiditate cum obcaecati exercitationem.
				</p>
				<button>I'm not a Big Red Button, so go ahead</button>
			</div>

			<button onClick={toggleIsLoggedIn}>{isLoggedIn ? "Log out" : "Log in"}</button>
		</main>
	);
}
