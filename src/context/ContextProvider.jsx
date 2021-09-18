import React, { useState, createContext } from "react";

const TitleContext = createContext({});

export function ContextProvider({ children }) {
	const [title, setTitle] = useState("");

	function saveTitle(newTitle) {
		console.log(newTitle);
		setTitle(newTitle);
	}

	return (
		<TitleContext.Provider value={{ title, saveTitle }}>
			{children}
		</TitleContext.Provider>
	);
}

export default TitleContext;
