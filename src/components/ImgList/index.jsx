import { useState } from "react";
import styled from "styled-components";
import { AddImg } from "../../assets";

function ImgList() {
  const [showImages, setShowImages] = useState([AddImg, AddImg, AddImg]);
  const [selectImg, setSelectImg] = useState([]);

  const onAddImg = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];
    let selectImgLists = [...selectImg];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]); //이미지를 URL로 변경
      if (selectImg.length < 3) {
        for (let j = 0; j < imageUrlLists.length; j++) {
          if (imageUrlLists[j] === AddImg) {
            //j번 인덱스값 === 초기 이미지
            imageUrlLists[j] = currentImageUrl; //그 인덱스를 currentImageUrl로 변경
            selectImgLists.push(currentImageUrl);
            setSelectImg(selectImgLists);
            setShowImages(imageUrlLists);
            break;
          }
        }
      } else {
        selectImgLists.unshift(currentImageUrl);
        selectImgLists = selectImgLists.slice(0, 3);
        setShowImages(selectImgLists);
        setSelectImg(selectImgLists);
        console.log("selectImgLists", selectImgLists);
        console.log("else");
      }
      console.log(selectImg.length);
    }
  };

  return (
    <Frame>
      {showImages.map((img, id) => (
        <Wrapper key={id}>
          <ImgBox>
            <label onChange={onAddImg} htmlFor="input_file">
              {img === AddImg ? (
                <img src={img} alt="" />
              ) : (
                <ProductImg src={img} />
              )}
              <FileInput id="input_file" type="file" multiple />
            </label>
          </ImgBox>
        </Wrapper>
      ))}
    </Frame>
  );
}

const Frame = styled.div`
  width: 1150px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  width: 350px;
  height: 400px;
  border: solid ${({ theme }) => theme.color.gray100};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  &:hover {
    filter: brightness(95%);
  }
  &:active {
    filter: brightness(90%);
  }
`;

const ProductImg = styled.img`
  width: 350px;
  height: 400px;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;

export default ImgList;
