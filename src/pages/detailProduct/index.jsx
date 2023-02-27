import React from "react";
import styled from "styled-components";
import Header from "../../components/common/header";
import { ProductImg } from "../../assets";
import Stars from "../../components/stars";

function Detail() {
  return (
    <>
      <Header></Header>
      <Frame>
        <ImgContainer>
          <InfoText fontSize="20px">문정민 쇼핑</InfoText>
          <InfoText fontSize="25px">899,000원</InfoText>
          <ProductImage src={ProductImg}></ProductImage>
        </ImgContainer>

        <IntroWrapper>
          <InfoHeader>
            <Stars />
            <Review>(999)</Review>
          </InfoHeader>

          <InfoText fontSize="25px">슈프림 강아지 미니 하우스</InfoText>

          <Line />
          <ProductIntro>
            이건 혁명적인 미니 하우스 코트입니다!이건 혁명적인 미니 하우스
            코트입니다! 이건 혁명적인 미니 하우스 코트입니다! 이건 혁명적인 미니
            하우스 코트입니다!이건 혁명적인 미니 하우스 코이건 적인 코적인 미니
            하우스 코트입니다!이건 혁명적 인 미니 하우스 코트입니다!이건
            혁명적인 미니 하우스 코트입니다!이건 혁명적인 미니 하우스 코이건
            혁명적인 미니 하 우스 코트입니다!이건 혁명적인 미니 하우스
            코트입니다!이건 혁명적인 미니 하우스 코트입니다!이건 혁명적인 미니
            하우스 코트입니다!이건 혁명적 인 미니 하우스 코이건 혁명적인 미니
            하우스 코트입니다!이건 혁명적인 미니 하우스 코트입니다!이건 혁명적인
            미니 하우스 코트입니다!이건 혁명적인 미혁명적인 미니 하우스
            코트입니다!이건 혁명적인 미!이건 혁명적인 미니 하우스 코이건
            혁명적인 미니 하우스 코트입니다!이건 혁명적인 미니 하우스
            코트입니다!이건 혁명적인 미니 하우스 코트입니다!이건 혁명적인 미니
            하우스 코트입니다!이건 혁명적인 미니 하우스 코이건 혁명적인 미니
            하우스 코트입니다!이건 혁명적인 미니 하우스 코트입니다!이건 혁명적인
            미니 하우스 코트입니다!이건 혁명적인 미니 하우스 코트입니다!이건
            혁명적인 미니 하우스 코
          </ProductIntro>
        </IntroWrapper>
      </Frame>
    </>
  );
}

const Frame = styled.div`
  width: 80vw;
  height: 80vh;
  position: absolute;
  right: 10%;
  display: flex;
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 350px;
  height: 400px;
  border-radius: 10px;
  margin-top: 10px;
`;

const IntroWrapper = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding-left: 10%;

  background: ${({ theme }) => theme.color.white};
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  font-size: ${(props) => props.fontSize};
  font-family: ${({ theme }) => theme.font.pretendard};
  margin-bottom: 10px;
`;

const Review = styled.span`
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.pretendard};
`;

const Line = styled.hr`
  width: 370px;
  border: solid 1px ${({ theme }) => theme.color.gray200};
  margin-bottom: 10px;
`;

const ProductIntro = styled.div`
  width: 370px;
  height: 581px;
  word-break: break-all;
  overflow-y: scroll;
  font-size: 20px;
`;

export default Detail;
