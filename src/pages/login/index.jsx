import React, { useState } from "react";
import {
  LoginBGI,
  OpenEye,
  CloseEye,
  CheckedBox,
  CheckBox,
} from "../../assets/index";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import { Link } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState(false);
  const [checked, setCheck] = useState(false);

  const onCheck = () => {
    setCheck(!checked);
  };

  const onPassword = () => {
    setPassword(!password);
  };
  console.log(password);

  return (
    <Frame>
      <LoginImg src={LoginBGI}></LoginImg>
      <LoginContainer>
        <LoginWrapper>
          <Title>로그인</Title>

          <Line />

          <InputInfo fontSize="14px">아이디</InputInfo>
          <InfoInputWrapper>
            <InfoInput placeholder="아이디를 입력해주세요." />
          </InfoInputWrapper>

          <InputInfo fontSize="14px">비밀번호</InputInfo>
          <InfoInputWrapper>
            {password ? (
              <InfoInput placeholder="비밀번호를 입력해주세요." />
            ) : (
              <InfoInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            )}

            {password ? (
              <PasswordImg onClick={onPassword} src={OpenEye} />
            ) : (
              <PasswordImg onClick={onPassword} src={CloseEye} />
            )}
          </InfoInputWrapper>

          <SaveContainer>
            {checked ? (
              <SaveCheckBox onClick={onCheck} src={CheckedBox} />
            ) : (
              <SaveCheckBox onClick={onCheck} src={CheckBox} />
            )}
            <InputInfo fontSize="16px">아이디 저장</InputInfo>
          </SaveContainer>

          <LogInBox>로그인</LogInBox>

          <SignUpContainer>
            <div>회원이 아니신가요?</div>
            <SignUpLink to="/signup">지금 회원가입</SignUpLink>
          </SignUpContainer>
        </LoginWrapper>
      </LoginContainer>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LoginImg = styled.img`
  width: 50%;
  box-shadow: 0px 0px 30px rgba(29, 48, 77, 0.15);
`;

const LoginContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 483px;
  height: 545px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.noto};
`;

const Line = styled.hr`
  width: 100%;
  margin: 23px 0px 56px 0px;
  border: solid ${({ theme }) => theme.color.point1};
`;

const InputInfo = styled.p`
  font-size: ${(props) => props.fontSize};
  margin-left: 5px;
  color: ${({ theme }) => lighten(0.3, theme.color.black)};
  font-family: ${({ theme }) => theme.font.pretendard};
`;

const InfoInputWrapper = styled.div`
  margin: 6px 0px 40px 0px;
  padding-right: 10px;
  border: solid ${({ theme }) => lighten(0.7, theme.color.black)};
  border-radius: 4px;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
`;

const InfoInput = styled.input`
  width: 100%;
  padding: 4px 0px 0px 15px;
  ::placeholder {
    font-size: 16px;
    color: ${({ theme }) => lighten(0.7, theme.color.black)};
  }
`;

const PasswordImg = styled.img`
  color: black;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const SaveContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  input {
    display: none;
  }
`;
const SaveCheckBox = styled.img`
  cursor: pointer;
`;

const LogInBox = styled.div`
  height: 50px;
  margin-top: 40px;
  background: ${({ theme }) => theme.color.point1};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.pretendard};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.color.point1)};
  }
  &:active {
    background: ${({ theme }) => darken(0.1, theme.color.point1)};
  }
`;

const SignUpContainer = styled.div`
  width: 100%;
  height: 22px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.gray600};
`;

const SignUpLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray600};
  margin-left: 5px;
`;

export default Login;
