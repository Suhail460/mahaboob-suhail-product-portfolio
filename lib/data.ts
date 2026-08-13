import { CaseStudy, Experience, ImpactStat, Certification } from "./types"

export const skillsRow1 = [
  "AI Product Builder",
  "LLM Prompt Engineering",
  "AI Feature Integration",
  "Agentic Workflow Design",
  "AI Interview Simulator",
  "AI Agent Orchestration",
  "Product Strategy",
  "Growth & Retention",
  "User Research",
  "JTBD Framework",
  "Stakeholder Management",
  "Product Analytics",
]

export const skillsRow2 = [
  "Product Operations",
  "Workflow Optimization",
  "Escalation Management",
  "Agile & Scrum",
  "Roadmapping",
  "Prioritization",
  "RAG & Knowledge Bases",
  "AI Ethics & Guardrails",
  "SaaS Platforms",
  "Feature Testing",
  "QA Collaboration",
  "Customer Experience",
]

export const discoveryDojoData = {
  title: "Discovery Dojo",
  subtitle: "Interactive PM Discovery & Learning Platform",
  tagline: "Bridging theoretical product management education with practical, AI-assisted customer discovery simulations.",
  description:
    "Designed and developed a full-stack interactive product management discovery platform featuring gamified curriculum levels, an AI Interview Simulator, AI Mentorship ('Mei'), and real-time skill assessments.",
  category: "Flagship SaaS Platform",
  type: "Full Stack Case Study",
  link: "/case-studies/discovery-dojo",
  image: "/images/discovery-dojo/dashboard.png",
  liveUrl: "https://discovery-dojo.vercel.app",
  githubUrl: "https://github.com/Suhail460/discovery-dojo",
  executiveSummary: {
    goal: "Bridge the gap between theoretical PM education and practical discovery execution through interactive, scenario-based learning.",
    audience: "Aspiring PMs, APMs, Product Support Analysts, and Product Managers wanting hands-on discovery practice.",
    valueProposition: "Interactive customer discovery simulations paired with streaming AI feedback and gamified skill trees.",
  },
  features: [
    {
      title: "Interactive Curriculum",
      description: "15 gamified levels covering PM fundamentals, user discovery, backlog prioritization, and metrics.",
      icon: "curriculum",
      screenshot: "/images/discovery-dojo/dashboard.png",
    },
    {
      title: "AI Interview Simulator",
      description: "Simulates customer discovery interviews with real-time feedback and scoring.",
      icon: "simulator",
      screenshot: "/images/discovery-dojo/quiz.png",
    },
    {
      title: "AI Mentor 'Mei'",
      description: "Socratic AI coach answering product questions and reviewing user deliverables.",
      icon: "mentor",
      screenshot: "/images/discovery-dojo/darkmode.png",
    },
    {
      title: "Skill Badges & Achievements",
      description: "14 unlockable skill badges with visual progression and telemetry tracking.",
      icon: "badges",
      screenshot: "/images/discovery-dojo/mobile.png",
    },
  ],
  challenges: [
    {
      category: "Performance",
      problem: "Initial bundle size reached 2.4MB due to rich AI libraries and interactive components.",
      solution: "Implemented code-splitting, lazy route loading, and dynamic imports to reduce bundle size by 64%.",
    },
    {
      category: "UX & Retention",
      problem: "Linear quiz formats caused high drop-off rates at level 4.",
      solution: "Redesigned learning path with branching scenarios, real-time feedback loops, and daily streak rewards.",
    },
    {
      category: "AI Latency",
      problem: "LLM response lag created unnatural pauses in the interview simulator.",
      solution: "Integrated streaming API responses and progressive loading states for sub-500ms initial response times.",
    },
  ],
  metrics: [
    {
      value: "15",
      label: "Gamified PM Levels",
      description: "Comprehensive curriculum covering end-to-end product discovery.",
    },
    {
      value: "64%",
      label: "Bundle Size Reduction",
      description: "Optimized through dynamic imports and component lazy loading.",
    },
    {
      value: "14",
      label: "Skill Badges",
      description: "Gamified achievement system driving user engagement.",
    },
    {
      value: "<500ms",
      label: "AI Response Time",
      description: "Achieved via streaming API responses in the interview simulator.",
    },
  ],
  lessons: [
    {
      lesson: "User Empathy Trumps Feature Quantity",
      insight: "Focusing on 3 deeply polished interactive features drove 3x higher completion rates than 10 static modules.",
    },
    {
      lesson: "Real-Time Feedback Accelerates Learning",
      insight: "Streaming AI interview scoring gave users immediate actionable insights, doubling repeat usage.",
    },
    {
      lesson: "Performance is a Core Feature",
      insight: "Sub-second page loads directly correlated with 45% lower bounce rates on mobile devices.",
    },
  ],
  productDecisions: [
    {
      decision: "Firebase Auth & Firestore Architecture",
      rationale: "Selected Firebase to support real-time progress syncing, anonymous guest sessions, and rapid iteration.",
      alternatives: "Custom Node.js + PostgreSQL backend.",
      tradeoff: "Higher vendor lock-in for real-time listeners, offset by 3x faster delivery.",
    },
    {
      decision: "Gamified Level Unlocks vs Open Curriculum",
      rationale: "Gating levels behind interactive mastery quizzes ensured prerequisite skills were tested before advanced topics.",
      alternatives: "Fully open navigation index.",
      tradeoff: "Slightly less flexibility for advanced users, offset by 70% higher completion rates.",
    },
  ],
  roadmap: [
    {
      timeframe: "Near Term (Q1 2026)",
      items: [
        "Multi-player PRD review mode for cohort practice",
        "Integration with Figma embeds for wireframe reviews",
      ],
    },
    {
      timeframe: "Mid Term (Q2 2026)",
      items: [
        "Advanced telemetry dashboard for cohort instructors",
        "Custom case study builder for community contributors",
      ],
    },
    {
      timeframe: "Long Term (Q3+ 2026)",
      items: [
        "Enterprise team workspaces and skill matrix export",
        "Native mobile app built with React Native",
      ],
    },
  ],
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Discovery Dojo — Product Discovery Platform",
    subtitle: "Gamified PM Learning & AI Interview Simulator",
    description:
      "Full-stack product strategy, React 18 frontend architecture, and Firebase backend design for a 15-level product management learning experience.",
    category: "Flagship SaaS Platform",
    type: "Interactive Case Study",
    link: "/case-studies/discovery-dojo",
    image: "/images/discovery-dojo/dashboard.png",
  },
  {
    title: "WhatsApp Status JTBD",
    subtitle: "User Motivation & Behavioral Engagement Patterns",
    description:
      "A Jobs-To-Be-Done user research analysis exploring social motivation, emotional engagement drivers, and feature opportunity spaces.",
    category: "User Research & JTBD",
    type: "Notion Teardown",
    link: "https://sneaky-hugger-90e.notion.site/User-Research-Case-Study-on-WhatsApp-Status-2005df8894ae80c7a444c33ba960ed35?source=copy_link",
    image: "/images/case-studies/whatsapp.jpg",
  },
  {
    title: "Ola Ride Retention Strategy",
    subtitle: "Habit Formation & Long-Term Engagement",
    description:
      "A growth-focused product strategy exploring habit formation, ride retention loops, and driver-rider engagement mechanics.",
    category: "Growth & Retention",
    type: "PDF Teardown",
    link: "/case-studies/ola.pdf",
    image: "/images/case-studies/ola.jpg",
  },
  {
    title: "YouTube Product Strategy",
    subtitle: "Recommendation Engine & Creator Monetization",
    description:
      "Deep analysis of monetization, user segmentation, algorithmic recommendation systems, and creator retention opportunities.",
    category: "Product Strategy",
    type: "PDF Teardown",
    link: "/case-studies/youtube.pdf",
    image: "/images/case-studies/youtube.jpg",
  },
  {
    title: "CRED Product Teardown",
    subtitle: "Gamification & Behavioral Psychology",
    description:
      "A product teardown focused on gamification, behavioral reward coins, credit card payment funnels, and retention mechanics.",
    category: "Fintech Product",
    type: "PDF Teardown",
    link: "/case-studies/cred.pdf",
    image: "/images/case-studies/cred.jpg",
  },
  {
    title: "Healthcare SaaS Escalation Engine",
    subtitle: "Reducing Critical Ticket Backlog by 40%",
    description:
      "Product operations breakdown analyzing high-volume customer escalations, root-cause tagging systems, and SLA recovery frameworks in healthcare SaaS.",
    category: "Product Operations",
    type: "Strategic Teardown",
    link: "/case-studies/discovery-dojo",
    image: "/images/case-studies/escalation-engine.jpg",
  },
  {
    title: "Enterprise Customer Support Pipeline",
    subtitle: "Scaling 700+ Monthly Technical Engagements",
    description:
      "Workflow optimization and internal tooling specification for support engineers and account managers handling complex tier-3 technical inquiries.",
    category: "Workflow Strategy",
    type: "Process Blueprint",
    link: "/case-studies/discovery-dojo",
    image: "/images/case-studies/support-pipeline.jpg",
  },
]

