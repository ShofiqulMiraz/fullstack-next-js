import Head from "next/head";

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>single post page</h1>
      <p> {post.title} </p>
      <p> {post.description} </p>
      <p> {post.author} </p>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const data = await response.json();
  const post = data.data;

  return { props: { post } };
}

export default SinglePost;