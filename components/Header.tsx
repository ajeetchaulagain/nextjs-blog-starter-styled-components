"use client";

import styled from "styled-components";
import { Container } from "./Container";
import Link from "next/link";

const HeaderWrapper = styled.div`
  background-color: #414141;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mabel};
  padding: 1.5rem 0;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  & > a:hover {
    color: ${({ theme }) => theme.colors.blueGreen};
  }
`;

const Nav = styled.ul`
  display: flex;
  ${NavItem}:not(:first-child) {
    margin-left: 1rem;
  }
`;

const StyledHeading = styled.h1``;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <NavBar>
          <Link href="/">Your Name</Link>
          <Nav>
            <NavItem>
              <Link href="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link href="/posts">Posts</Link>
            </NavItem>
          </Nav>
        </NavBar>
      </Container>
    </HeaderWrapper>
  );
};
