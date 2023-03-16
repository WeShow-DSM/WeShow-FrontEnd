import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/common/header";
import Category from "../../components/category";
import ImgList from "../../components/ImgList";

function CreateProduct() {
  return (
    <>
      <Header />
      <Frame>
        <InfoWrapper>
          <InfoText fontSize="20px" interval="47px">
            상품명
          </InfoText>

          <InfoInputWrapper>
            <InfoInput />
          </InfoInputWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <InfoText fontSize="20px" interval="25px">
            상품 가격
          </InfoText>
          <InfoInputWrapper>
            <InfoInput type="number" />
            <InfoText fontSize="20px" interval="20px">
              원
            </InfoText>
          </InfoInputWrapper>
        </InfoWrapper>

        <Category />

        <InfoText fontSize="30px">상품 대표 이미지</InfoText>

        <ImgList></ImgList>

        <InfoText fontSize="30px">상품 설명</InfoText>
        <ProductTextContainer>
          <ProductText placeholder="상품 설명을 입력해주세요." />
          <SubmitBTN>상품 등록하기</SubmitBTN>
        </ProductTextContainer>
      </Frame>
    </>
  );
}

const Frame = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 80px;
`;

const InfoWrapper = styled.div`
  width: 852px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const InfoText = styled.span`
  font-size: ${(props) => props.fontSize};
  margin-right: ${(props) => props.interval};
  font-family: ${({ theme }) => theme.font.pretendard};
`;

const InfoInputWrapper = styled.div`
  width: 600px;
  height: 100%;
  border: solid ${({ theme }) => theme.color.gray100};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const InfoInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.pretendard};
  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;

const ProductTextContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const ProductText = styled.textarea`
  width: 900px;
  height: 390px;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 15px;
  resize: none;
`;

const SubmitBTN = styled.button`
  width: 155px;
  height: 50px;
  margin-top: 340px;
  background: none;
  border: solid ${({ theme }) => theme.color.point};
  color: ${({ theme }) => theme.color.point};
  font-size: 18px;
  &:hover {
    cursor: pointer;
    border: solid ${({ theme }) => theme.color.point};
    background: ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.white};
  }
  &:active {
    border: solid ${({ theme }) => theme.color.point1};
    background: ${({ theme }) => theme.color.point1};
    color: ${({ theme }) => theme.color.white};
  }
`;

export default CreateProduct;
