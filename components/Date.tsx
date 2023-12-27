"use client";
import { parseISO, format } from "date-fns";
import styled from "styled-components";

type DateProps = {
  dateString: string;
};

const StyledTime = styled.time`
  color: ${({ theme }) => theme.colors.purpleHeart};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Date = ({ dateString }: DateProps) => {
  const date = parseISO(dateString);
  return (
    <StyledTime dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </StyledTime>
  );
};
