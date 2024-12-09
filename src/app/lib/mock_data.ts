import { ArticleModel, ArticleCategoriesEnum } from "./models";

export const MOCK_ARTICLES: ArticleModel[] = [
  // DEVELOPING
  {
    id: 1,
    article_url_path: "fullstack-javascript-vs-typescript",
    category: ArticleCategoriesEnum.DEVELOPING,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "JavaScript vs TypeScript en Desarrollo Fullstack",
    subtitle: "Comparativa para elegir la mejor herramienta",
    thumbnail_large: "/images/typescript_large.jpg",
    thumbnail_small: "/images/typescript_small.jpg",
    tags: ["JavaScript", "TypeScript", "Fullstack"],
    article_content: `
      <p>Como desarrollador fullstack, he usado tanto JavaScript como TypeScript en diversos proyectos. Mientras JavaScript brilla por su simplicidad inicial, TypeScript destaca en la escalabilidad y la reducción de errores a largo plazo. Este artículo analiza las ventajas y desventajas de ambas herramientas.</p>
    `,
    description:
      "Descubre cuál de estas herramientas es la mejor opción para tus proyectos fullstack.",
  },
  {
    id: 2,
    article_url_path: "mejorando-perfomance-con-nextjs",
    category: ArticleCategoriesEnum.DEVELOPING,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Mejorando el rendimiento con Next.js",
    subtitle: "Técnicas prácticas para apps más rápidas",
    thumbnail_large: "/images/nextjs_performance_large.jpg",
    thumbnail_small: "/images/nextjs_performance_small.jpg",
    tags: ["Next.js", "Performance", "Optimización"],
    article_content: `
      <p>Next.js ofrece múltiples herramientas para optimizar el rendimiento, desde la carga dinámica hasta la optimización de imágenes. Este artículo muestra ejemplos prácticos de cómo mejorar la velocidad y la experiencia del usuario en tus aplicaciones web.</p>
    `,
    description:
      "Aprende técnicas avanzadas para mejorar la velocidad de tus aplicaciones con Next.js.",
  },

  // CLOUD
  {
    id: 3,
    article_url_path: "arquitecturas-serverless",
    category: ArticleCategoriesEnum.CLOUD,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Introducción a arquitecturas serverless con AWS",
    subtitle: "Dale poder a tus aplicaciones sin preocuparte por servidores",
    thumbnail_large: "/images/serverless_large.jpg",
    thumbnail_small: "/images/serverless_small.jpg",
    tags: ["AWS", "Serverless", "Cloud"],
    article_content: `
      <p>Las arquitecturas serverless con AWS han transformado el desarrollo web. En este artículo, exploramos cómo herramientas como Lambda y API Gateway pueden ayudarte a construir aplicaciones escalables sin la necesidad de gestionar servidores.</p>
    `,
    description:
      "Conoce los fundamentos y beneficios de las arquitecturas serverless en AWS.",
  },
  {
    id: 4,
    article_url_path: "gestion-datos-rds-dynamodb",
    category: ArticleCategoriesEnum.CLOUD,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Gestionando datos con Amazon RDS y DynamoDB",
    subtitle: "Bases de datos relacionales vs NoSQL en AWS",
    thumbnail_large: "/images/rds_dynamodb_large.jpg",
    thumbnail_small: "/images/rds_dynamodb_small.jpg",
    tags: ["AWS", "Bases de datos", "DynamoDB", "RDS"],
    article_content: `
      <p>¿RDS o DynamoDB? Ambas opciones tienen ventajas claras dependiendo del caso de uso. Este artículo explora cuándo elegir una base de datos relacional o una base de datos NoSQL y cómo integrarlas en aplicaciones modernas.</p>
    `,
    description:
      "Explora las diferencias clave entre RDS y DynamoDB y cómo usarlas eficazmente.",
  },

  // LIFESTYLE
  {
    id: 5,
    article_url_path: "rutinas-productividad-desarrollador",
    category: ArticleCategoriesEnum.LIFESTYLE,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Rutinas de productividad como desarrollador",
    subtitle: "Cómo mantenerme enfocado en proyectos largos",
    thumbnail_large: "/images/productivity_large.jpg",
    thumbnail_small: "/images/productivity_small.jpg",
    tags: ["Productividad", "Lifestyle", "Desarrollo"],
    article_content: `
      <p>La productividad no solo depende de trabajar duro, sino de trabajar inteligentemente. En este artículo comparto las rutinas y herramientas que utilizo para mantenerme enfocado y eficiente durante jornadas largas como desarrollador.</p>
    `,
    description:
      "Aprende estrategias prácticas para mantener tu productividad como desarrollador.",
  },
  {
    id: 6,
    article_url_path: "balance-trabajo-vida",
    category: ArticleCategoriesEnum.LIFESTYLE,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "El balance entre trabajo y vida como desarrollador",
    subtitle: "Evita el burnout y disfruta el proceso",
    thumbnail_large: "/images/work_life_balance_large.jpg",
    thumbnail_small: "/images/work_life_balance_small.jpg",
    tags: ["Burnout", "Balance", "Lifestyle"],
    article_content: `
      <p>Ser desarrollador es apasionante, pero también puede ser agotador si no hay un balance adecuado. Aquí comparto consejos y experiencias para evitar el burnout y disfrutar más del camino.</p>
    `,
    description:
      "Descubre cómo encontrar el equilibrio perfecto entre tu trabajo y tu vida personal.",
  },

  // GAMEDEV
  {
    id: 7,
    article_url_path: "primeros-pasos-unity",
    category: ArticleCategoriesEnum.GAMEDEV,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Primeros pasos en Unity para desarrolladores",
    subtitle: "Crea tu primer juego desde cero",
    thumbnail_large: "/images/unity_intro_large.jpg",
    thumbnail_small: "/images/unity_intro_small.jpg",
    tags: ["Unity", "GameDev", "Tutorial"],
    article_content: `
      <p>Unity es una plataforma poderosa para crear videojuegos. En este tutorial aprenderás cómo instalar Unity, configurar un proyecto y crear tu primer juego en 2D con movimiento básico.</p>
    `,
    description:
      "Inicia tu camino en el desarrollo de videojuegos con Unity y crea tu primer proyecto.",
  },
  {
    id: 8,
    article_url_path: "optimizacion-juegos-moviles",
    category: ArticleCategoriesEnum.GAMEDEV,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Optimización de juegos móviles con Unity",
    subtitle: "Haz que tu juego sea rápido y fluido",
    thumbnail_large: "/images/mobile_optimization_large.jpg",
    thumbnail_small: "/images/mobile_optimization_small.jpg",
    tags: ["Unity", "GameDev", "Optimización"],
    article_content: `
      <p>En dispositivos móviles, el rendimiento es clave. Aprende las mejores prácticas para optimizar tu juego en Unity, incluyendo el manejo de gráficos, memoria y física para maximizar la experiencia del jugador.</p>
    `,
    description:
      "Mejora el rendimiento de tus juegos móviles en Unity con técnicas avanzadas.",
  },

  // DEVDIARY
  {
    id: 9,
    article_url_path: "actualizacion-proyecto-blog",
    category: ArticleCategoriesEnum.DEVDIARY,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Actualización del proyecto de blog personal",
    subtitle: "Progreso en la creación de mi plataforma con Next.js",
    thumbnail_large: "/images/blog_update_large.jpg",
    thumbnail_small: "/images/blog_update_small.jpg",
    tags: ["DevDiary", "Blog", "Progreso"],
    article_content: `
      <p>Estoy trabajando en un blog personal con Next.js y AWS. Esta semana implementé rutas dinámicas para artículos y comencé a optimizar el rendimiento con SSG. ¡Pronto estará disponible para el público!</p>
    `,
    description:
      "Una actualización sobre el progreso del blog personal utilizando Next.js y AWS.",
  },
  {
    id: 10,
    article_url_path: "experimento-lambda-playwright",
    category: ArticleCategoriesEnum.DEVDIARY,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Experimento: Automatización con Lambda y Playwright",
    subtitle: "Probando compatibilidad en funciones serverless",
    thumbnail_large: "/images/lambda_playwright_large.jpg",
    thumbnail_small: "/images/lambda_playwright_small.jpg",
    tags: ["Lambda", "Playwright", "Automatización"],
    article_content: `
      <p>Esta semana he estado experimentando con Playwright para automatizar tareas en funciones AWS Lambda. Aunque enfrenté problemas de compatibilidad inicial, las soluciones con Docker han sido prometedoras.</p>
    `,
    description:
      "Explora cómo Playwright y Lambda pueden usarse juntos para automatizar procesos.",
  },

  // GRABBAG
  {
    id: 11,
    article_url_path: "viaje-ingeniero-nube",
    category: ArticleCategoriesEnum.GRABBAG,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Un viaje como ingeniero de la nube",
    subtitle: "Reflexiones desde el avión",
    thumbnail_large: "/images/cloud_travel_large.jpg",
    thumbnail_small: "/images/cloud_travel_small.jpg",
    tags: ["Viajes", "Ingeniería", "Reflexiones"],
    article_content: `
      <p>En mi último viaje, reflexioné sobre cómo la nube nos ha permitido trabajar desde cualquier lugar del mundo. La tecnología ha cambiado nuestras vidas, y cada día se abren nuevas posibilidades.</p>
    `,
    description:
      "Una reflexión personal sobre la libertad que la tecnología en la nube brinda para trabajar desde cualquier lugar.",
  },
  {
    id: 12,
    article_url_path: "top-5-juegos-indie",
    category: ArticleCategoriesEnum.GRABBAG,
    date: new Date(),
    author: "Arnaldo Cisneros",
    title: "Top 5 juegos indie que todo desarrollador debería jugar",
    subtitle: "Creatividad y diseño en su máxima expresión",
    thumbnail_large: "/images/indie_games_large.jpg",
    thumbnail_small: "/images/indie_games_small.jpg",
    tags: ["Juegos indie", "Recomendaciones", "Creatividad"],
    article_content: `
      <p>Los juegos indie han redefinido cómo vemos la creatividad en el desarrollo de videojuegos. Desde la narrativa emocional de <i>Celeste</i> hasta la exploración visual de <i>Journey</i>, estos títulos muestran cómo equipos pequeños pueden impactar enormemente la industria. Aquí te presento cinco juegos que considero esenciales para cualquier desarrollador que busca inspiración.</p>
    `,
    description:
      "Descubre cinco juegos indie que destacan por su creatividad y diseño excepcional, ideales para inspirar a desarrolladores.",
  },
];
