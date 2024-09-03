import "./css/index.css";
// import { StrictMode } from "react";
import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerWithJSX } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <Home /> */}
		{/* <h4 style={{ color: "#000" }}>OUTLET:</h4> */}
		{/* <h4>CONTENT: (DELETE ME) </h4> */}
		<RouterProvider router={routerWithJSX} />
	</React.StrictMode>
);
