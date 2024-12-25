import React from "react";
import { NavbarLink } from "./NavbarLink";
import { NavbarSelector } from "./NavbarSelector";
import styles from "./Navbar.module.scss";
import {
  ABOUT_LINK,
  CATEGORIES_SELECTOR,
  HOME_LINK,
  LATESTS_POSTS_LINK,
  SOCIAL_MEDIA_LINKS,
} from "@/app/lib/constants";
import LOGO from "@/app/lib/assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Image
        src={LOGO}
        alt="Arnaldo Cisneros Logo"
        width={200}
        height={38}
        className={styles.Logo}
      />
      {SOCIAL_MEDIA_LINKS.map((link) => {
        return (
          <Link
            key={`${link.label}-link`}
            href={link.href}
            target={"_blank"}
            className={styles.socialMediaLink}
          >
            <Image
              key={`${link.label}-img`}
              src={link.icon}
              alt={`${link.label} icon`}
              width={19}
              height={19}
              className={styles.socialMediaIcon}
            />
          </Link>
        );
      })}
      {/* <div>SEARCH BAR</div> */}
      <div className={styles.Navbar_LinksContainer}>
        <NavbarLink {...HOME_LINK} />
        <NavbarSelector {...CATEGORIES_SELECTOR} />
        <NavbarLink {...LATESTS_POSTS_LINK} />
        <NavbarLink {...ABOUT_LINK} />
      </div>
    </nav>
  );
};
