import styled from "styled-components";
import { Star, EmptyStar } from "../../assets";

function Stars({ point }) {
  const starArray = [false, false, false, false, false];

  for (let i = 0; i < point; i++) {
    starArray[i] = true;
  }

  return (
    <StarContanier>
      {starArray.map((item, index) =>
        item ? (
          <img key={index} src={Star} />
        ) : (
          <img key={index} src={EmptyStar} />
        )
      )}
    </StarContanier>
  );
}

const StarContanier = styled.div`
  width: 80px;
  height: 20px;
  display: flex;
  align-items: center;
`;

export default Stars;
