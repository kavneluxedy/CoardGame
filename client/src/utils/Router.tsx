import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound404 from "../pages/404"
import Layout from "../pages/Layout"
import Home from "../components/Home/Home"
import Admin from "../components/Admin/Admin";
import Embed from "../pages/Embed";

const Router = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="admin" element={<Admin />} />
					<Route path="embed" element={<Embed />} />
					<Route path="*" element={<NotFound404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export { Router }