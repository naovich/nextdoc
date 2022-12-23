import useData, { postsType } from "../Hooks/fetchData";

const PageFechWithHook = () => {
  const { data, error, isLoading } = useData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Aucune données</p>;
  }

  const posts = data.posts;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default PageFechWithHook;
