import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FOOTER_LINKS } from "@/app/lib/constants";

export const Footer = () => {
  return (
    <footer className={`${styles.Footer}`}>
      <div className={`${styles.FooterLinkList}`}>
        {FOOTER_LINKS.map((link) => {
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.FooterLink}`}
              target={link.newTab ? "_blank" : "_self"}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className={`${styles.FooterLogo}`}>LOGO</div>
    </footer>
  );
};
