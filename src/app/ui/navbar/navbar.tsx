import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarSelector from "./NavbarSelector";
import styles from "./Navbar.module.scss";
import {
  ABOUT_LINK,
  CATEGORIES_SELECTOR,
  HOME_LINK,
  LATESTS_POSTS_LINK,
} from "@/app/lib/constants";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div>LOGO</div>
      <div>SOCIAL MEDIA LINKS</div>
      <div>SEARCH BAR</div>
      <div className={styles.Navbar_LinksContainer}>
        <NavbarLink {...HOME_LINK} />
        <NavbarSelector {...CATEGORIES_SELECTOR} />
        <NavbarLink {...LATESTS_POSTS_LINK} />
        <NavbarLink {...ABOUT_LINK} />
      </div>
    </nav>
  );
};

export default Navbar;
