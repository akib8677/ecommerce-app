import { client } from "@/lib/algolia";
const index = client.initIndex("cart");

export async function addProductTOCart(data: any) {
  try {
    await index.saveObject(data);
  } catch (error) {
    console.error("Error adding objects to Algolia:", error);
  }
}

export async function removeProductToCart(objectID:string) {
  try {
    const result = await index.deleteObject(objectID);
    return result;
  } catch (error) {
    console.error('Error deleting product from Algolia:', error);
    throw error;
  }
}

export async function fetchCartItems() {
  try {
    const searchResponse = await index.search('', {
      hitsPerPage: 1000,
    });
    return searchResponse.hits;
  } catch (error) {
    console.error('Error fetching cart items from Algolia:', error);
    throw error;
  }
}