import { css } from "styled-components";

export const BaseStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
  }

  .main {
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
`;
