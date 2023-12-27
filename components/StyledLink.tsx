"use client";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.purpleHeart};
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.purpleHeart};
  }
`;
