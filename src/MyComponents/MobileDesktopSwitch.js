import styled from "styled-components";

const MainWrap = styled.div`
  background-color: whitesmoke;
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SubWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const DesktopLogo = styled.div`
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 25 23' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.444 18H2.558A1.56 1.56 0 0 1 1 16.441V15h23v1.444c0 .858-.698 1.556-1.556 1.556ZM10 22h5v-3h-5v3ZM2.558 1h19.886C23.302 1 24 1.698 24 2.556V14H1V2.559C1 1.699 1.7 1 2.558 1Zm19.886-1H2.558A2.562 2.562 0 0 0 0 2.559v13.882A2.562 2.562 0 0 0 2.558 19H9v3H7v1h11v-1h-2v-3h6.444A2.559 2.559 0 0 0 25 16.444V2.556A2.559 2.559 0 0 0 22.444 0Z' fill='%231F303C' fill-rule='evenodd'/%3E%3C/svg%3E")
    no-repeat;
  border: none;
  cursor: pointer;
  height: 26px;
  padding: 0;
  width: 31px;

  &:hover {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 25 23' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.444 18H2.558A1.56 1.56 0 0 1 1 16.441V15h23v1.444c0 .858-.698 1.556-1.556 1.556ZM10 22h5v-3h-5v3ZM2.558 1h19.886C23.302 1 24 1.698 24 2.556V14H1V2.559C1 1.699 1.7 1 2.558 1Zm19.886-1H2.558A2.562 2.562 0 0 0 0 2.559v13.882A2.562 2.562 0 0 0 2.558 19H9v3H7v1h11v-1h-2v-3h6.444A2.559 2.559 0 0 0 25 16.444V2.556A2.559 2.559 0 0 0 22.444 0Z' fill='%23116DFF' fill-rule='evenodd'/%3E%3C/svg%3E")
      no-repeat;
  }
`;

const MobileLogo = styled.div`
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 15 26' style='enable-background:new 0 0 15 26' xml:space='preserve'%3E%3Cstyle%3E.st1{fill:%2343515c}%3C/style%3E%3Cpath d='M12 1H3c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM9 23H6v-1h3v1zm4-4c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v15z' style='fill:none'/%3E%3Cpath class='st1' d='M6 22h3v1H6zM12 3H3c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm0 16H3V4h9v15z'/%3E%3Cpath class='st1' d='M12 0H3C1.3 0 0 1.3 0 3v20c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm2 23c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v20z'/%3E%3C/svg%3E")
    no-repeat;
  border: none;
  cursor: pointer;
  height: 28px;
  padding: 0;
  width: 17px;

  &:hover {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 15 26' style='enable-background:new 0 0 15 26' xml:space='preserve'%3E%3Cstyle%3E.st1{fill:%23116dff}%3C/style%3E%3Cpath d='M12 1H3c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM9 23H6v-1h3v1zm4-4c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v15z' style='fill:none'/%3E%3Cpath class='st1' d='M6 22h3v1H6zM12 3H3c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm0 16H3V4h9v15z'/%3E%3Cpath class='st1' d='M12 0H3C1.3 0 0 1.3 0 3v20c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm2 23c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v20z'/%3E%3C/svg%3E")
      no-repeat;
  }
`;

const Divider = styled.hr`
  border-bottom: none;
  border-left: none;
  border-top: none;
  border-color: #20303c;
  height: 25px;
  margin: 0 25px;
  opacity: 0.5;
`;

export const MobileDesktopSwitch = () => {
  return (
    <>
      <MainWrap>
        <SubWrap>
          <DesktopLogo></DesktopLogo>
          <Divider></Divider>
          <MobileLogo></MobileLogo>
        </SubWrap>
      </MainWrap>
    </>
  );
};
