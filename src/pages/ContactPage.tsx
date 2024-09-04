import { FormEventHandler, ReactElement } from "react";

export function ContactPage(): ReactElement {
	const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	};

	return (
		<main className="contact-page page">
			<h2>Contact the Avengers</h2>
			<p className="info">We're not sure they're interested, but sure, go ahead!</p>
			<section className="application-form">
				<form className="form" onSubmit={handleOnSubmit}>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<textarea rows={4} placeholder="Why do you want to join the Avengers?"></textarea>
					<div className="actions">{/* <Button type="submit">Apply</Button> */}</div>
				</form>
			</section>
		</main>
	);
}
