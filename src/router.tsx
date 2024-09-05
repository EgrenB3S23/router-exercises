import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
// import { App } from "./components/App.tsx";
import { App } from "./components";
import { AboutPage, HomePage, ContactPage, DashboardPage, NotFound } from "./pages";
import { Settings } from "./components/Settings";
import { Stats } from "./components/Stats";

export const router = createBrowserRouter([
	// router built as object: I'm using the JSX variant below, but maintaining this in parallell for practice purposes.
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
				element: <HomePage />,
				path: "/home",
			},
			{
				element: <Navigate to={"/home"} />,
				path: "/old-home",
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
		<Route element={<App />} path={""}>
			<Route path={"*"} element={<NotFound />} />
			<Route index={true} element={<HomePage />} />
			<Route path={"home"} element={<HomePage />} />
			<Route path={"/old-home"} element={<Navigate to={"/home"} />} />;
			<Route path={"about"} element={<AboutPage />} />
			<Route path={"contact"} element={<ContactPage />} />
			<Route path={"dashboard"} element={<DashboardPage />}>
				<Route path={"settings"} element={<Settings />} />
				<Route path={"stats"} element={<Stats />} />
			</Route>
		</Route>
	)
);

{
	/* <Route path="/old-home" element={<Navigate to="/home" />} />; */
}
