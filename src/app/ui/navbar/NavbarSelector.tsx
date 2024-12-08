"use client";

import { NavigationLinkModel } from "@/app/lib/models";
import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import styles from "./NavbarSelector.module.scss";

export interface NavbarSelectorProps {
  link: NavigationLinkModel;
  optionsList: NavigationLinkModel[];
}

const NavbarSelector = ({ link, optionsList }: NavbarSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdownMenu = (option: boolean) => {
    setIsOpen(option);
  };

  return (
    <div
      className={styles.Selector}
      onMouseEnter={() => {
        toggleDropdownMenu(true);
      }}
      onMouseLeave={() => {
        toggleDropdownMenu(false);
      }}
    >
      <NavbarLink {...link} />
      {isOpen ? (
        <div className={styles.OptionsList}>
          {optionsList.map((option, index) => (
            <NavbarLink key={index} {...option} isSelectorOption={true} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavbarSelector;
