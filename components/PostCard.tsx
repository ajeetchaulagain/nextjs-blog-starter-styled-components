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

const StyledLink = styled(Link)`
  & > div {
    border: 1px solid black;
    padding: 1.2rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.lavenderMist};

    & > span {
      color: ${({ theme }) => theme.colors.purpleHeart};
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  & :hover {
    background-color: ${({ theme }) => theme.colors.softPeach};
  }
`;

// const PostCardWrapper = styled.div`

export const PostCard = ({ id, date, title }: PostCardProps) => {
  return (
    <StyledLink href={`/posts/${id}`}>
      <div>
        <Heading3>{title}</Heading3>
        <span>
          <Date dateString={date} />
        </span>
      </div>
    </StyledLink>
  );
};
