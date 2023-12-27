"use client";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blueGreen};
  &:hover,
  &.active {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.blueGreen};
  }
`;
