import {
  ArticleModel,
  ArticleCategoriesEnum,
  HeroElementModel,
} from "./models";

export const MOCK_ARTICLES: ArticleModel[] = [
  // DEVELOPING
  {
    id: 1,
    article_url: "fullstack-javascript-vs-typescript",
    category: ArticleCategoriesEnum.DEVELOPING,
    date: new Date("2022-02-15"),
    author: "Arnaldo Cisneros",
    title: "JavaScript vs TypeScript en Desarrollo Fullstack",
    subtitle: "Comparativa para elegir la mejor herramienta",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["JavaScript", "TypeScript", "Fullstack"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/javascript_vs_typescript_en_desarrollo_fullstack.mdx",
    description:
      "Descubre cuál de estas herramientas es la mejor opción para tus proyectos fullstack.",
  },
  {
    id: 2,
    article_url: "mejorando-perfomance-con-nextjs",
    category: ArticleCategoriesEnum.DEVELOPING,
    date: new Date("2022-06-30"),
    author: "Arnaldo Cisneros",
    title: "Mejorando el rendimiento con Next.js",
    subtitle: "Técnicas prácticas para apps más rápidas",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Next.js", "Performance", "Optimización"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/mejorando_rendimiento_con_nextjs.mdx",
    description:
      "Aprende técnicas avanzadas para mejorar la velocidad de tus aplicaciones con Next.js.",
  },

  // CLOUD
  {
    id: 3,
    article_url: "arquitecturas-serverless",
    category: ArticleCategoriesEnum.CLOUD,
    date: new Date("2022-11-12"),
    author: "Arnaldo Cisneros",
    title: "Introducción a arquitecturas serverless con AWS",
    subtitle: "Dale poder a tus aplicaciones sin preocuparte por servidores",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["AWS", "Serverless", "Cloud"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/introduccion_arquitectura_serverless_aws.mdx",
    description:
      "Conoce los fundamentos y beneficios de las arquitecturas serverless en AWS.",
  },
  {
    id: 4,
    article_url: "gestion-datos-rds-dynamodb",
    category: ArticleCategoriesEnum.CLOUD,
    date: new Date("2023-03-08"),
    author: "Arnaldo Cisneros",
    title: "Gestionando datos con Amazon RDS y DynamoDB",
    subtitle: "Bases de datos relacionales vs NoSQL en AWS",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["AWS", "Bases de datos", "DynamoDB", "RDS"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/gestionando_datos_amazon_rds_dynamodb.mdx",
    description:
      "Explora las diferencias clave entre RDS y DynamoDB y cómo usarlas eficazmente.",
  },

  // LIFESTYLE
  {
    id: 5,
    article_url: "rutinas-productividad-desarrollador",
    category: ArticleCategoriesEnum.LIFESTYLE,
    date: new Date("2023-07-25"),
    author: "Arnaldo Cisneros",
    title: "Rutinas de productividad como desarrollador",
    subtitle: "Cómo mantenerme enfocado en proyectos largos",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Productividad", "Lifestyle", "Desarrollo"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/rutinas_productividad_desarrollador.mdx",
    description:
      "Aprende estrategias prácticas para mantener tu productividad como desarrollador.",
  },
  {
    id: 6,
    article_url: "balance-trabajo-vida",
    category: ArticleCategoriesEnum.LIFESTYLE,
    date: new Date("2023-10-19"),
    author: "Arnaldo Cisneros",
    title: "El balance entre trabajo y vida como desarrollador",
    subtitle: "Evita el burnout y disfruta el proceso",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Burnout", "Balance", "Lifestyle"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/balance_trabajo_vida_como_desarrollador.mdx",
    description:
      "Descubre cómo encontrar el equilibrio perfecto entre tu trabajo y tu vida personal.",
  },

  // GAMEDEV
  {
    id: 7,
    article_url: "primeros-pasos-unity",
    category: ArticleCategoriesEnum.GAMEDEV,
    date: new Date("2024-01-11"),
    author: "Arnaldo Cisneros",
    title: "Primeros pasos en Unity para desarrolladores",
    subtitle: "Crea tu primer juego desde cero",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Unity", "GameDev", "Tutorial"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/primeros_pasos_unity_desarrollador.mdx",
    description:
      "Inicia tu camino en el desarrollo de videojuegos con Unity y crea tu primer proyecto.",
  },
  {
    id: 8,
    article_url: "optimizacion-juegos-moviles",
    category: ArticleCategoriesEnum.GAMEDEV,
    date: new Date("2024-05-22"),
    author: "Arnaldo Cisneros",
    title: "Optimización de juegos móviles con Unity",
    subtitle: "Haz que tu juego sea rápido y fluido",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Unity", "GameDev", "Optimización"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/optimizacion_juegos_moviles_con_unity.mdx",
    description:
      "Mejora el rendimiento de tus juegos móviles en Unity con técnicas avanzadas.",
  },

  // DEVDIARY
  {
    id: 9,
    article_url: "actualizacion-proyecto-blog",
    category: ArticleCategoriesEnum.DEVDIARY,
    date: new Date("2024-08-15"),
    author: "Arnaldo Cisneros",
    title: "Actualización del proyecto de blog personal",
    subtitle: "Progreso en la creación de mi plataforma con Next.js",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["DevDiary", "Blog", "Progreso"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/placeholder_article_remote.mdx",
    description:
      "Una actualización sobre el progreso del blog personal utilizando Next.js y AWS.",
  },
  {
    id: 10,
    article_url: "experimento-lambda-playwright",
    category: ArticleCategoriesEnum.DEVDIARY,
    date: new Date("2024-11-03"),
    author: "Arnaldo Cisneros",
    title: "Experimento: Automatización con Lambda y Playwright",
    subtitle: "Probando compatibilidad en funciones serverless",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Lambda", "Playwright", "Automatización"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/placeholder_article_remote.mdx",
    description:
      "Explora cómo Playwright y Lambda pueden usarse juntos para automatizar procesos.",
  },

  // GRABBAG
  {
    id: 11,
    article_url: "viaje-ingeniero-nube",
    category: ArticleCategoriesEnum.GRABBAG,
    date: new Date("2025-01-05"),
    author: "Arnaldo Cisneros",
    title: "Un viaje como ingeniero de la nube",
    subtitle: "Reflexiones desde el avión",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Viajes", "Ingeniería", "Reflexiones"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/placeholder_article_remote.mdx",
    description:
      "Una reflexión personal sobre la libertad que la tecnología en la nube brinda para trabajar desde cualquier lugar.",
  },
  {
    id: 12,
    article_url: "top-5-juegos-indie",
    category: ArticleCategoriesEnum.GRABBAG,
    date: new Date("2025-01-20"),
    author: "Arnaldo Cisneros",
    title: "Top 5 juegos indie que todo desarrollador debería jugar",
    subtitle: "Creatividad y diseño en su máxima expresión",
    thumbnail_large: "https://placehold.co/2048x1365/png",
    thumbnail_small: "https://placehold.co/768x512/png",
    tags: ["Juegos indie", "Recomendaciones", "Creatividad"],
    article_content_location:
      "https://s3.us-east-1.amazonaws.com/blog.arnaldocisneros.com/articles/placeholder_article_remote.mdx",
    description:
      "Descubre cinco juegos indie que destacan por su creatividad y diseño excepcional, ideales para inspirar a desarrolladores.",
  },
];

export const MOCK_HERO_ELEMENTS: HeroElementModel[] = [
  {
    title: "Top 5 juegos indie que todo desarrollador debería jugar",
    category: ArticleCategoriesEnum.GRABBAG as string,
    description:
      "Descubre cinco juegos indie que destacan por su creatividad y diseño excepcional, ideales para inspirar a desarrolladores.",
    action_link: "top-5-juegos-indie",
  },
  {
    title: "Un viaje como ingeniero de la nube",
    category: ArticleCategoriesEnum.GRABBAG as string,
    description:
      "Una reflexión personal sobre la libertad que la tecnología en la nube brinda para trabajar desde cualquier lugar.",
    action_link: "viaje-ingeniero-nube",
  },
  {
    title: "Experimento: Automatización con Lambda y Playwright",
    category: ArticleCategoriesEnum.DEVDIARY as string,
    description:
      "Explora cómo Playwright y Lambda pueden usarse juntos para automatizar procesos.",
    action_link: "experimento-lambda-playwright",
  },
];
