import { TESTING_URL } from "./constants";
import { ArticleCategoriesEnum } from "./models";

interface getLastestArticlesFromDynamoDBParams {
  category?: ArticleCategoriesEnum | null;
  limit?: number;
  page_number?: number;
}

interface getHeroArticleItemsFromDynamoDBParams {
  limit: number;
}

// Reusable fetch handler
const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Network response was not ok");
  }

  return await response.json();
};

export const getArticleItemFromDynamoDB = async (article_url: string) => {
  return await fetchData(`${TESTING_URL}?article_url=${article_url}`);
};

export const getHeroArticleItemsFromDynamoDB = async ({
  limit,
}: getHeroArticleItemsFromDynamoDBParams) => {
  const limitStringParam = limit ? `limit=${String(limit)}` : "";
  return await fetchData(`${TESTING_URL}?${limitStringParam}&highlight=true`);
};

export const getLastestArticlesFromDynamoDB = async ({
  category = null,
  limit,
  page_number = 1,
}: getLastestArticlesFromDynamoDBParams) => {
  const categoryStringParam = category ? `category=${category}` : "";
  const limitStringParam = limit ? `&limit=${String(limit)}` : "";
  const pageNumberStringParam = `&page_number=${page_number}`;
  return await fetchData(
    `${TESTING_URL}?${categoryStringParam}${limitStringParam}${pageNumberStringParam}`,
  );
};
