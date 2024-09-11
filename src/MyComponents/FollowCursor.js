import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  height: 100vh; /* Make sure the wrapper fills the viewport */
  width: 100vw;
  position: relative;
`;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgb(153, 138, 190);
  position: absolute;
  transform: translate(-50%, -50%); /* Center the circle to the cursor */
`;

export const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log("Position", e);
    setTimeout(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 200);
  };

  console.log("XYPos", position);

  return (
    <MainWrapper onMouseMove={handleMouseMove}>
      <Circle style={{ top: position.y, left: position.x }} />
    </MainWrapper>
  );
};
