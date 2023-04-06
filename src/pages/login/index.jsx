import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  LoginBGI,
  OpenEye,
  CloseEye,
  CheckedBox,
  CheckBox,
} from "../../assets";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { Link } from "react-router-dom";
import LoginApi from "../../api/login";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [pwcheck, setPassword] = useState(false);
  const [checked, setCheck] = useState(false);
  const [cookies, setCookie] = useCookies(["cookie_token"]);
  const [inputs, setInputs] = useState({
    account_id: "",
    password: "",
  });
  const { account_id, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCheck = () => {
    setCheck(!checked);
  };

  const onPassword = () => {
    setPassword(!pwcheck);
  };

  const onLogin = (e) => {
    e.preventDefault();
    LoginApi(account_id, password)
      .then((res) => {
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`;
        alert("success", res);
        setCookie("cookie_token", res.data.access_token);
        console.log("cookie_token", cookies.cookie_token);
        navigate("/main");
      })
      .catch((err) => alert(err));
  };

  return (
    <Frame>
      <LoginImg src={LoginBGI} />
      <LoginContainer>
        <LoginWrapper>
          <Title>로그인</Title>

          <Line />

          <InputInfo fontSize="14px">아이디</InputInfo>
          <InfoInputWrapper>
            <InfoInput
              onChange={onChange}
              placeholder="아이디를 입력해주세요."
              name="account_id"
              value={account_id}
            />
          </InfoInputWrapper>

          <InputInfo fontSize="14px">비밀번호</InputInfo>
          <InfoInputWrapper>
            {pwcheck ? (
              <InfoInput
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요."
                name="password"
                value={password}
              />
            ) : (
              <InfoInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChange}
                name="password"
                value={password}
              />
            )}

            {pwcheck ? (
              <PasswordImg onClick={onPassword} src={CloseEye} />
            ) : (
              <PasswordImg onClick={onPassword} src={OpenEye} />
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

          <LogInBox to="/main" onClick={onLogin}>
            로그인
          </LogInBox>

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
  background-color: ${({ theme }) => theme.color.gray50};
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

const LogInBox = styled(Link)`
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
