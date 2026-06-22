export const profile = {
  name: "Paritosh Varshney",
  role: "Backend & Agentic Systems Engineer",
  thesis: "I build the backend that keeps AI products running.",
  blurb:
    "3+ years building high-throughput backend systems, and lately the orchestration and cost tracking behind production LLM features.",
  location: "Bangalore, India",
  email: "varshneyparitosh7@gmail.com",
  cv: "/Paritosh-Varshney-CV.pdf",
  socials: {
    github: "https://github.com/paritoshv",
    linkedin: "https://www.linkedin.com/in/paritoshbitspilani",
    twitter: "https://twitter.com/litemonke",
  },
};

export type Project = {
  name: string;
  tagline: string;
  proves: string;
  description: string;
  stack: string[];
  code: string;
  live?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "faultline-orchestrator",
    tagline: "Durable multi-step LLM agent workflows",
    proves: "Agentic infra · durability",
    description:
      "An orchestration engine for long-running LLM agent workflows: validation gates, self-healing retries, and resume-after-failure so a multi-step run survives crashes instead of starting over.",
    stack: ["Python", "LLM Orchestration", "Durability"],
    code: "https://github.com/paritoshv/faultline-orchestrator",
    status: "Live demo in progress",
    featured: true,
  },
  {
    name: "multi-llm-web-orchestrator",
    tagline: "One prompt, four models, side by side",
    proves: "Multi-provider · tooling",
    description:
      "A Chrome side-panel extension that orchestrates ChatGPT, Claude, Gemini, and Grok through authenticated browser sessions — fan a single prompt across providers and compare answers in one place.",
    stack: ["TypeScript", "Chrome Extension", "Multi-LLM"],
    code: "https://github.com/paritoshv/multi-llm-web-orchestrator",
  },
  {
    name: "mini-perplexity",
    tagline: "Search-powered, sourced Q&A",
    proves: "RAG · retrieval",
    description:
      "A compact Perplexity-style answer engine — runs live web search, grounds an LLM on the results, and returns concise answers with citations back to sources.",
    stack: ["JavaScript", "RAG", "Search"],
    code: "https://github.com/paritoshv/mikochan-the-mini-perplexity",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Healthify",
    role: "Software Engineer 2, Backend",
    period: "Dec 2024 — Present",
    current: true,
    points: [
      "Led backend for an insurance-backed telehealth platform from MVP to full US rollout — eligibility, provider discovery, booking, and cross-system insurance/account sync via Healthie, Stedi, and Stripe.",
      "Built an LLM orchestration pipeline for multi-day diet-plan generation with parallel processing, validation gates, and self-healing retries — cutting turnaround from 25 min to 3.5 min.",
      "Built centralized LLM token & cost observability across 50+ features — per-provider/model/feature breakdowns of prompt, completion, reasoning, cached, and audio tokens for budget monitoring.",
    ],
    stack: ["Python", "Healthie", "Stedi", "Stripe", "MongoDB", "MySQL", "Redis"],
  },
  {
    company: "Metropolis Technologies",
    role: "Software Engineer, Backend",
    period: "Jul 2023 — Dec 2024",
    points: [
      "Architected an event-driven monitoring & alerting service for garage hardware, cutting incident response from hours to minutes.",
      "Re-engineered the reservation subsystem to support 3,000+ garages and 2.5M+ annual bookings (100% YoY growth) while keeping the API flexible across configurations.",
      "Refactored the payments microservice into a provider-agnostic architecture spanning Stripe, HPS, Square, and Chase.",
    ],
    stack: ["Node.js", "MySQL", "MongoDB", "MQTT", "Microservices"],
  },
  {
    company: "Texas Instruments",
    role: "Software Engineering Intern",
    period: "Jul 2022 — Dec 2022",
    points: [
      "Built 35+ hardware-interfacing APIs across two generations of FMCW radar.",
      "Optimized radar logic to cut non-sampling time by 30%, improving object-detection accuracy.",
      "Delivered core integrations for global partners including Google, Ford, and Infineon.",
    ],
    stack: ["C", "C++", "Python"],
  },
];

export const about = {
  paragraphs: [
    "I'm a backend engineer working mostly on the parts of AI that keep it running in production — orchestration, retries and durability, and tracking what the models cost. Most of what I do sits between systems engineering and LLM features.",
    "Before the AI work I spent a couple of years on high-throughput systems: payments across four gateways, reservation infrastructure handling millions of bookings, and event-driven monitoring. That's where I learned how things behave under load.",
    "I use coding agents to move quickly, and I rely on that systems experience to make sure what ships actually holds up.",
  ],
  education: {
    school: "BITS Pilani, Goa",
    degree: "B.E. (Hons.) Electronics & Instrumentation, Minor in Physics",
    period: "2019 — 2023",
  },
  community:
    "Workshop & Operations Head, Quark 2022 (BITS Goa) — led a 180+ member team across workshops, partnerships, and outreach.",
};

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C", "C++"],
  "Backend & Infra": ["Node.js", "Django", "Celery", "Microservices", "Event-Driven", "AWS"],
  "Data & Messaging": ["MySQL", "MongoDB", "Redis", "RabbitMQ"],
  AI: ["LLM Orchestration", "Agents", "Token Observability", "RAG", "Prompt Engineering"],
};

// Suggested questions for the (Phase 3) ask-me agent. For now they route to sections.
export const suggestions: { q: string; target: string }[] = [
  { q: "What did you build at Healthify?", target: "experience" },
  { q: "Show me your projects", target: "work" },
  { q: "Who are you?", target: "about" },
];
