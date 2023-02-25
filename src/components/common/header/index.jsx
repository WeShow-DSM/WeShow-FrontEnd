import React from "react";
import styled from "styled-components";
import { LogoImg, UserImg } from "../../../assets";

function Header() {
  return (
    <Frame>
      <Logo src={LogoImg} />
      <User src={UserImg} />
    </Frame>
  );
}

const Frame = styled.header`
  position: absolute;
  top: 0%;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const User = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 90%;
  cursor: pointer;
`;

export default Header;
