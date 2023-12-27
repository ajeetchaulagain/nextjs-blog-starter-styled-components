import { css } from "styled-components";

/* These styles are needed to style the HTML string  for a markdown posts.
 See Usage in HTMLRenderer component */

export const MarkdownStyles = css`
  /* @group Markdown Base Styles */
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: 1rem;
  line-height: 1.6;
  /* @end */

  /* @group Heading Styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 1.25rem;
  }
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 1.3rem;
    font-weight: 600;
  }
  h6 {
    font-size: 1.3rem;
    font-weight: 600;
  }
  /* @end*/

  /* @group Paragraph Styles */
  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  /* @end */

  /* @group List styles */
  ol,
  ul {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: disc;
  }

  ol ul,
  ol ol,
  ul ul,
  ul ol {
    margin-bottom: 0.75rem;
  }

  li {
    margin: 0.5em 0 0 1rem;
  }
  /* @end */

  abbr {
    font-variant: small-caps;
    font-weight: 600;
    text-transform: lowercase;
    color: #808080;
  }

  abbr[title]:hover {
    cursor: help;
  }

  /* @group Block Quotes styles ------------------------------------------ */
  blockquote {
    border-left: 5px solid #9d9c9c;
    padding-left: 0.75em;

    font-style: italic;
  }

  blockquote + figcaption {
    display: block;

    margin-top: -1.5rem;
    margin-bottom: 1.5rem;

    font-size: 75%;
    text-align: right;
  }

  blockquote + figcaption:before {
    content: "— ";
    opacity: 0.05;
  }
  /* @end */

  /* @group Pre-formatted and Code styles */
  pre {
    overflow: auto;
    line-height: 1.5;
    margin: 0.75rem 0;
    padding: 0.75rem 1.2rem;
    font-size: 0.9rem;
    white-space: pre;
    color: ${({ theme }) => theme.colors.lavenderMist};
    background-color: ${({ theme }) => theme.colors.tunaBlack};
    border-radius: 1rem;
  }

  code {
    font-size: 1rem;
    padding: 0 0.25em;
    border-radius: 0.3rem;
    white-space: pre;
    font-family: var(--menlo-font);
    color: ${({ theme }) => theme.colors.lavenderMist};
    background-color: ${({ theme }) => theme.colors.tunaBlack};
  }

  pre code {
    padding: 0;
    word-wrap: normal;
    white-space: pre-wrap;
  }

  pre code,
  pre tt {
    background-color: transparent;
    border: none;
  }
  /* @end */

  /* @group Anchor link styles */
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.purpleHeart};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  /* @end */

  /* @group Other styles */
  small {
    font-size: 65%;
  }

  hr {
    margin: 0.75rem 0;
    opacity: 0.5;
  }
  /* @end */
`;
