// import Image from "next/image";
// import styles from "./page.module.scss";

import GetConnected_Section from "./ui/landing-page-sections/get-connected/GetConnected_Section";
import Hero_Section from "./ui/landing-page-sections/hero/Hero_Section";
import LatestPosts_Section from "./ui/landing-page-sections/latest-posts/LatestPosts_Section";
import Mission_Section from "./ui/landing-page-sections/mission/Mission_Section";
import Profile_Section from "./ui/landing-page-sections/profile/Profile_Section";

const Home = () => {
  return (
    <>
      <Hero_Section />
      <LatestPosts_Section />
      <Mission_Section />
      <GetConnected_Section />
      <Profile_Section />
    </>
  );
};

export default Home;
