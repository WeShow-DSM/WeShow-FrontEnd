import { useState, useEffect } from "react";
import { LoginBGI, OpenEye, CloseEye } from "../../assets";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import { Link } from "react-router-dom";

function SignUp() {
  const [inputs, setInput] = useState({
    id: "",
    password: "",
    checkPassword: "",
    nickname: "",
  });
  const [seePassword, setSeePassword] = useState({
    pw1: false,
    pw2: false,
  });
  const [equalPW, setEqualPW] = useState(true);

  const { id, password, checkPassword, nickname } = inputs;
  const { pw1, pw2 } = seePassword;

  useEffect(() => {
    password === checkPassword ? setEqualPW(true) : setEqualPW(false);
  }, [equalPW, password, checkPassword]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onPassword = (e) => {
    if (e.target.name === "pw1") {
      setSeePassword({ ...password, pw1: !pw1, pw2 });
    } else if (e.target.name === "pw2") {
      setSeePassword({ ...password, pw1, pw2: !pw2 });
    }
  };

  const onSignUp = (e) => {
    console.log(inputs);
    if (!id || !password || !checkPassword || !nickname) {
      alert("회원정보를 모두 입력해주세요");
      e.preventDefault();
    } else if (!equalPW) {
      alert("비밀번호가 다릅니다.");
      e.preventDefault();
    }
  };

  return (
    <Frame>
      <LoginImg src={LoginBGI} />
      <LoginContainer>
        <LoginWrapper>
          <Title>회원가입</Title>

          <Line />

          <InputInfo fontSize="14px">아이디</InputInfo>
          <InfoInputWrapper>
            <InfoInput
              onChange={onChange}
              name="id"
              value={id}
              placeholder="아이디를 입력해주세요."
            />
          </InfoInputWrapper>

          <InputInfo fontSize="14px">비밀번호</InputInfo>
          <InfoInputWrapper>
            {seePassword.pw1 ? (
              <InfoInput
                onChange={onChange}
                value={password}
                name="password"
                placeholder="비밀번호를 입력해주세요."
              />
            ) : (
              <InfoInput
                onChange={onChange}
                value={password}
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            )}

            {seePassword.pw1 ? (
              <PasswordImg name="pw1" onClick={onPassword} src={OpenEye} />
            ) : (
              <PasswordImg name="pw1" onClick={onPassword} src={CloseEye} />
            )}
          </InfoInputWrapper>

          <InputInfo fontSize="14px">비밀번호 확인</InputInfo>
          <InfoInputWrapper equalPW={!equalPW}>
            {seePassword.pw2 ? (
              <InfoInput
                onChange={onChange}
                name="checkPassword"
                value={checkPassword}
                placeholder="비밀번호를 다시 입력해주세요"
              />
            ) : (
              <InfoInput
                onChange={onChange}
                name="checkPassword"
                value={checkPassword}
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
            )}

            {seePassword.pw2 ? (
              <PasswordImg name="pw2" onClick={onPassword} src={OpenEye} />
            ) : (
              <PasswordImg name="pw2" onClick={onPassword} src={CloseEye} />
            )}
          </InfoInputWrapper>

          <AlertText equalPW={equalPW}>비밀번호가 다릅니다.</AlertText>
          <InputInfo fontSize="14px">닉네임</InputInfo>
          <InfoInputWrapper>
            <InfoInput
              onChange={onChange}
              name="nickname"
              value={nickname}
              placeholder="닉네임을 입력해주세요."
            />
          </InfoInputWrapper>

          <SignUpBox to="/main" onClick={onSignUp}>
            회원가입
          </SignUpBox>
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

  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.pretendard};
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
  border: solid
    ${(props) =>
      props.equalPW
        ? css`
            ${({ theme }) => theme.color.red}
          `
        : css`
            ${({ theme }) => lighten(0.7, theme.color.black)}
          `};
  border-radius: 4px;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
`;

const InfoInput = styled.input`
  width: 100%;
  padding: 4px 0px 0px 15px;
  background: ${({ theme }) => theme.color.gray50};

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

const SignUpBox = styled(Link)`
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
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.color.point1)};
  }
  &:active {
    background: ${({ theme }) => darken(0.1, theme.color.point1)};
  }
`;

const AlertText = styled.p`
  margin: -30px 0px 18px 10px;
  color: ${({ theme }) => theme.color.red};
  font-size: 10px;
  display: ${(props) => (props.equalPW ? "none" : "")};
`;

export default SignUp;
