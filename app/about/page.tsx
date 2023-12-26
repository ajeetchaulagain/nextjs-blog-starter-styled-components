import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/helpers/posts";
import { Paragraph } from "@/components/Paragraph";
import { PostCard } from "@/components/PostCard";
import { Heading2 } from "@/components/Heading";
import { PostWrapper } from "@/components/PostWrapper";
import { StyledImage } from "../page-styles";

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

export default function AboutPage() {
  return (
    <>
      <StyledImage
        priority
        src="/images/avatar-profile.jpg"
        height={144}
        width={144}
        alt="avatar-profile-image"
      />

      <Paragraph>
        Hello. I am software engineer at X company. I am passionate about
        building scalable and maintainable software applications
      </Paragraph>

      <Paragraph>
        This blog template is built using Next.js and is configured with support
        of styled-components and markdown for a blog post.
      </Paragraph>
    </>
  );
}
