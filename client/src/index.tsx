import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/App.css";

const app = document.getElementById("app") as HTMLElement;


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	app
);
