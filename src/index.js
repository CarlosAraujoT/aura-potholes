import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootswatch/dist/cosmo/bootstrap.min.css";
import "./index.css";
import { App } from "./App";
import { ItemProvider } from "./context";

ReactDOM.render(
	<ItemProvider>
		<App />
	</ItemProvider>,
	document.getElementById("root")
);
