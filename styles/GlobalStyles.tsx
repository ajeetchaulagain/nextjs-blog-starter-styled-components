"use client";
import { createGlobalStyle } from "styled-components";
import { BaseStyles } from "./BaseStyles";
import { CSSReset } from "./CSSReset";

export const GlobalStyle = createGlobalStyle`
 ${CSSReset};
 ${BaseStyles};
`;
