import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./Components/ComingSoon";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Commitee from "./Pages/Commitee";
import Home from "./Pages/Home";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Committee" element={<Commitee />} />
				<Route path="*" element={<ComingSoon />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
