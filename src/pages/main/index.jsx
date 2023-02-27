import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/header";
import Product from "../../components/product";
import { lighten } from "polished";
import { AddImg } from "../../assets";
import { Link } from "react-router-dom";

function Main() {
  const [products, setProduct] = useState([
    {
      id: 1,
      price: 899000,
      image: "https://avatars.githubusercontent.com/u/83737498?v=4",
      point: 2.1,
      review_count: 999,
      title: "슈프림 강아지 미니 하우스",
    },
    {
      id: 2,
      price: 899000,
      image: "https://avatars.githubusercontent.com/u/83737498?v=4",
      point: 3.2,
      review_count: 999,
      title: "슈프림 강아지 미니 하우스",
    },
    {
      id: 3,
      price: 899000,
      image: "https://avatars.githubusercontent.com/u/83737498?v=4",
      point: 4.3,
      review_count: 999,
      title: "슈프림 강아지 미니 하우스",
    },
    {
      id: 4,
      price: 899000,
      image: "https://avatars.githubusercontent.com/u/83737498?v=4",
      point: 4.5,
      review_count: 999,
      title: "슈프림 강아지 미니 하우스",
    },
  ]);

  return (
    <>
      <Header />

      <Frame>
        <ProductContianer>
          <CreateProduct to="/create">
            <img src={AddImg} />
          </CreateProduct>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              price={product.price}
              image={product.image}
              point={product.point}
              review_count={product.review_count}
              title={product.title}
            ></Product>
          ))}
        </ProductContianer>
      </Frame>
    </>
  );
}

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductContianer = styled.div`
  width: 1212px;
  display: flex;
  margin-top: 50px;
  gap: 60px 20px;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 100px;
`;

const CreateProduct = styled(Link)`
  width: 288px;
  height: 288px;
  border: solid ${({ theme }) => lighten(0.9, theme.color.black)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray100};
    border: none;
  }
  &:active {
    background: ${({ theme }) => theme.color.gray200};
  }
`;

export default Main;
