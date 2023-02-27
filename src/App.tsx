import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Home from "./screen/Home";
import Navbar from "./components/Navbar";
import Feed from "./screen/Feed";
import Team from "./screen/Team";
import Guard from "./screen/Guard";
import Contact from "./screen/Contact";
import Footer from "./components/Footer";
import Signup from "./screen/Signup";

function App() {
	const user = useAppSelector((state) => state.user);
	const { isLoggedIn } = user;
	console.log("User", isLoggedIn);
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/team" element={<Team />} />
				<Route path="/guard" element={<Guard />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
