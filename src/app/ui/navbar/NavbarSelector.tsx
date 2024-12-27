"use client";

import { NavigationLinkModel } from "@/app/lib/models";
import React, { useState } from "react";
import { NavbarLink } from "./NavbarLink";
import styles from "./NavbarSelector.module.scss";
import classNames from "classnames";

export interface NavbarSelectorProps {
  link: NavigationLinkModel;
  optionsList: NavigationLinkModel[];
}

export const NavbarSelector = ({ link, optionsList }: NavbarSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdownMenu = (option: boolean) => {
    setIsOpen(option);
  };

  return (
    <div
      className={styles.NavbarSelector}
      onMouseEnter={() => {
        toggleDropdownMenu(true);
      }}
      onMouseLeave={() => {
        toggleDropdownMenu(false);
      }}
    >
      <NavbarLink {...link} />
      <div className={classNames(styles.OptionsContainer)}>
        {isOpen ? (
          <div className={styles.OptionsList}>
            {optionsList.map((option, index) => (
              <NavbarLink key={index} {...option} isSelectorOption={true} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
