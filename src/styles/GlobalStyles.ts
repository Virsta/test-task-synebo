import { createGlobalStyle } from 'styled-components';
import background from '../img/background.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    border-radius: 0;
    font-family: "Montserrat", serif;
    background-image: url(${background});
    background-size: 100% 250px;
    background-position: top;
    background-repeat: no-repeat;

      @media screen and (max-width: 768px), (max-width: 375px) {
      background-size: 100% 100px;
    }
  }
`;

export default GlobalStyle;
