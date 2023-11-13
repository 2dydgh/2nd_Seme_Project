import styled from "styled-components";

// export const s = styled.div`
//     position: absolute;
// `;

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
  color: #f4f3f3;
`;

export const Body = styled.div`
  position: relative;
  width: 1280px;
  height: 721px;
  left: 0px;
  top: 111px;
  background: #2A2F42;
`;

export const Name = styled.div`
position: absolute;
width: 149px;
height: 53px;
left: calc(50% - 149px/2 - 0.5px);
top: calc(50% - 53px/2 - 178px);

font-family: 'Noto Sans KR', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
justify-content: center;
background: #2A2F42;
color: #F4F3F3;
`;

export const ImageGroup = styled.div`
  position: absolute;
  width: 1067px;
  height: 363px;
  left: 106px;
  top: 220px;
  overflow: hidden;
  color: black;
`;

export const Header = styled.div`
position: absolute;
width: 1280px;
height: 123px;
left: 0px;
top: 0px;
background: #1C1E2C;
`;

export const Logo = styled.div`
position: absolute;
left: 90px;
display: flex;
`;
