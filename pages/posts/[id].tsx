import { GetStaticPaths, GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
  body: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post: Post) => `/posts/${post.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

const PostPage = ({ post }: { post: Post }) => {
  return (
    <div>
      <span>{post.id}</span> <br />
      <span>{post.title}</span> <br />
      <span>{post.body}</span> <br />
    </div>
  );
};

export default PostPage;
