import React from "react";
import NavbarLink from "./NavbarLink";
import { NavbarLinkModel } from "@/app/lib/models";
import NavbarSelector, { NavbarSelectorProps } from "./NavbarSelector";

const HOME_LINK: NavbarLinkModel = {
  label: "HOME",
  href: "/",
};
const LATESTS_POSTS_LINK: NavbarLinkModel = {
  label: "LATEST POSTS",
  href: "/latest-posts",
};

const ABOUT_LINK: NavbarLinkModel = {
  label: "ABOUT",
  href: "https://www.arnaldocisneros.com/",
  newTab: true,
};

const CATEGORIES_SELECTOR: NavbarSelectorProps = {
  label: "CATEGORIES",
  optionsList: [
    {
      label: "DEVELOPING",
      href: "/categories/developing",
    },
    {
      label: "CLOUD",
      href: "/categories/cloud",
    },
    {
      label: "LIFESTYLE",
      href: "/categories/lifestyle",
    },
    {
      label: "GAMEDEV",
      href: "/categories/gamedev",
    },
    {
      label: "DEV DIARY",
      href: "/categories/dev-diary",
    },
    {
      label: "THE GRAB BAG",
      href: "/categories/grab-bag",
    },
  ],
};

const Navbar = () => {
  return (
    <nav>
      <div>LOGO</div>
      <div>SOCIAL MEDIA LINKS</div>
      <div>SEARCH BAR</div>
      <div>
        <NavbarLink {...HOME_LINK} />
        <NavbarSelector {...CATEGORIES_SELECTOR} />
        <NavbarLink {...LATESTS_POSTS_LINK} />
        <NavbarLink {...ABOUT_LINK} />
      </div>
    </nav>
  );
};

export default Navbar;
