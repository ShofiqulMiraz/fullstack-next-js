import Head from "next/head";
import { API_BACKEND_URL } from "..";

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1> {post.title} </h1>
      <p> {post.description} </p>
      <p> {post.author} </p>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`${API_BACKEND_URL}/api/posts/${params.id}`);
  const data = await response.json();
  const post = data.data;

  return { props: { post } };
}

export default SinglePost;
