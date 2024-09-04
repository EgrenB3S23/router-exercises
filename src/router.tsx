import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import { App } from "./components/App.tsx";
import { App } from "./components";
// import { HomePage } from "./pages/HomePage.tsx";
// import { AboutPage } from "./pages/AboutPage.tsx";
// import { ContactPage } from "./pages/ContactPage.tsx";
import { AboutPage, HomePage, ContactPage, DashboardPage } from "./pages";
import { Settings } from "./components/Settings";
import { Stats } from "./components/Stats";

// router built with object:
export const router = createBrowserRouter([
	{
		element: <App />,
		path: "",
		children: [
			{
				index: true, // index:true sets the default child route to be displayed together with the parsent route.
				element: <HomePage />,
				/* path: "/home", */
			},
			{
				element: <AboutPage />,
				path: "about",
			},
			{
				element: <ContactPage />,
				path: "contact",
			},
			{
				element: <DashboardPage />,
				path: "dashboard",
				children: [
					{
						element: <Stats />,
						path: "stats",
					},
					{
						element: <Settings />,
						path: "settings",
					},
				],
			},
		],
	},
]);

// router built with JSX elements:
export const routerWithJSX = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />} path="">
			<Route index={true} element={<HomePage />} />
			<Route path={"about"} element={<AboutPage />} />
			<Route path={"contact"} element={<ContactPage />} />
			<Route path={"dashboard"} element={<DashboardPage />}>
				<Route path={"settings"} element={<Settings />} />
				<Route path={"stats"} element={<Stats />} />
			</Route>
		</Route>
	)
);
