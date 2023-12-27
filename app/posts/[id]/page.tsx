import { Date } from "@/components/Date";
import { HTMLRenderer } from "@/components/HTMLRenderer";
import { Heading1 } from "@/components/Heading";
import { Spacer } from "@/components/Spacer";
import { getPostData } from "@/lib/helpers/posts";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export const generateMetadata = async ({ params }: Props) => {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
};

const PostPage = async ({ params }: Props) => {
  const postData: PostData = await getPostData(params.id);

  return (
    <>
      <Heading1>{postData.title}</Heading1>
      <Date dateString={postData.date} />
      <Spacer size={32} />
      <HTMLRenderer htmlString={postData.contentHtml} />
    </>
  );
};

export default PostPage;
