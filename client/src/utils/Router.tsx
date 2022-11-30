import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "../pages/404";
import Layout from "../pages/Layout";
import Home from "../components/home/Home";
import Admin from "../components/admin/Admin";
import Embed from "../pages/Embed";
import { AppContext } from "./ContextProvider";
import PublicMatch from "../components/game/PublicMatch";
import PrivateMatch from "../components/game/PrivateMatch";

const Router = (): JSX.Element => {

	const AppCtx = useContext(AppContext);
	const { colorTheme } = { ...AppCtx! };

	return (
		<div className="App" data-theme={colorTheme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="game" element={<PublicMatch Modal={undefined} handleVisibility={undefined} />} />
						<Route path="game" element={<PrivateMatch />} />
						<Route path="admin" element={<Admin />} />
						<Route path="embed" element={<Embed />} />
						<Route path="*" element={<NotFound404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export { Router };
