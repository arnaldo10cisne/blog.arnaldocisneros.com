"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavbarLink.module.scss";
import { NavigationLinkModel } from "@/app/lib/models";

export const NavbarLink = ({
  label,
  href,
  newTab = false,
  isSelectorOption = false,
}: NavigationLinkModel) => {
  const pathname = usePathname();
  const isCurrent: boolean = pathname === href;

  return (
    <Link
      key={label}
      href={href}
      className={`${styles.Link} ${isCurrent && !isSelectorOption ? styles.isCurrent : null} ${isSelectorOption ? styles.isSelectorOption : null}`}
      target={newTab ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
};
