// lib/contentful.js

import { createClient } from "contentful";
interface Posts {
  blogTitle: string;
  postId: string;
  author: string;
  post: string;
}
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE as string, // Your Space ID
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string, // Your Access Token
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT as string
});

export async function fetchEntries(contentType: string) {
  const entries = await client.getEntries<{
    fields: Posts;
    contentTypeId: string;
  }>({
    content_type: contentType
  });

  return entries.items;
}

export async function fetchEntry(id: string) {
  const entry = await client.getEntry<{
    fields: Posts;
    contentTypeId: string;
  }>(id);

  return entry;
}

export default client;
