import Link from "next/link";

export const API_BACKEND_URL =
  "https://fullstack-next-js.vercel.app" || "http://localhost:3000";

const Index = ({ posts }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Our Posts</h1>
        {posts.map((post, index) => (
          <div key={index}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <Link href={`/posts/${encodeURIComponent(post._id)}`}>
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export async function getServerSideProps() {
  const response = await fetch(`${API_BACKEND_URL}/api/posts`);
  const data = await response.json();
  const posts = data.data;

  return { props: { posts } };
}

export default Index;
