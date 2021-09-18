import React from "react";
import "./Content.css";

function Song(props) {
	return (
		<li className="song" key={props.id}>
			<img className="avatar" src={props.albumcover} />
			<div className="song-title">
				<span>
					<b>{props.title}</b> by {props.artist}
				</span>
				<audio id="audio" controls>
					<source src={props.preview} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
			</div>
			<button
				data-title={props.title}
				data-artist={props.artist}
				className="show-lyric"
			>
				Show Lyric
			</button>
		</li>
	);
}

export default Song;
