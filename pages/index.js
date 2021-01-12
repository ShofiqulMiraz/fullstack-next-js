import Link from "next/link";

export const API_BACKEND_URL =
  "https://fullstack-next-js.vercel.app" || "http://localhost:3000";

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
  const response = await fetch(`${API_BACKEND_URL}/api/posts`);
  const data = await response.json();
  const posts = data.data;

  return { props: { posts } };
}

export default Index;
