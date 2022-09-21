import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound404 from "../pages/404"
import Layout from "../pages/Layout"
import { Home } from "../components/Home/Home"
import PrivateClient from "../components/PrivateClient"
import CardGameLobby from "../components/Lobby";

const Router = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="match-:matchID" element={<PrivateClient />} />
					<Route path=":matchID" element={<PrivateClient />} />
					<Route path="*" element={<NotFound404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export { Router }