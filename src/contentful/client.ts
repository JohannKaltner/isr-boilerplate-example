// lib/contentful.js

import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string, // Your Space ID
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, // Your Access Token
  environment: process.env.CONTENTFUL_ENVIRONMENT as string
});

export async function fetchEntries(contentType: string) {
  const entries = await client.getEntries({
    content_type: contentType
  });
  return entries.items;
}

export default client;
