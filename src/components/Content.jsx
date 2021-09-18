import React, { useState, useEffect, useContext } from "react";
import StaticContext from "../context/ContextProvider";
import Song from "./Song";
import "./Content.css";

const API = "https://api.lyrics.ovh";

function Content() {
	const [songs, setSongs] = useState([]);

	const { title } = useContext(StaticContext);

	async function searchMusic(sInput) {
		let songs = [];
		if (sInput) {
			const data = await fetch(`${API}/suggest/${sInput}`);
			const response = await data.json();
			songs = response.data;
		}
		setSongs(songs);
	}

	console.log(title);

	useEffect(() => {
		searchMusic(title);
	}, [title]);

	return (
		<article className="content">
			<ul className="songs">
				{songs.map((song) => (
					<Song
						key={song.id}
						title={song.title}
						artist={song.artist.name}
						albumcover={song.album.cover}
						preview={song.preview}
					/>
				))}
			</ul>
		</article>
	);
}

export default Content;
