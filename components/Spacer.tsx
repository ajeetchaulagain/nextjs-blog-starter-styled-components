"use client";
import styled from "styled-components";

export const Spacer = styled.span<{ size: number }>`
  display: block;
  min-height: ${({ size }) => size}px;
`;
