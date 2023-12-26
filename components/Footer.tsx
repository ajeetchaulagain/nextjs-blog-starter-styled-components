"use client";

import { Container } from "./Container";
import styled from "styled-components";
import { Paragraph } from "./Paragraph";

const FooterWrapper = styled.div`
  margin-top: 5rem;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Paragraph>2023 © Your Name.</Paragraph>
        <a href="https://www.freepik.com/free-ai-image/3d-illustration-hipster-man-with-mustache-eyeglasses_88951866.htm#query=avatar&position=42&from_view=keyword&track=sph&uuid=f3ace6b3-0593-4526-8a91-7c4c40160fb4">
          Image By flatart
        </a>
      </Container>
    </FooterWrapper>
  );
};
