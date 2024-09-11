import { useEffect, useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  width: 250px;
  height: 350px;
  margin: 100px auto;
`;
const Timer = styled.div`
  color: red;
  margin-top: 150px;
`;
const TimerStopButton = styled.div`
  background-color: gray;
  width: 250px;
  justify-content: center;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #545353;
  }
`;

export const DebounceTimer = () => {
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);

  const handletimer = () => {
    setStop(true);
  };

  useEffect(() => {
    if (!stop) {
      if (time > 10) {
        setTime(0);
        return;
      } else {
        setTimeout(() => {
          setTime(time + 1);
        }, 1000);
      }
    }
  }, [time]);

  return (
    <>
      <MainWrapper>
        <Timer>{time}</Timer>
        <TimerStopButton onClick={() => handletimer()}>STOP</TimerStopButton>
      </MainWrapper>
    </>
  );
};
