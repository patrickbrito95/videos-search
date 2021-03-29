import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 180px;
`;

const VideoItem = ({ video, onVideoSelect }) => {
  if (!video || !video.snippet) {
    return null;
  }
  return (
    <Item onClick={() => onVideoSelect(video)} className="item">
      <Image
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={`${video.snippet.title} Thumbnail`}
      />
      <div className="content">
        <div className="header">
          <h5>{video.snippet.title}</h5>
        </div>
      </div>
    </Item>
  );
};

export default VideoItem;
