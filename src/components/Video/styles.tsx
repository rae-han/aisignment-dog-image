import styled from "@emotion/styled";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
  width: 480px;
  height: 480px;
  margin: 0 auto;
  background-color: black;
  
  & > video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;