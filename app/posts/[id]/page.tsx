import { Date } from "@/components/Date";

import { getAllPostIds, getPostData } from "@/lib/helpers/posts";

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
      <h1>{postData.title}</h1>

      <div>
        <Date dateString={postData.date} />
      </div>

      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
};

export default PostPage;
