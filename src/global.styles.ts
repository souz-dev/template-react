/* eslint-disable camelcase */
import Error from "./assets/icons/error.svg";
import Success from "./assets/icons/success.svg";
import styled, { createGlobalStyle, css } from "styled-components";

type DivisorType = {
  retreat?: number;
};

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --white: #FFFFFF;
    --gray: #DADCE3;
    --red: #F9675B;
    --green: #38B878;
    --yellow: #F9D65B;
    --cyan: #1c9ab5;
    --black: #000000;

    --background-gray: #F3F5F9;

    --neutral:#F3F5F9;
    --neutral-400: #979AA5;
    --neutral-600: #5A5D68;

    --blue-dark-500:#3366FF;
    --blue-dark-600: #254EDB;
    --blue-dark-800: #102693;

    --blue-light-200: #ADC8FF;
    --blue-light-400: #D6E4FF;
    --blue-light-500: #3366FF;

    --red-light-100: #FAE0D2;
    --red-light-600:  #871821;
    --red-light-800: #5B0A1F;

    --green-light-100: #E3F8CC;
    --green-light-600: #19660A;
    --green-light-800:  #054504;

    --yellow-light-100: #FBEECA;
    --yellow-light-600: #9B5203;

    --cyan-light-100: #C7F9ED;
    --cyan-light-600: #006074;

    --background: #F0F2F5;
    --text-title: #35373F;
    --text: #5A5D68;
    --box-shadow: #18274b14;
  }


  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: Archivo, -apple-system, BlinkMacSystemFont, sans-serif;

    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--text);
      border-radius: 1rem;
    }
  }

  body {
    color: var(--text);
  }

  h1, h2, h3, h4,h5, h6, strong {
    font-weight: 600;
  }

  p, span, a, th, td {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  small {
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--neutral-400);
  }

  svg {
    display: block;
  }

  h3 {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--text-title);
  }
`;

export const Divisor = styled.hr<DivisorType>`
  border: none;
  border-bottom: 0.1rem solid var(--gray);

  ${({ retreat }) =>
    retreat
      ? css`
          width: calc(100% + ${retreat * 2}rem);
          margin: 0 -${retreat}rem;
        `
      : css`
          width: 100%;
          margin: initial;
        `}
`;

export const MaxContent = styled.div`
  width: max-content;
`;

export const ErrorIcon = styled(Error)`
  color: var(--red);
`;

export const SuccessIcon = styled(Success)`
  color: var(--green);
`;
