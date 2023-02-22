import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Navbar from "./components/Navbar";
import Feed from "./screen/Feed";
import Team from "./screen/Team";
import Guard from "./screen/Guard";
import Contact from "./screen/Contact";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/team" element={<Team />} />
				<Route path="/guard" element={<Guard />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
