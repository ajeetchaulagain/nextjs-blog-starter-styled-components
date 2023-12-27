import type { Metadata } from "next";
import { Copy } from "@/components/Copy";
import { Heading1 } from "@/components/Heading";
import { StyledImage } from "../page-styles";
import { Spacer } from "@/components/Spacer";

export const metadata: Metadata = {
  title: "Next.js blog app with styled components",
  description:
    "A next.js blog starter created using app router and configured with styled-components and typescript",
};

export default function AboutPage() {
  return (
    <>
      <Heading1>About</Heading1>
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
        building scalable and maintainable software applications
      </Copy>

      <Copy>
        This blog template is built using Next.js and is configured with support
        of styled-components and markdown for a blog post.
      </Copy>
    </>
  );
}
