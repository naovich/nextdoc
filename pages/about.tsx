import axios from "axios";

interface postsType {
  id: number;
  uid: number;
  title: string;
  body: string;
}

interface postArrayType {
  posts: {
    posts: postsType[];
  };
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    const posts = res.data;
    return {
      props: {
        posts,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

const Blog = (props: postArrayType) => {
  const { posts } = props.posts;
  return (
    <div>
      <h3>GetStaticPropops</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
