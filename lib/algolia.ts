import algoliasearch, { SearchIndex } from "algoliasearch";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!
);

const index: SearchIndex = client.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string
);

export { client, index };
