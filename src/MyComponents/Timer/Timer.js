import { useEffect, useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  height: 500px;
  width: 700px;
  background-color: whitesmoke;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: rebeccapurple;
`;
const TimerWrapper = styled.div`
  display: flex;
  gap: 60px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.div`
  font-size: 25px;
`;
const Hours = styled.input`
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  border: none;
  outline: none;
  width: 90px;
  height: 50px;
  background-color: whitesmoke;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Minutes = styled.input`
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  border: none;
  outline: none;
  width: 90px;
  height: 50px;
  background-color: whitesmoke;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Seconds = styled.input`
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  border: none;
  outline: none;
  width: 90px;
  height: 50px;
  background-color: whitesmoke;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Divder = styled.div`
  font-size: 30px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
const StartButton = styled.div`
  height: 40px;
  width: 160px;
  background-color: green;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #046204;
  }
`;
const ResetButton = styled.div`
  height: 40px;
  width: 160px;
  background-color: red;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #ca0606;
  }
`;

export const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [unPause, setUnPause] = useState(false);

  const handleReset = () => {
    setStart(false);
    setTimeout(() => {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }, 500);
  };

  const handleStart = () => {
    setStart(true);
    setPause(true);
  };

  const handlePause = () => {
    setStart(false);
    setUnPause(true);
  };

  useEffect(() => {
    console.log("Time", seconds);
    if (start) {
      if (minutes === 0 && seconds === 0 && hours === 0) {
        return;
      }

      if (seconds > 60) {
        setMinutes(minutes + 1);
        setSeconds(seconds - 60);
      }

      if (minutes > 60) {
        setHours(hours + 1);
        setMinutes(minutes - 60);
      }

      if (hours > 0 && minutes === 0) {
        setMinutes(60);
        setHours(hours - 1);
      }

      if (minutes > 0 && seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }
  }, [hours, seconds, minutes, start]);

  return (
    <>
      <MainWrapper>
        <Title>Countdown Timer</Title>

        <TimerWrapper>
          <Wrap>
            <Label>Hours</Label>
            <Hours
              type="number"
              placeholder="00"
              onChange={(e) => setHours(Number(e.target.value) || 0)}
              value={hours === 0 ? "" : hours}
            ></Hours>
          </Wrap>
          <Divder>:</Divder>
          <Wrap>
            <Label>Minutes</Label>
            <Minutes
              type="number"
              placeholder="00"
              onChange={(e) => setMinutes(Number(e.target.value) || 0)}
              value={minutes === 0 ? "" : minutes}
            ></Minutes>
          </Wrap>
          <Divder>:</Divder>
          <Wrap>
            <Label>Seconds</Label>
            <Seconds
              type="number"
              placeholder="00"
              onChange={(e) => setSeconds(Number(e.target.value) || 0)}
              value={seconds === 0 ? "" : seconds}
            ></Seconds>
          </Wrap>
        </TimerWrapper>

        <ButtonWrapper>
          <StartButton
            onClick={() => {
              unPause ? handleStart() : pause ? handlePause() : handleStart();
            }}
            style={{ backgroundColor: !unPause && pause && "#bbbb63" }}
          >
            {unPause ? "Continue" : pause ? "Pause" : "Start"}
          </StartButton>
          <ResetButton onClick={() => handleReset()}>Reset</ResetButton>
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
};
