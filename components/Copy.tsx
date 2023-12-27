"use client";
import styled from "styled-components";

export const Copy = styled.p<{ textAlignment?: string }>`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: ${({ textAlignment }) =>
    textAlignment ? textAlignment : "left"};
`;
