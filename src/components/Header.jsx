import React, { useState, useContext } from "react";
import TitleContext from "../context/ContextProvider";
import "./Header.css";

function Header() {
	const { title, saveTitle } = useContext(TitleContext);

	function handleSubmit(evt) {
		const titleSubmit = evt.target.elements[0].value;
		saveTitle(titleSubmit);
		evt.preventDefault();
	}

	return (
		<header className="Header">
			<form className="form" onSubmit={handleSubmit}>
				<input
					onChange={(evt) => {
						!evt.target.value && saveTitle("");
					}}
					id="search"
					type="search"
					className="search"
					placeholder="Search artist or songs"
					//value={title ? title : ""}
					required
				/>
				<input id="submit" type="submit" value="Search" />
			</form>
		</header>
	);
}

export default Header;
