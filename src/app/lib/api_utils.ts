import { TESTING_URL } from "./constants";

// Reusable fetch handler
const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export const getArticleItemFromDynamoDB = async (article_url: string) => {
  return await fetchData(`${TESTING_URL}?article_url=${article_url}`);
};
