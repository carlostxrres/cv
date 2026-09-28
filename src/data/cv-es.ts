import { type Cv } from "@/types/cv";

const cv: Cv = {
  name: "Carlos",
  lastName: "Torres Moral",
  title: "Técnico Superior de Gestión",
  aboutMe:
    "Profesional versátil que conecta la ciencia política, la educación y el desarrollo de software, con experiencia en entornos diversos (como autónomo, en pymes, en una gran corporación y en la administración pública).\n\nEx desarrollador único para un equipo de 80 personas en Amazon, donde diseñé herramientas de automatización de procesos y potencié la toma de decisiones basada en datos. Actualmente soy técnico de gestión en el Ayuntamiento de Barcelona.",
    // aplicando un enfoque pragmático y tecnológico a las políticas públicas y las operaciones
  contactDetails: [
    {
      label: "Correo",
      value: {
        text: "ctorresmoral@gmail.com",
        url: "mailto:ctorresmoral@gmail.com",
      },
    },
    {
      label: "Teléfono",
      value: {
        text: "(+34) 644 320 094",
        url: "tel:+34644320094",
      },
    },
    {
      label: "GitHub",
      value: {
        text: "/carlostxrres",
        url: "https://github.com/carlostxrres",
      },
    },
    {
      label: "LinkedIn",
      value: {
        text: "/carlostorrxs",
        url: "https://www.linkedin.com/in/carlostorrxs",
      },
    },
    {
      label: "Ubicación",
      value: "Barcelona",
    },
  ],
  education: [
    {
      institution: "Ironhack",
      title: "Curso de Data Analytics",
      periodStart: "2024-11",
      periodEnd: "2024-12",
      link: {
        text: "Certificado",
        url: "https://www.credential.net/fd65c6e8-e80c-411b-afbc-36eb6573550b",
      },
      description:
        "Curso de 60 horas sobre análisis de datos, centrado en SQL para la consulta de datos y Python con Pandas y NumPy para la manipulación y el análisis de datos.",
      tags: ["MySQL", "Python", "Pandas", "NumPy"],
    },
    {
      institution: "Amazon Web Services (AWS)",
      title: "AWS Certified AI Practitioner",
      periodStart: "2026-01",
      periodEnd: "2026-01",
      link: {
        text: "Certificado",
        url: "https://www.credly.com/badges/a0efa725-f469-4aa8-93b9-94e6e78932e7/public_url",
      },
      description:
        "Superación del examen AIF-C01, que acredita conocimientos de los fundamentos de IA/ML en AWS (IA generativa, modelos fundacionales, conceptos de ML, IA responsable, seguridad y servicios de IA/ML de AWS como Bedrock y SageMaker).",
      tags: ["Fundamentos de IA", "AWS AI/ML"],
    },
    {
      institution: "Amazon Web Services (AWS)",
      title: "AWS Certified Cloud Practitioner",
      periodStart: "2024-11",
      periodEnd: "2024-11",
      link: {
        text: "Certificado",
        url: "https://www.credly.com/badges/59dd83b5-d3ad-4229-b7fa-e0c584d7e170/public_url",
      },
      description:
        "Superación del examen CLF-C02, que acredita conocimientos de los fundamentos de la nube y de AWS (servicios principales, infraestructura, redes, seguridad, monitorización, precios, soporte y migración).",
      tags: ["Fundamentos de cloud", "Fundamentos de AWS"],
    },
    {
      institution: "Ironhack",
      title: "Bootcamp de front-end web",
      periodStart: "2024-03",
      periodEnd: "2024-07",
      link: {
        text: "Certificado",
        url: "https://www.credential.net/a0ba9540-bf26-4ab8-b125-11f51187ed00",
      },
      description: "Bootcamp de desarrollo front-end centrado en Vue 3.",
      tags: ["Vue.js", "JavaScript", "HTML", "CSS", "Git"],
    },
    {
      institution: "Ironhack",
      title: "Bootcamp de back-end web",
      periodStart: "2023-02",
      periodEnd: "2023-06",
      link: {
        text: "Certificado",
        url: "https://www.credential.net/ffaa5321-123d-4963-bff8-159456a2cde0",
      },
      description:
        "Iniciación al desarrollo back-end con la construcción de una API REST inmobiliaria, adquiriendo conocimientos de las capas de controlador, servicio, repositorio y datos.",
      tags: ["Java", "Spring Boot", "Maven", "JPA", "MySQL", "Git"],
    },
    {
      institution: "Universitat Autònoma de Barcelona",
      title: "Grado en Ciencia Política y Gestión Pública",
      periodStart: "2012-09",
      periodEnd: "2017-07",
      description: "Especialización en Relaciones Internacionales.",
    },
  ],
  projects: [
    {
      title: "Text-to-HTML",
      description:
        "Editor WYSIWYG de HTML que permite guardar y cargar plantillas.",
      tags: ["React", "JavaScript", "AWS S3", "AWS Route 53"],
      link: {
        text: "Ver en GitHub",
        url: "https://github.com/carlostxrres/text-to-html",
      },
    },
    {
      title: "Keyglow",
      description:
        "Aplicación web para comunicar combinaciones de teclas generando imágenes de un teclado con las teclas resaltadas.",
      tags: ["React", "JavaScript", "SCSS"],
      link: {
        text: "Ver en GitHub",
        url: "https://github.com/carlostxrres/keyglow",
      },
    },
  ],
  work: [
    {
      title: "Técnico superior de gestión (Comisionada de Acción Social)",
      institution: "Ayuntamiento de Barcelona",
      periodStart: "2026-10-01",
      periodEnd: null,
      description: "",
      bulletPoints: [],
      tags: [],
    },
    {
      title: "Técnico superior de gestión (Dirección de Educación)",
      institution: "Ayuntamiento de Barcelona",
      periodStart: "2026-03-02",
      periodEnd: "2026-09-30",
      description: "Soporte operativo y transversal a la Dirección de Educación en la gestión de proyectos que promueven los principios de la Carta de Ciudades Educadoras en Barcelona.",
      bulletPoints: [],
      tags: [],
    },
    {
      title: "CS Andon Cord Subject Matter Expert (L4)",
      institution: "Amazon",
      periodStart: "2025-05",
      periodEnd: "2026-03",
      description:
        "Partiendo de las responsabilidades de mi puesto anterior, mi papel se amplió para formar parte de la gestión del equipo.",
      bulletPoints: [
        "Responsable del seguimiento de los KPI de un equipo de más de 80 personas.",
        "Automatización de 8 informes semanales sobre la productividad y la calidad del equipo.",
        "Análisis de datos para estudios ad hoc.",
        "Mentoría de un desarrollador júnior.",
        "Consultoría técnica para varios equipos.",
        "Mantenimiento de 31 userscripts en producción con más de 90 usuarios cada uno.",
      ],
      tags: [
        "TypeScript",
        "Node.js",
        "Análisis de datos",
        "Mentoría",
        "Gestión de proyectos",
        "Gestión de stakeholders",
      ],
    },
    {
      title: "CS Andon Cord Associate (L3)",
      institution: "Amazon",
      periodStart: "2022-01",
      periodEnd: "2025-05",
      description:
        "Investigación de consultas de clientes y discrepancias de inventario para identificar las causas de los picos de insatisfacción y garantizar la exactitud de los datos de producto, en coordinación con almacenes internos y proveedores externos. A principios de 2023 me convertí en el único desarrollador front-end a tiempo completo del equipo.",
      bulletPoints: [
        "Lideré iniciativas de mejora de procesos que aprovechaban APIs internas de Amazon para ganar eficiencia automatizando trabajo manual.",
        'Diseñé sistemas como "Support Requests" y "Quality Audits", con más de 29.000 y 13.000 elementos procesados durante los dos primeros años.',
        "Referente técnico principal del equipo.",
      ],
      tags: [
        "Capacidad analítica",
        "Trabajo en equipo",
        "JavaScript",
        "Node.js",
        "Vue.js",
        "Git",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Profesor de español",
      institution: "Autónomo",
      periodStart: "2019-07",
      periodEnd: "2022-01",
      description:
        'Cursos de español presenciales y en línea, adaptando las estrategias a todos los niveles. Desarrollé cursos de español de negocios basados en SCRUM para una empresa digital francesa y formé a directivos y profesionales en Barcelona (reseñas disponibles en <a target="_blank" href="https://www.apprentus.com/in/carlostorres">Apprentus</a>).',
      tags: ["Gestión de clientes", "Diseño instruccional"],
    },
    {
      title: "Becario académico",
      institution: "Atlas Language School",
      location: "Dublín",
      periodStart: "2018-06",
      periodEnd: "2018-09",
      description:
        "Mejora de la eficiencia del análisis cuantitativo y cualitativo del feedback de los estudiantes mediante el diseño de hojas de cálculo ad hoc, y apoyo administrativo en el Departamento Académico de la escuela.",
    },
    {
      title: "Investigador en prácticas",
      institution: "Institut de Ciències Polítiques i Socials",
      periodStart: "2015-10",
      periodEnd: "2016-04",
      description:
        'Apoyo al <a target="_blank" href="http://www.icps.cat/archivos/APC/anuari2015.pdf">"Anuari Polític de Catalunya" de 2015</a> (nota: A). Mis tareas incluían el resumen de textos legales, la elaboración de bases de datos y el tratamiento de datos electorales, el seguimiento de la actividad de gobierno y la investigación de prensa.',
    },
  ],
  languages: [
    {
      label: "Español",
      value: "Nativo",
    },
    {
      label: "Catalán",
      value: "Nativo",
    },
    {
      label: "Inglés",
      value: {
        text: "C1 Advanced English (CAE)",
        url: "https://github.com/carlostxrres/cv/blob/main/public/carlos-torres-cae.pdf",
      },
    },
  ],
  volunteering: [
    {
      title: "Voluntario",
      institution: "WWOOF",
      location: "Reino Unido",
      periodStart: "2016-07",
      periodEnd: "2016-08",
      description:
        "Colaboración con dos granjas ecológicas y entidades de servicios sociales para personas con discapacidad en Malmesbury y Chedington.",
    },
    {
      title: "Scout",
      institution: "Acció Escolta",
      periodStart: "2000-09",
      periodEnd: "2013-08",
      description:
        "Crecer como scout me ha hecho interiorizar ciertos valores y asumir varias responsabilidades cívicas y educativas. También he sido responsable de niños y jóvenes de 6 a 18 años.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Vue.js",
    "React",
    "HTML",
    "CSS",
    "Java",
    "Spring Boot",
    "MySQL",
    "Python",
    "Git",
  ],
};

export default cv;
