import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage(): ReactElement {
	const navigate = useNavigate();

	return (
		<main className="home-page page">
			<h1 className="heading">Welcome home!</h1>
			<div className="description">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci excepturi officia fugit vitae explicabo aspernatur voluptatibus voluptatum cupiditate cum obcaecati exercitationem
					in delectus, laboriosam sunt minus a mollitia alias! Magnam, laudantium exercitationem! Magnam illo sunt asperiores maiores dolores odit beatae blanditiis vel iusto. Temporibus molestiae
					ullam quod ratione? Nihil repudiandae esse a iure sed nobis necessitatibus praesentium possimus quo.
				</p>
				<button>I'm not a Big Red Button, so go ahead</button>
				{/*
        <Link to="/about">
					<Button>Assemble</Button>
				</Link>
        */}
				{/* <Button onClick={() => navigate("/about")}>Assemble</Button> */}
			</div>
		</main>
	);
}
