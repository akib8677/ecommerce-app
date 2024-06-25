import { index } from "@/lib/algolia";

export const fetchSearchResults = async (query: string) => {
  const { hits } = await index.search(query);
  return hits;
};

export const fetchProductById = async (id: string) => {
  try {
    const { hits } = await index.search('', {
      filters: `objectID:${id}`
    });
    return hits[0] || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

