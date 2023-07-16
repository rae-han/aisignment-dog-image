import React from 'react';
import {VideoContainer} from "@/components/Video/styles";

interface Props {
  url: string | undefined
}

const Video = ({ url }: Props) => {
  if (!url) {
    return null;
  }

  return (
    <VideoContainer>
      {url ? <video autoPlay={true} loop controls>
        <source src={url} type="video/mp4" />
      </video> : null}
    </VideoContainer>
  );
};

export default Video;