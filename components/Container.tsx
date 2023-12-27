"use client";
import styled from "styled-components";

// Max Width Container
export const MaxWidthContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

// Wrapper for content with the paddings
export const ContentWrapper = styled.div`
  padding: 3rem 0;
  @media screen and (max-width: 656px) {
    padding: 3rem 1rem;
  }
`;
