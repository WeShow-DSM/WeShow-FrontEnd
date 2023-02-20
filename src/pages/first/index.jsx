import React from "react";
import styled from "styled-components";
import { LogoImg } from "../../assets/index";

const Frame = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.p`
  margin-top: 30px;
  font-size: 50px;

  font-family: ${({ theme }) => theme.font.bmjua};
  color: ${({ theme }) => theme.color.point2};
`;

const LogInBox = styled.button`
  width: 600px;
  height: 73px;
  margin-top: 100px;
  background: ${({ theme }) => theme.color.point1};
  border-radius: 40px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.pretendard};
  cursor: pointer;
`;

const InfoContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.bmjua};
  & + & {
    margin-top: 5px;
  }
`;

function FirstPage() {
  return (
    <Frame>
      <Logo src={LogoImg} />
      <Title>위대한 쇼핑</Title>
      <LogInBox>로그인</LogInBox>

      <InfoContainer>
        <Info>
          상호명 및 호스팅 서비스 제공 : 위대한 친구들주) | 대표이사 : 김기영
        </Info>
        <Info>
          사업자 등록번호 : 123-45-67890 | 통신판매업신고 : 2023-대전유성-0012{" "}
        </Info>
        <Info>대전광역시 유성구 가정북로 76 </Info>
        <Info>
          사이버몰 내 판매되는 상품 중에는 위대한 쇼핑물에 등록한 개별 판매자가
          판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        </Info>
        <Info>
          마켓플레이스(오픈마켓) 상품의 경우 위대한 쇼핑물은 통신판매중개자이며
          통신판매의 당사자가 아닙니다.
        </Info>
        <Info>
          위대한 쇼핑물은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에
          대하여 책임을 지지 않습니다.
        </Info>
        <Info>
          위대한 쇼핑물은 소비자 보호와 안전거래를 위해 신뢰관리센터(
          rlarldud6482@dsm.hs.kr )를 운영하고 있으며,
        </Info>
        <Info>
          관련 분쟁이 발생할 경우 별도의 분쟁처리절차에 의거 분쟁이 처리됩니다.
        </Info>
        <Info>Copyright © Wedae Friends. 2022 - 2023 All Rights Reserved.</Info>
      </InfoContainer>
    </Frame>
  );
}

export default FirstPage;
