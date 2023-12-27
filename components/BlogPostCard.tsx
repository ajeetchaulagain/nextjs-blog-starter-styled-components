"use client";
import Link from "next/link";
import { Date } from "@/components/Date";
import styled from "styled-components";
import { Heading3 } from "./Heading";

type PostCardProps = {
  date: string;
  title: string;
  id: string;
};

const StyledBlogCardLink = styled(Link)`
  & > div {
    border: 1px solid black;
    padding: 1.2rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.lavenderMist};
  }

  & :hover {
    background-color: ${({ theme }) => theme.colors.softPeach};
  }
`;

export const BlogPostCard = ({ id, date, title }: PostCardProps) => {
  return (
    <StyledBlogCardLink href={`/posts/${id}`}>
      <div>
        <Heading3>{title}</Heading3>
        <Date dateString={date} />
      </div>
    </StyledBlogCardLink>
  );
};
