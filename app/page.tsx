import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/helpers/posts";
import { Copy } from "@/components/Copy";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Heading2 } from "@/components/Heading";
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

      <Spacer size={24} />

      <Copy>
        Hello. I am software engineer at X company. I am passionate about
        building scalable and maintainable software applications.
      </Copy>

      <Copy>
        This blog template is built using{" "}
        <strong>Next.js, Typescript, styled-components</strong> and is
        configured to render markdown blog posts.{" "}
        <StyledLink href="/">See Github repo to learn more.</StyledLink>
      </Copy>

      <Spacer size={32} />

      <Heading2>Recent Blog Posts</Heading2>

      {allPostsData.map((post, index) => (
        <div key={post.id}>
          {/* Adding top space for blog post cards except for first one */}
          {index > 0 && <Spacer size={24} />}
          <BlogPostCard {...post} />
        </div>
      ))}
    </>
  );
}
