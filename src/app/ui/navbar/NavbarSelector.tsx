"use client";

import { NavbarLinkModel } from "@/app/lib/models";
import React, { useState } from "react";
import NavbarLink from "./NavbarLink";

export interface NavbarSelectorProps {
  label: string;
  optionsList: NavbarLinkModel[];
}

const NavbarSelector = ({ label, optionsList }: NavbarSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdownMenu = (option: boolean) => {
    setIsOpen(option);
  };

  return (
    <div
      onMouseEnter={() => {
        toggleDropdownMenu(true);
      }}
      onMouseLeave={() => {
        toggleDropdownMenu(false);
      }}
    >
      <button>{label}</button>
      {isOpen ? (
        <ul>
          <li>
            {optionsList.map((option, index) => (
              <NavbarLink key={index} {...option} />
            ))}
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default NavbarSelector;
