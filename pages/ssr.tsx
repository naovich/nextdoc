interface postsType {
  id: number;
  uid: number;
  title: string;
  body: string;
}

interface postArrayType {
  data: postsType[];
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://dummyjson.com/posts`);
    const json = await res.json();
    const data = json.posts;

    return { props: { data } };
  } catch (e) {
    return { notFound: true };
  }
}

function Page(data: postArrayType) {
  const posts = data.data;
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id} style={{ margin: 5 }}>
          {post.title}
        </li>
      ))}
    </ol>
  );
}

export default Page;
