import { ArticleCategoriesEnum, HeroElementModel } from "./models";

export const MOCK_HERO_ELEMENTS: HeroElementModel[] = [
  {
    title: "Top 5 juegos indie que todo desarrollador debería jugar",
    category: ArticleCategoriesEnum.GRABBAG as string,
    description:
      "Descubre cinco juegos indie que destacan por su creatividad y diseño excepcional, ideales para inspirar a desarrolladores.",
    article_url: "top-5-juegos-indie",
  },
  {
    title: "Un viaje como ingeniero de la nube",
    category: ArticleCategoriesEnum.GRABBAG as string,
    description:
      "Una reflexión personal sobre la libertad que la tecnología en la nube brinda para trabajar desde cualquier lugar.",
    article_url: "viaje-ingeniero-nube",
  },
  {
    title: "Experimento: Automatización con Lambda y Playwright",
    category: ArticleCategoriesEnum.DEVDIARY as string,
    description:
      "Explora cómo Playwright y Lambda pueden usarse juntos para automatizar procesos.",
    article_url: "experimento-lambda-playwright",
  },
];
