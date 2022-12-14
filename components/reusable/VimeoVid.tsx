import React from "react";
import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";

export default function BackgroundVideo() {
  return (
    <>
      <VideoContainer>
        <div className="top-1/2 absolute">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          facere?
        </div>
        <Video
          autoplay={true}
          background={true}
          height={1080}
          loop={true}
          responsive
          video="https://vimeo.com/759086437"
          width={1920}
        />
      </VideoContainer>
      <Overlay />
    </>
  );
}

const VideoContainer = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Video = styled((props) => <Vimeo {...props} />)`
  height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
  left: 50%;
  min-height: 100vh;
  min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`;

{
  /*
For a nice vintage and darkening effect
*/
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.66);
  bottom: 0;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;
