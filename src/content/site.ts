type Service = { title: string; body: string };
type StackGroup = { layer: string; items: string[] };
type Job = { company: string; title: string; period: string; blurb: string };
type Project = {
  title: string;
  status: string;
  body: string;
  tags: string[];
  href: string | null;
};

export const site = {
  name: "Cesar Ivan Diaz Briseño",
  displayName: "Ivan Diaz",
  role: "Senior React Developer",
  headline: "React · Next.js · TypeScript",
  summary:
    "Senior React developer with 5+ years building and scaling production web apps with React, Next.js and TypeScript — frontend architecture, state management, performance, and the APIs behind it.",
  url: "https://lowtus.me",
  email: "ivan@lowtus.me",
  portrait: "/portrait.jpg" as string | null,
  location: "Guadalajara, Mexico",
  timezone: "GMT-6",
  availability: "Available for part-time freelance — evenings & weekends",

  links: {
    upwork: "https://www.upwork.com/freelancers/~0144dc64b006ebd08a",
    linkedin: "https://www.linkedin.com/in/ivandzb/",
    github: "https://github.com/ivan-dzb",
  },

  stats: [
    { value: "5+ yrs", label: "React & TypeScript in production" },
    { value: "−30%", label: "faster after legacy rebuilds" },
    { value: "4", label: "product teams shipped for" },
  ],

  hero: {
    eyebrow: "Senior React Developer",
    title: "Ivan Diaz",
    tagline:
      "I build and scale production web apps with React, Next.js and TypeScript — from frontend architecture to the APIs behind them.",
    primaryCta: { label: "Hire me on Upwork", href: "#contact" },
    secondaryCta: { label: "What I do", href: "#services" },
  },

  services: [
    {
      title: "Frontend Architecture",
      body: "React / Next.js apps built to scale — state management, performance and a component library your team can keep building on.",
    },
    {
      title: "Feature Development",
      body: "Ship new features into your existing React or .NET app, from design through deployment, without breaking what already works.",
    },
    {
      title: "Performance & Modernization",
      body: "Refactor a slow or dated frontend into something fast and maintainable — past projects cut load times by 15–30%.",
    },
    {
      title: "APIs & Integration",
      body: "Need the backend too? Clean, documented REST APIs on Node.js or .NET, wired to the frontend end to end.",
    },
  ] satisfies Service[],

  stack: [
    {
      layer: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Jest"],
    },
    { layer: "Backend", items: [".NET", "Node.js", "Express", "REST APIs"] },
    { layer: "Data", items: ["SQL Server", "MongoDB"] },
    {
      layer: "Cloud & Tooling",
      items: ["Azure", "AWS (S3, IAM)", "Git", "Jira"],
    },
  ] satisfies StackGroup[],

  experience: [
    {
      company: "Nexaminds",
      title: "Fullstack Developer L3",
      period: "Oct 2024 — Present",
      blurb:
        "Build React/Next.js apps and REST APIs for an enterprise platform connecting vendors and carriers. Led a legacy frontend modernization that cut load times by 30%, and designed the global state layer with Zustand.",
    },
    {
      company: "Brightcove",
      title: "Software Engineer",
      period: "Sep 2022 — Aug 2024",
      blurb:
        "Shipped features and critical fixes for a high-traffic React/TypeScript streaming service. Maintained AWS infrastructure (S3, IAM) and refactored legacy code to cut load times by 15%.",
    },
    {
      company: "Tech Mahindra",
      title: "Software Developer",
      period: "Sep 2021 — Sep 2022",
      blurb:
        "Front-end consultant building a React/Redux/TypeScript SPA with production support, responsive design and a reusable component library that reduced duplication.",
    },
    {
      company: "Infobip",
      title: "Fullstack Developer",
      period: "Feb 2021 — Sep 2021",
      blurb:
        "Designed a new UI for a billing system and built a RESTful API for secure data transfer, improving the finance team's efficiency.",
    },
  ] satisfies Job[],

  projects: [
    {
      title: "Analytics Dashboard",
      status: "In progress",
      body: "React + .NET admin panel with role-based access, CRUD and live metrics. Full case study coming soon.",
      tags: ["React", "Next.js", ".NET", "SQL Server"],
      href: null,
    },
    {
      title: "Booking System",
      status: "Planned",
      body: "Appointment scheduling app with calendar, notifications and a customer portal.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      href: null,
    },
    {
      title: "Your project here",
      status: "Available",
      body: "Have something in mind? This slot is open — let's talk about what you need built.",
      tags: ["React", ".NET", "Azure"],
      href: "#contact",
    },
  ] satisfies Project[],
};

export type Site = typeof site;
