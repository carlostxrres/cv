import { type Cv } from "@/types/cv";

const cv: Cv = {
  name: "Carlos",
  lastName: "Torres Moral",
  title: "Tècnic Superior de Gestió",
  aboutMe:
    "Professional interdisciplinari que uneix la ciència política, l'educació i el desenvolupament de programari, amb experiència en organitzacions diverses (com a autònom, en petites empreses, en una gran corporació i ara a l'administració).\n\nAnteriorment, únic desenvolupador per a un equip de 80 persones a Amazon, creant eines que automatitzaven fluxos de treball i impulsaven decisions basades en dades. Actualment, tècnic de gestió a l'Ajuntament de Barcelona.",
    // aplicant un enfocament pragmàtic i tecnològic a les polítiques públiques i les operacions
  contactDetails: [
    {
      label: "Correu",
      value: {
        text: "ctorresmoral@gmail.com",
        url: "mailto:ctorresmoral@gmail.com",
      },
    },
    {
      label: "Telèfon",
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
      label: "Ubicació",
      value: "Barcelona",
    },
  ],
  education: [
    {
      institution: "Ironhack",
      title: "Curs de Data Analytics",
      periodStart: "2024-11",
      periodEnd: "2024-12",
      link: {
        text: "Certificat",
        url: "https://www.credential.net/fd65c6e8-e80c-411b-afbc-36eb6573550b",
      },
      description:
        "Curs de 60 hores sobre anàlisi de dades, centrat en SQL per a la consulta de dades i Python amb Pandas i NumPy per a la manipulació i l'anàlisi de dades.",
      tags: ["MySQL", "Python", "Pandas", "NumPy"],
    },
    {
      institution: "Amazon Web Services (AWS)",
      title: "AWS Certified AI Practitioner",
      periodStart: "2026-01",
      periodEnd: "2026-01",
      link: {
        text: "Certificat",
        url: "https://www.credly.com/badges/a0efa725-f469-4aa8-93b9-94e6e78932e7/public_url",
      },
      description:
        "Superació de l'examen AIF-C01, que acredita coneixements dels fonaments d'IA/ML a AWS (IA generativa, models fundacionals, conceptes de ML, IA responsable, seguretat i serveis d'IA/ML d'AWS com Bedrock i SageMaker).",
      tags: ["Fonaments d'IA", "AWS AI/ML"],
    },
    {
      institution: "Amazon Web Services (AWS)",
      title: "AWS Certified Cloud Practitioner",
      periodStart: "2024-11",
      periodEnd: "2024-11",
      link: {
        text: "Certificat",
        url: "https://www.credly.com/badges/59dd83b5-d3ad-4229-b7fa-e0c584d7e170/public_url",
      },
      description:
        "Superació de l'examen CLF-C02, que acredita coneixements dels fonaments del núvol i d'AWS (serveis principals, infraestructura, xarxes, seguretat, monitoratge, preus, suport i migració).",
      tags: ["Fonaments de cloud", "Fonaments d'AWS"],
    },
    {
      institution: "Ironhack",
      title: "Bootcamp de front-end web",
      periodStart: "2024-03",
      periodEnd: "2024-07",
      link: {
        text: "Certificat",
        url: "https://www.credential.net/a0ba9540-bf26-4ab8-b125-11f51187ed00",
      },
      description: "Bootcamp de desenvolupament front-end centrat en Vue 3.",
      tags: ["Vue.js", "JavaScript", "HTML", "CSS", "Git"],
    },
    {
      institution: "Ironhack",
      title: "Bootcamp de back-end web",
      periodStart: "2023-02",
      periodEnd: "2023-06",
      link: {
        text: "Certificat",
        url: "https://www.credential.net/ffaa5321-123d-4963-bff8-159456a2cde0",
      },
      description:
        "Iniciació al desenvolupament back-end amb la construcció d'una API REST immobiliària, adquirint coneixements de les capes de controlador, servei, repositori i dades.",
      tags: ["Java", "Spring Boot", "Maven", "JPA", "MySQL", "Git"],
    },
    {
      institution: "Universitat Autònoma de Barcelona",
      title: "Grau en Ciència Política i Gestió Pública",
      periodStart: "2012-09",
      periodEnd: "2017-07",
      description: "Especialització en Relacions Internacionals.",
    },
  ],
  projects: [
    {
      title: "Text-to-HTML",
      description:
        "Editor WYSIWYG d'HTML que permet desar i carregar plantilles.",
      tags: ["React", "JavaScript", "AWS S3", "AWS Route 53"],
      link: {
        text: "Veure a GitHub",
        url: "https://github.com/carlostxrres/text-to-html",
      },
    },
    {
      title: "Keyglow",
      description:
        "Aplicació web per comunicar combinacions de tecles generant imatges d'un teclat amb les tecles ressaltades.",
      tags: ["React", "JavaScript", "SCSS"],
      link: {
        text: "Veure a GitHub",
        url: "https://github.com/carlostxrres/keyglow",
      },
    },
  ],
  work: [
    {
      title: "Tècnic superior de gestió (Comissionada d'Acció Social)",
      institution: "Ajuntament de Barcelona",
      periodStart: "2026-10-01",
      periodEnd: null,
      description: "",
      bulletPoints: [],
      tags: [],
    },
    {
      title: "Tècnic superior de gestió (Direcció d'Educació)",
      institution: "Ajuntament de Barcelona",
      periodStart: "2026-03-02",
      periodEnd: "2026-09-30",
      description: "Suport operatiu i transversal a la Direcció d'Educació en la gestió de projectes que promouen els principis de la Carta de Ciutats Educadores a Barcelona.",
      bulletPoints: [],
      tags: [],
    },
    {
      title: "CS Andon Cord Subject Matter Expert (L4)",
      institution: "Amazon",
      periodStart: "2025-05",
      periodEnd: "2026-03",
      description:
        "Partint de les responsabilitats del meu rol anterior, el meu paper es va ampliar per formar part de la gestió de l'equip.",
      bulletPoints: [
        "Responsable del seguiment dels KPI d'un equip de més de 80 persones.",
        "Automatització de 8 informes setmanals sobre la productivitat i la qualitat de l'equip.",
        "Anàlisi de dades per a estudis ad hoc.",
        "Mentoria d'un desenvolupador júnior.",
        "Consultoria tècnica per a diversos equips.",
        "Manteniment de 31 userscripts en producció amb més de 90 usuaris cadascun.",
      ],
      tags: [
        "TypeScript",
        "Node.js",
        "Anàlisi de dades",
        "Mentoria",
        "Gestió de projectes",
        "Gestió de stakeholders",
      ],
    },
    {
      title: "CS Andon Cord Associate (L3)",
      institution: "Amazon",
      periodStart: "2022-01",
      periodEnd: "2025-05",
      description:
        "Recerca de consultes de clients i discrepàncies d'inventari per identificar les causes dels pics d'insatisfacció i garantir l'exactitud de les dades de producte, en coordinació amb magatzems interns i proveïdors externs. A principis de 2023 em vaig convertir en l'únic desenvolupador front-end a temps complet de l'equip.",
      bulletPoints: [
        "Lideratge d'iniciatives de millora de processos que aprofitaven APIs internes d'Amazon per guanyar eficiència automatitzant feina manual.",
        'Disseny de sistemes com "Support Requests" i "Quality Audits", amb més de 29.000 i 13.000 elements processats durant els dos primers anys.',
        "Referent tècnic principal de l'equip.",
      ],
      tags: [
        "Capacitat analítica",
        "Treball en equip",
        "JavaScript",
        "Node.js",
        "Vue.js",
        "Git",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Professor d'espanyol",
      institution: "Autònom",
      periodStart: "2019-07",
      periodEnd: "2022-01",
      description:
        'Cursos d\'espanyol presencials i en línia, adaptant les estratègies a tots els nivells. Vaig desenvolupar cursos d\'espanyol de negocis basats en SCRUM per a una empresa digital francesa i vaig formar directius i professionals a Barcelona (ressenyes disponibles a <a target="_blank" href="https://www.apprentus.com/in/carlostorres">Apprentus</a>).',
      tags: ["Gestió de clients", "Disseny instruccional"],
    },
    {
      title: "Becari acadèmic",
      institution: "Atlas Language School",
      location: "Dublín",
      periodStart: "2018-06",
      periodEnd: "2018-09",
      description:
        "Millora de l'eficiència de l'anàlisi quantitativa i qualitativa del feedback dels estudiants mitjançant el disseny de fulls de càlcul ad hoc, i suport administratiu al Departament Acadèmic de l'escola.",
    },
    {
      title: "Investigador en pràctiques",
      institution: "Institut de Ciències Polítiques i Socials",
      periodStart: "2015-10",
      periodEnd: "2016-04",
      description:
        'Suport a l\'<a target="_blank" href="http://www.icps.cat/archivos/APC/anuari2015.pdf">"Anuari Polític de Catalunya" de 2015</a> (nota: A). Les meves tasques incloïen el resum de textos legals, l\'elaboració de bases de dades i el tractament de dades electorals, el seguiment de l\'activitat de govern i la recerca de premsa.',
    },
  ],
  languages: [
    {
      label: "Castellà",
      value: "Natiu",
    },
    {
      label: "Català",
      value: "Natiu",
    },
    {
      label: "Anglès",
      value: {
        text: "C1 Advanced English (CAE)",
        url: "https://github.com/carlostxrres/cv/blob/main/public/carlos-torres-cae.pdf",
      },
    },
  ],
  volunteering: [
    {
      title: "Voluntari",
      institution: "WWOOF",
      location: "Regne Unit",
      periodStart: "2016-07",
      periodEnd: "2016-08",
      description:
        "Col·laboració amb dues granges ecològiques i entitats de serveis socials per a persones amb discapacitat a Malmesbury i Chedington.",
    },
    {
      title: "Escolta",
      institution: "Acció Escolta",
      periodStart: "2000-09",
      periodEnd: "2013-08",
      description:
        "Créixer com a escolta m'ha fet interioritzar certs valors i assumir diverses responsabilitats cíviques i educatives. També he estat responsable d'infants i joves de 6 a 18 anys.",
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
