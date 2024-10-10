import { fetchEntries, fetchEntry } from "../../../contentful/client";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Params = {
  params: {
    postId: string;
  };
};

export const revalidate = false;

export default async function BlogPage({ params: { postId } }: Params) {
  const entry = await fetchEntry(postId);
  if (!entry) return notFound();

  return (
    <>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <div>
          <h1>{entry.fields.blogTitle}</h1>
          <small>Written by: {entry.fields.author}</small>
          <p>{entry.fields.post}</p>
        </div>
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await fetchEntries("blogpost");
  const postIds = posts.map((post) => ({
    postId: post.sys.id
  }));

  return postIds;
}
