import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { ProductThumbnail, Edit, HoverEdit } from "../../assets";
import Stars from "../stars";
import { Link } from "react-router-dom";

function Product({ product, id }) {
  return (
    <ProductWrapper>
      <NavLink to={`/${id}`}>
        <ProductImg src={ProductThumbnail}></ProductImg>
        <ProductInfo>슈프림 강아지 미니 하우스</ProductInfo>
        <ProductInfo>899,000원</ProductInfo>
      </NavLink>
      <BottomContainer>
        <Stars point={Math.round(product.point)}></Stars>
        <Review>(9,999+)</Review>
        <NavLink to={`/edit/${id}`}>
          <EditIcon src={Edit}></EditIcon>
        </NavLink>
      </BottomContainer>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  width: 288px;
  height: 288px;
  border: solid ${({ theme }) => lighten(0.9, theme.color.black)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 220px;
  height: 163px;
  border-radius: 15px;
`;

const ProductInfo = styled.p`
  margin: 18px 0px 6px 0px;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-size: 15px;
  & + & {
    margin: 0px 0px 6px 0px;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-left: 60px;
`;

const Review = styled.span`
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.pretendard};
`;

const EditIcon = styled.img`
  position: relative;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    content: url(${HoverEdit});
  }
  &:active {
    content: url(${Edit});
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Product;
