"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero_Section.module.scss";
import { HeroElement } from "./HeroElement";
import { ArticleModel } from "@/app/lib/models";
import { Hero_Section_btn } from "./Hero_Section_btn";

interface LatestPosts_SectionProps {
  article_list: ArticleModel[];
}

export const Hero_Section = ({ article_list }: LatestPosts_SectionProps) => {
  const [currentElement, setCurrentElement] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const heroElements = article_list;

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentElement((prev) => (prev + 1) % heroElements.length);
    }, 7000);
  };

  const clearAndRestartInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startInterval();
  };

  const goToElement = (position: number) => {
    setCurrentElement(() => position);
    clearAndRestartInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  });

  return (
    <section className={styles.Hero_Section}>
      <HeroElement
        key={currentElement}
        element={heroElements[currentElement]}
      />
      <div className={styles.ElementsNavigation}>
        {heroElements.map((element, index) => (
          <Hero_Section_btn
            key={element.title}
            element={element}
            index={index}
            navigationFunction={goToElement}
            isCurrent={index === currentElement}
          />
        ))}
      </div>
    </section>
  );
};
