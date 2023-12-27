import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/helpers/posts";
import { PostCard } from "@/components/PostCard";
import { Heading2 } from "@/components/Heading";
import { Spacer } from "@/components/Spacer";

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

export default function PostIndexPage() {
  const allPosts: PostData[] = getSortedPostsData();

  return (
    <>
      <Heading2>Blog Posts</Heading2>

      {allPosts.map((post, index) => (
        <div key={post.id}>
          {/* Adding top space for blog post cards except for first one */}
          {index > 0 && <Spacer size={24} />}
          <PostCard {...post} />
        </div>
      ))}
    </>
  );
}
