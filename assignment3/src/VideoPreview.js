import React from 'react';

function VideoPreview(props){
	function isEmpty(obj) {
   for (var x in obj) { return false; }
   return true;
};

	  let video_id="7HtedIGVBmQ";
    let url="https://www.youtube.com/embed/"+video_id;
		let title="لايف من الدوبليكس كارو يحاور درة زروق";
		let channel_title="الدوبلكس";
		let desciption="اللي يمشي ورايا ياما يشوف.. فولو مي .. أشترك في قناة أبلة فاهيتا";
	console.log(url);
	if(!isEmpty(props.activeVideo)){
		  video_id=props.activeVideo.id.videoId;
		  url="https://www.youtube.com/embed/"+video_id;
		console.log(url);
			title=props.activeVideo.snippet.title;
			channel_title=props.activeVideo.snippet.channelTitle;
			desciption=props.activeVideo.snippet.description;
		  console.log("ana hina ",desciption);
	}
	console.log(props.activeVideo.length > 0,props.activeVideo);

	return(
		<div className="main">
				<div className="videoWrapper">
					<iframe width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>
				</div>
				<h4>{title}</h4>
				<h5>{channel_title}</h5>
				<p>{desciption}</p>
		</div>

	)
}

export default VideoPreview;
