import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/helpers/posts";
import { Paragraph } from "@/components/Paragraph";
import { PostCard } from "@/components/PostCard";
import { Heading2 } from "@/components/Heading";
import { PostWrapper } from "@/components/PostWrapper";

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

  return (
    <>
      <Heading2>Blog Posts</Heading2>
      {/* Rendering List of posts */}
      {allPostsData.map((post) => (
        <PostWrapper key={post.id}>
          <PostCard {...post} />
        </PostWrapper>
      ))}
    </>
  );
}
