import { fetchEntries } from "@/contentful/client";

// pages/index.js
export default async function HomePage() {
  const posts = await fetchEntries("blogpost");
  console.log(posts);
  interface posts {
    fields: {
      blogTitle: string;
      author: string;
      post: string;
    };
  }

  return (
    <div>
      <h1>hello</h1>
      {posts?.map(({ fields }) => (
        <div key={fields.author}>
          <h2>{fields.blogTitle}</h2>
          <small>{fields.author}</small>
          <p>{fields.post}</p>
        </div>
      ))}
    </div>
  );
}

// Optionally, you can enable revalidation by adding revalidate time in seconds:
export const revalidate = 60; // Revalidate every 60 seconds
