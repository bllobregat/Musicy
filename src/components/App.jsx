import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { ContextProvider } from "../context/ContextProvider";

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<Header />
				<Content />
				<Footer />
			</ContextProvider>
		</div>
	);
}

export default App;
