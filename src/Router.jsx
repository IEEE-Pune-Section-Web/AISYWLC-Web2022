import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./Components/ComingSoon";
import Header from "./Components/Header";
import Home from "./Pages/Home";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<ComingSoon />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
