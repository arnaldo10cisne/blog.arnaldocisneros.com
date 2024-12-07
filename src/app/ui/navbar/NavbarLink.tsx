"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavbarLink.module.scss";
import { NavbarLinkModel } from "@/app/lib/models";

const NavbarLink = ({ label, href, newTab = false }: NavbarLinkModel) => {
  const pathname = usePathname();
  const isCurrent: boolean = pathname === href;

  return (
    <Link
      key={label}
      href={href}
      className={`${isCurrent ? styles.isCurrent : ""}`}
      target={newTab ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
