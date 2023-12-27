"use client";
import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import React from "react";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { MaxWidthContainer, ContentWrapper } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const theme = {
  colors: {
    purpleHeart: "#7334c5",
    mabel: "#d9f6fa",
    blueGreen: "#49cff8",
    darkBlack: "##1a202c",
    tunaBlack: "#2d3748",
    lavenderMist: "#e2e8f0",
    softPeach: "#ededed",
  },
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Header />
            <MaxWidthContainer>
              <ContentWrapper>{children}</ContentWrapper>
            </MaxWidthContainer>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
