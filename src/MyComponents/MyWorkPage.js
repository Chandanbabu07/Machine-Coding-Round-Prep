import styled from "styled-components";
import { MobileDesktopSwitch } from "./MobileDesktopSwitch";
import { Header } from "./Header";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media screen and (max-width: 767px) {
    margin-top: 80px;
  }
`;

const ProfessionTitle = styled.div`
  color: rgb(240, 244, 255);
  font-size: 45px;
  letter-spacing: 4px;

  @media screen and (max-width: 767px) {
    margin-left: 15px;
    justify-content: center;
    text-align: center;
    line-height: 68px;
  }
`;

export const MyWorkPage = () => {
  return (
    <>
      <MobileDesktopSwitch></MobileDesktopSwitch>
      <Header></Header>

      <MainWrapper>
        <ProfessionTitle>FRONTEND DEVELOPER</ProfessionTitle>
      </MainWrapper>
    </>
  );
};
