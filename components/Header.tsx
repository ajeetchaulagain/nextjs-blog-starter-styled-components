"use client";
import styled from "styled-components";
import { MaxWidthContainer } from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tunaBlack};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mabel};
  padding: 1.5rem 0;

  @media screen and (max-width: 656px) {
    padding: 1.5rem 1rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li``;

export const StyledHeaderLink = styled(Link)`
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.blueGreen};
  }
`;

const Nav = styled.ul`
  display: flex;
  ${NavItem}:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const Header = () => {
  const pathname = usePathname();

  return (
    <HeaderWrapper>
      <MaxWidthContainer>
        <NavBar>
          <StyledHeaderLink
            href="/"
            className={pathname === "/" ? "active" : ""}
          >
            YOUR NAME
          </StyledHeaderLink>
          <Nav>
            <NavItem>
              <StyledHeaderLink
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </StyledHeaderLink>
            </NavItem>
            <NavItem>
              <StyledHeaderLink
                href="/posts"
                className={pathname === "/posts" ? "active" : ""}
              >
                Posts
              </StyledHeaderLink>
            </NavItem>
          </Nav>
        </NavBar>
      </MaxWidthContainer>
    </HeaderWrapper>
  );
};
