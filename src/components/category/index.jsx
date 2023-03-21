import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { CategoryImage } from "../../assets";

function Category({ onChangeValue, category }) {
  const [categoryList, setCategoryList] = useState([
    "식품",
    "장난감",
    "산책용품",
    "의류",
    "위생용품",
    "미용",
    "전자기기",
    "홈인테리어",
    "배변용품",
    "기타",
  ]);

  const [categories, setCategory] = useState(false);
  const [categoryAct, setCategoryAct] = useState(category);
  const categoryValue = useRef();

  const onCategory = (name) => {
    setCategoryAct((categoryValue.current.value = name));
    console.log(categoryValue.current.value);
    console.log(name);
  };

  return (
    <>
      <InfoWrapper>
        <InfoText>카테고리</InfoText>
        <CategoryWrpper>
          <InfoInputWrapper>
            <InfoInput
              name="category"
              onChange={onChangeValue}
              ref={categoryValue}
              value={categoryAct}
            />
            <CategoryImg
              onClick={() => setCategory(!categories)}
              src={CategoryImage}
              category={categories}
            ></CategoryImg>
          </InfoInputWrapper>
          {categories && (
            <CategoryFrame>
              {categoryList.map((name, id) => (
                <Element
                  onClick={() => {
                    onCategory(name);
                  }}
                  name={name}
                  categoryValue={categoryValue.current.value}
                  key={id}
                >
                  {name}
                </Element>
              ))}
            </CategoryFrame>
          )}
        </CategoryWrpper>
      </InfoWrapper>
    </>
  );
}

const InfoWrapper = styled.div`
  width: 852px;
  display: flex;
  margin-bottom: 150px;
`;

const InfoText = styled.span`
  font-size: 20px;
  margin: 18px 30px 0px 0px;
  font-family: ${({ theme }) => theme.font.pretendard};
`;

const InfoInputWrapper = styled.div`
  width: 600px;
  height: 60px;
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
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

const CategoryImg = styled.img`
  cursor: pointer;
  margin-right: 10px;
  ${(props) =>
    props.category
      ? css`
          transform: rotate(90deg);
          transition: all 0.5s;
        `
      : css`
          transform: rotate(0deg);
          transition: all 0.5s;
        `}
`;

const CategoryWrpper = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryFrame = styled.div`
  width: 600px;
  height: 100px;
  border: solid ${({ theme }) => theme.color.gray100};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 5%;
  gap: 0px 10px;
  background: ${({ theme }) => theme.color.white};
`;

const Element = styled.div`
  color: ${(props) =>
    props.name === props.categoryValue
      ? css`
          ${({ theme }) => theme.color.point}
        `
      : css`
          ${({ theme }) => theme.color.black}
        `};

  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  margin-right: 40px;
  font-family: ${({ theme }) => theme.font.pretendard};

  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
  &:active {
    color: ${({ theme }) => theme.color.point1};
  }
`;

export default Category;
