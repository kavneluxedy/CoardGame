import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound404 from "../pages/404";
import Layout from "../pages/Layout";
import Home from "../components/Home";

// type Props = {}

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="Home" element={<Home />} />
					<Route path="*" element={<NotFound404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export { Router };