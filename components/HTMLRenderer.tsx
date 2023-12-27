"use client";
import { MarkdownStyles } from "@/styles/MarkdownStyles";
import styled from "styled-components";

type Props = {
  htmlString: string;
};

const HTMLRendererWrapper = styled.div`
  ${MarkdownStyles};
`;

export const HTMLRenderer = ({ htmlString }: Props) => {
  return (
    <HTMLRendererWrapper dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};
