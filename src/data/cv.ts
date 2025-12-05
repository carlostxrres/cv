import { type Cv } from "@/types/cv";

const cv: Cv = {
  name: "Carlos",
  lastName: "Torres Moral",
  title: "CS Andon Cord Subject Matter Expert",
  aboutMe:
    "Sole developer supporting an 80-person team at Amazon; designed, developed, and maintaining 31 production scripts that enhance web tools to improve operational efficiency. Performing data analysis and automating workflows to support daily operations.\n\n" /* + "My 3+ years of experience in IT have helped me develop a strong foundation in TypeScript, along with front-end and back-end frameworks.\n\n"*/ +
    "I value the importance of clean code and design, and I am motivated by elegant logics and making a tangible impact for clients, all things that push me to continuously improve my skills.\n\nWith experience in research, policy analysis, data driven problem-solving, and cultural awareness from political science and Spanish teaching, I have thrived in diverse business environments from freelance, small businesses, and a global corporation.",
  contactDetails: [
    {
      label: "Email",
      value: {
        text: "ctorresmoral@gmail.com",
        url: "mailto:ctorresmoral@gmail.com",
      },
    },
    {
      label: "Phone",
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
      label: "Location",
      value: "Barcelona",
    },
  ],
  education: [
    {
      institution: "Ironhack",
      title: "Data Analytics Course",
      period: "Nov 2024 - Dec 2024",
      link: {
        text: "Certificate",
        url: "https://www.credential.net/fd65c6e8-e80c-411b-afbc-36eb6573550b",
      },
      description:
        "Completed a 60-hour course on Data Analytics, focusing on SQL for data querying and Python with Pandas and NumPy for data manipulation and analysis.",
      tags: ["MySQL", "Python", "Pandas", "NumPy"],
    },
    {
      institution: "Amazon Web Services (AWS)",
      title: "AWS Certified Cloud Practitioner",
      period: "Nov 2024",
      link: {
        text: "Certificate",
        url: "https://www.credly.com/badges/59dd83b5-d3ad-4229-b7fa-e0c584d7e170/public_url",
      },
      description:
        "Passed the exam CLF-C02, demonstrating knowledge in cloud and AWS fundamentals (core services, infrastructure, networking, security, monitoring, pricing, support, migration).",
      tags: ["Cloud fundamentals", "AWS fundamentals"],
    },
    {
      institution: "Ironhack",
      title: "Web Front-End Bootcamp",
      period: "Mar 2024 - Jul 2024",
      link: {
        text: "Certificate",
        url: "https://www.credential.net/a0ba9540-bf26-4ab8-b125-11f51187ed00",
      },
      description: "Completed a front-end bootcamp focused on Vue 3.",
      tags: ["Vue.js", "JavaScript", "HTML", "CSS", "Git"],
    },
    {
      institution: "Ironhack",
      title: "Web Back-End Bootcamp",
      period: "Feb 2023 - Jun 2023",
      link: {
        text: "Certificate",
        url: "https://www.credential.net/ffaa5321-123d-4963-bff8-159456a2cde0",
      },
      description:
        "Ventured into back-end development and built a real estate REST API, acquiring knowledge of the controller, service, repository, and data layers.",
      tags: ["Java", "Spring Boot", "Maven", "JPA", "MySQL", "Git"],
    },
    {
      institution: "Universitat Autònoma de Barcelona",
      title: "Bachelor's Degree in Political Science and Public Management",
      period: "Sep 2012 - Jul 2017",
      description: "Specialization in International Relations.",
    },
  ],
  projects: [
    {
      title: "Text-to-HTML",
      description:
        "HTML WYSIWYG editor allowing users to save and load templates.",
      tags: ["React", "JavaScript", "AWS S3", "AWS Route 53"],
      link: {
        text: "See in GitHub",
        url: "https://github.com/carlostxrres/text-to-html",
      },
    },
    {
      title: "Keyglow",
      description:
        "Web app to communicate key combinations by generating images of a keyboard with highlighted keys.",
      tags: ["React", "JavaScript", "SCSS"],
      link: {
        text: "See in GitHub",
        url: "https://github.com/carlostxrres/keyglow",
      },
    },
  ],
  work: [
    {
      title: "CS Andon Cord Subject Matter Expert (L4)",
      institution: "Amazon",
      period: "May 2025 - Now",
      description:
        "Building upon my previous role's responsibilities, my role has expanded to being part of the team's management.",
      bulletPoints: [
        "Responsible for monitoring the KPIs of an 80+ associates team (touched, resolved, quality).",
        "Automated 8 weekly reports about team productivity and quality.",
        "Analyzing data for ad-hoc deep dives.",
        "Mentoring a junior developer.",
        "Providing technical consultation to several teams.",
        "Maintaining 31 production userscripts with 90+ users each.",
        // process improvement, operational procedures, launches
        // complete projects within given timelines
      ],
      tags: [
        "TypeScript",
        "Node.js",
        "Data Analytics",
        "Mentorship",
        "Project management",
        "Stakeholder management",
      ],
    },
    {
      title: "CS Andon Cord Associate (L3)",
      institution: "Amazon",
      period: "Jan 2022 - May 2025",
      description:
        "Researched customer inquiries and inventory discrepancies to identify root causes of customer dissatisfaction peaks and ensure the accuracy of product data, liaising with internal warehouses and external vendors. In early 2023, became the solo full-time front-end developer in the team.",
      bulletPoints: [
        "Led process-improvement initiatives that leveraged internal Amazon APIs to drive efficiency by automating manual work.",
        'Designed systems such as "Support Requests" and "Quality Audits" with 29,000+ and 13,000+ items processed in the first two years.',
        "Served as primary tech contact in the team.",
      ],
      tags: [
        "Analytical skills",
        "Team work",
        "JavaScript",
        "Node.js",
        "Vue.js",
        "Git",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Spanish Teacher",
      institution: "Freelance",
      period: "Jul 2019 - Jan 2022",
      description:
        'Taught Spanish courses in-person and online, adapting strategies for all levels. Developed business Spanish courses themed around SCRUM for a French digital company and coached managers and professionals in Barcelona (reviews available at <a target="_blank" href="https://www.apprentus.com/in/carlostorres">Apprentus</a>).',
      tags: ["Client management", "Instructional design"],
    },
    {
      title: "Academic Intern",
      institution: "Atlas Language School",
      location: "Dublin",
      period: "Jun 2018 - Sep 2018",
      description:
        "Improved efficiency of student feedback quantitative and qualitative analysis by designing spreadsheets ad hoc, and provided administrative support within the Academic Department of the school.",
    },
    {
      title: "Research Trainee",
      institution: "Institut de Ciències Polítiques i Socials",
      period: "Oct 2015 - Apr 2016",
      description:
        'Support for the <a target="_blank" href="http://www.icps.cat/archivos/APC/anuari2015.pdf">"Anuari Polític de Catalunya" report of 2015</a> (mark: A). My tasks included summary of legal texts, elaboration of databases and electoral data treatment, follow-up of government activity, and press research.',
    },
  ],
  languages: [
    {
      label: "Spanish",
      value: "Native",
    },
    {
      label: "Catalan",
      value: "Native",
    },
    {
      label: "English",
      value: {
        text: "C1 Advanced English (CAE)",
        url: "https://github.com/carlostxrres/cv-carlos/blob/main/docs/cae-statement-of-result.pdf",
      },
    },
  ],
  volunteering: [
    {
      title: "Volunteer",
      institution: "WWOOF",
      location: "United Kingdom",
      period: "Jul 2016 - Aug 2016",
      description:
        "Worked with two organic farms and social service providers for disabled people in Malmesbury and Chedington.",
    },
    {
      title: "Boy Scout",
      institution: "Acció Escolta",
      period: "Sep 2000 - Aug 2013",
      description:
        "Growing up as a scout, I have internalized certain values and I have assumed several civil and educational responsibilities. I have also been in charge of 6 to 18 year old children.",
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

// Prizes:
// - "Earned a RISE 'Customer Obsession' award (with 3 recipients in SPS worldwide, where I had the most nominations in AEMENA's 661 nominees)",
// - "Earned 2 GEM (Go the Extra Mile) awards.",

export default cv;
