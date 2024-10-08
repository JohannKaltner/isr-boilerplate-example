import { fetchEntries } from "@/contentful/client";

// pages/index.js
export default async function HomePage() {
  const posts = await fetchEntries("blogpost");

  return (
    <div>
      <h1>hello</h1>
      {posts?.map(({ fields, sys }) => (
        <div key={fields.author}>
          <h2>
            <a href={`/posts/${sys.id}`}>{fields.blogTitle}</a>
          </h2>
        </div>
      ))}
    </div>
  );
}

// Optionally, you can enable revalidation by adding revalidate time in seconds:
export const revalidate = 60; // Revalidate every 60 seconds
