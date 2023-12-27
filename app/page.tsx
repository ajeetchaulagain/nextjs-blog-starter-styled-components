import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/helpers/posts";
import { Copy } from "@/components/Copy";
import { PostCard } from "@/components/PostCard";
import { Heading1, Heading2 } from "@/components/Heading";
import { PostWrapper } from "@/components/PostWrapper";
import { StyledImage } from "./page-styles";
import { Spacer } from "@/components/Spacer";
import { StyledLink } from "@/components/StyledLink";

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
      <StyledImage
        priority
        src="/images/avatar-profile.jpg"
        height={144}
        width={144}
        alt="avatar-profile-image"
      />

      <Copy>
        Hello. I am software engineer at X company. I am passionate about
        building scalable and maintainable software applications
      </Copy>

      <Copy>
        This blog template is built using <strong>Next.js</strong> and is
        configured with support of styled-components and markdown for a blog
        post. <StyledLink href="/">View details on Docs</StyledLink>
      </Copy>

      <Spacer size={32} />

      <Heading2>Recent Blog Posts</Heading2>

      {allPostsData.map((post) => (
        <PostWrapper key={post.id}>
          <PostCard {...post} />
        </PostWrapper>
      ))}
    </>
  );
}
