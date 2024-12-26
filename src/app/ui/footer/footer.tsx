import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FOOTER_LINKS } from "@/app/lib/constants";
import LOGO_ICON from "@/app/lib/assets/svg/logo-icon-white.svg";
import Image from "next/image";
import classNames from "classnames";
import { FONT_PALANQUIN } from "@/app/lib/fonts";
import { capitalizeWords } from "@/app/lib/utility_functions";

export const Footer = () => {
  return (
    <footer className={`${styles.Footer}`}>
      <div className={`${styles.FooterLinkList}`}>
        {FOOTER_LINKS.map((link) => {
          return (
            <Link
              key={link.label}
              href={link.href}
              className={classNames(
                styles.FooterLink,
                FONT_PALANQUIN.className,
              )}
              target={link.newTab ? "_blank" : "_self"}
            >
              {capitalizeWords(link.label)}
            </Link>
          );
        })}
        <div className={`${styles.FooterLogo}`}>
          <Image src={LOGO_ICON} alt="logo" width={38} height={38} />
        </div>
      </div>
    </footer>
  );
};