export const experiences: Experience[] = [
  {
    title: "Product Support Analyst",
    company: "AlohaPM India Private Limited",
    period: "Oct 2025 – Present",
    details: [
      "Leading technical support operations, bug prioritization, and escalation triage across core product modules.",
      "Bridging customer feedback loops directly with engineering and product management teams to define PRD updates.",
      "Collaborating on AI-assisted feature prototyping and continuous product discovery initiatives.",
    ],
  },
  {
    title: "Team Lead Support / Specialist II",
    company: "Telligent Support LLP",
    period: "Jul 2022 – Oct 2025",
    details: [
      "Managed high-priority customer escalations, achieving a 98% resolution rate and 40% faster turnaround time.",
      "Mentored a team of technical support engineers, establishing standardized ticket triage and documentation workflows.",
      "Partnered with product managers to deliver actionable feature gap analyses based on recurring customer issues.",
    ],
  },
  {
    title: "Customer Operations Specialist",
    company: "Groupon Shared Services / [24]7.ai",
    period: "Feb 2018 – Jun 2022",
    details: [
      "Handled front-line customer operations, merchant support, and transaction resolution at enterprise scale.",
      "Optimized internal knowledge base articles and resolution SOPs to reduce first-response times.",
    ],
  },
]

export const impactStats: ImpactStat[] = [
  { value: "8.5+", label: "Years Operations & Product Experience" },
  { value: "98%", label: "Escalation Resolution Rate Achieved" },
  { value: "40%", label: "Faster Ticket Resolution Time" },
  { value: "150+", label: "Cross-Functional Issues Collaborated/Q" },
]

