import Link from "next/link";
import { Date } from "@/components/Date";
import utilStyles from "./utils.module.scss";
import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/helpers/posts";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Next.js blog app with styled components",
  description:
    "A next.js blog starter created using app router and configured with styled-components and typescript",
};

type PostData = {
  date: string;
  title: string;
  id: string;
};

export default function HomePage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return <Container>Hello</Container>;
}
