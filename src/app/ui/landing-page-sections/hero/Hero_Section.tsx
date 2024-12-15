"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero_Section.module.scss";
import { MOCK_HERO_ELEMENTS } from "@/app/lib/mock_data";
import { HeroElement } from "./HeroElement";

export const Hero_Section = () => {
  const [currentElement, setCurrentElement] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const heroElements = MOCK_HERO_ELEMENTS;

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
      <button
        className={styles.PreviousButton}
        onClick={() =>
          goToElement(
            (currentElement - 1 + heroElements.length) % heroElements.length,
          )
        }
      >
        PREVIOUS
      </button>
      <HeroElement
        key={currentElement}
        element={heroElements[currentElement]}
      />
      <button
        className={styles.NextButton}
        onClick={() => goToElement((currentElement + 1) % heroElements.length)}
      >
        NEXT
      </button>
      <div className={styles.ElementsNavigation}>
        {heroElements.map((element, index) => {
          return (
            <button
              key={element.title}
              onClick={() => goToElement(index)}
              className={styles.ElementsNavigationButton}
            >
              {`Go to ${heroElements.indexOf(element) + 1}`}
            </button>
          );
        })}
      </div>
    </section>
  );
};