export const certifications: Certification[] = [
  {
    title: "Product Management Training Certificate",
    org: "HelloPM",
    year: "2025",
    link: "https://hellopm.co/certificate/?certificate_id=MVCRF3",
  },
  {
    title: "Technology for Product & Business Folks",
    org: "HelloPM",
    year: "2025",
    link: "https://hellopm.co/certificate/?certificate_id=0CNGOH",
  },
  {
    title: "AI for Product Managers",
    org: "HelloPM",
    year: "2024",
    link: "https://hellopm.co/certificate/?certificate_id=D2CVT9",
  },
  {
    title: "Product Owner Certification",
    org: "Agile Enterprise Coach",
    year: "2024",
    link: "https://drive.google.com/file/d/1jGf-B-lFmkb9iGbCxSLuQTDBwQIo6m8W/view",
  },
  {
    title: "ScrumMasterProfessional Certification",
    org: "Institute of Management, Tech & Finance",
    year: "2024",
    link: "https://edu.gtf.pt/pluginfile.php/1/tool_certificate/issues/1722755426/9212774068MS.pdf",
  },
  {
    title: "AgileScrumMaster (ASM®)",
    org: "Simplilearn",
    year: "2024",
    link: "https://drive.google.com/file/d/1JZJVzB-g7RkbVlshFcbzw2hdNb-6qmQB/view",
  },
  {
    title: "Professional Certificate: Product Management and Development",
    org: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-3b529307-fbe6-4da7-9793-3046e8f9b20d/",
  },
  {
    title: "HIPAA Awareness for Business Associates",
    org: "Hipaatraining.com",
    year: "2024",
    link: "https://drive.google.com/file/d/1bbyXa5-MihnQuiD99itcjaTwtM1hOXw9/view?usp=sharing",
  },
]

export const galleryImages = [
  { src: "/images/discovery-dojo/dashboard.png", alt: "Dashboard with learning path", caption: "Dashboard — learning path, stats, and daily streak at a glance" },
  { src: "/images/discovery-dojo/quiz.png", alt: "Quiz engine", caption: "Quiz engine — multi-question assessments with progress tracking" },
  { src: "/images/discovery-dojo/mobile.png", alt: "Mobile responsive layout", caption: "Mobile view — bottom navigation with optimized touch targets" },
  { src: "/images/discovery-dojo/darkmode.png", alt: "Dark mode toggle", caption: "Dark mode — full OKLCH color system with system preference detection" },
  { src: "/images/discovery-dojo/login.png", alt: "Authentication screen", caption: "Authentication — three providers plus anonymous guest mode" },
]
