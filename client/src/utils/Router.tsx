import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "../components/layout/404";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Admin from "../components/admin/Admin";
import AppContext from "./ContextProvider";
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
						<Route path="admin" element={<Admin />} />
						<Route path="game" element={<PublicMatch handleVisibility={undefined} />} />
						<Route path="game" element={<PrivateMatch />} />
						<Route path="*" element={<NotFound404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
