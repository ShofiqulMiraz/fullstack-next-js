import Link from "next/link";

const Index = ({ posts }) => (
  <>
    <h1>pets</h1>
    {posts.map((post, index) => (
      <div key={index}>
        <h1> {post.title} </h1>
        <Link href={`/posts/${encodeURIComponent(post._id)}`}>
          <a>{post.title}</a>
        </Link>
      </div>
    ))}
  </>
);

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/posts`);
  const data = await response.json();
  const posts = data.data;

  return { props: { posts } };
}

export default Index;
