import React from "react";

const VideoDetail = ({ video }) => {
  if (!video || !video.snippet) {
    return null;
  }
  console.log(video);
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.id.videoId}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
