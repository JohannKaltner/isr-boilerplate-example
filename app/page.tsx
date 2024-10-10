import { fetchEntries } from "../contentful/client";

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

export const revalidate = false;
