import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import "../css/app.css";

// export function App(): ReactElement {
export function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

// export default App;

