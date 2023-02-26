import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Frame>
      <ProductImg></ProductImg>
      <ProductIntro></ProductIntro>
    </Frame>
  );
}

const Frame = styled.div`
  position: absolute;
  width: 80vw;
  height: 100vh;
  display: flex;
  border: solid black;
  right: 10%;
`;

const ProductImg = styled.div`
  width: 50%;
  height: 100%;
  border: solid black;
`;

const ProductIntro = styled.div`
  width: 50%;
  height: 100%;
  border: solid black;
`;
export default Detail;
