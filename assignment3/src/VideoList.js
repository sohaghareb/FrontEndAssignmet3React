import React from 'react';

function VideoList(props){
	console.log(props.videos);
	return(
		<div className="sidebar">
			<ul className="video-list">
				{props.videos.map((video, i) => <li key={i} onClick={props.chooseVideo.bind(null, i)}>
																						<div className="image-container">
																								<img src={video.snippet.thumbnails.medium.url} alt=""/>
																						</div>
																						<h6>{video.snippet.title}</h6>
																				</li>)}
			</ul>
		</div>
	)
}

export default VideoList;
