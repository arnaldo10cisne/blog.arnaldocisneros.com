import {
  getHeroArticleItemsFromDynamoDB,
  getLastestArticlesFromDynamoDB,
} from "./lib/api_utils";
import { ArticleModel } from "./lib/models";
import { GetConnected_Section } from "./ui/landing-page-sections/get-connected/GetConnected_Section";
import { Hero_Section } from "./ui/landing-page-sections/hero/Hero_Section";
import { LatestPosts_Section } from "./ui/landing-page-sections/latest-posts/LatestPosts_Section";
import { Mission_Section } from "./ui/landing-page-sections/mission/Mission_Section";
import { Profile_Section } from "./ui/landing-page-sections/profile/Profile_Section";

const Home = async () => {
  const heroArticlesResponse = await getHeroArticleItemsFromDynamoDB({
    limit: 4,
  });
  const heroArticles: ArticleModel[] = heroArticlesResponse.Items;

  const latestsArticlesResponse = await getLastestArticlesFromDynamoDB({
    limit: 4,
  });
  const latestsArticles: ArticleModel[] = latestsArticlesResponse.Items;
  return (
    <>
      <Hero_Section article_list={heroArticles} />
      <LatestPosts_Section article_list={latestsArticles} />
      <Mission_Section />
      <GetConnected_Section />
      <Profile_Section />
    </>
  );
};
export default Home;
