import { convertCompilerOptionsFromJson } from "typescript";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

interface postsType{
    id:number,
    uid:number,
    title:string,
    body:string,
}

interface postArrayType{
    posts: postsType[]
}

export default function Blog(props:postArrayType) {
 const {posts} = props;
 
  return (
    <ul>
        {posts.map((post)=> <li key={post.id}>{post.title}</li>)}
     
    </ul>
  );
}