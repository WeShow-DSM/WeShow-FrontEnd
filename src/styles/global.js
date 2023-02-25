import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        body{
            background: ${({ theme }) => theme.color.gray50};
        }
            

    }
`;

export default GlobalStyle;
