export const personalInfo = {
  name: "Vandan Rangani",
  title: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "MERN Stack Expert",
    "DevOps Engineer",
    "Hackathon Winner",
    "Open Source Contributor",
    "Freelancer",
  ],
  summary:
    "Full Stack Developer and freelancer with expertise in MERN stack and exposure to DevOps and system design. Proven track record of building scalable applications with 99.99% uptime and optimizing performance by 87%. Hackathon winner and open-source contributor with successful client project delivery.",
  location: "Jamnagar, Gujarat, India",
  email: "vandanrangani21@gmail.com",
  linkedin: "https://linkedin.com/in/vandanrangani",
  github: "https://github.com/ranganivandan",
  twitter: "https://x.com/RanganiVandan",
  website: "https://vandan.zeat.in",
  resumeLink: "#",
};

export const skills = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "React Native", level: 80 },
    { name: "Redux", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "TailwindCSS", level: 88 },
    { name: "Bootstrap", level: 82 },
  ],
  Backend: [
    { name: "Node.js", level: 92 },
    { name: "Express.js", level: 90 },
    { name: "RESTful APIs", level: 92 },
  ],
  Databases: [
    { name: "MongoDB", level: 88 },
    { name: "MySQL", level: 80 },
    { name: "Redis", level: 78 },
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 80 },
    { name: "GCP", level: 75 },
    { name: "Jenkins", level: 72 },
    { name: "Nginx", level: 78 },
    { name: "Cloudflare", level: 75 },
    { name: "CI/CD", level: 78 },
    { name: "Git", level: 92 },
  ],
  "Languages & CS": [
    { name: "C++", level: 80 },
    { name: "DSA", level: 82 },
    { name: "System Design", level: 78 },
    { name: "OOP", level: 88 },
    { name: "GenAI", level: 75 },
  ],
};

export const skillIcons = {
  "React.js": "⚛️",
  "Next.js": "▲",
  "React Native": "📱",
  Redux: "🔄",
  JavaScript: "🟨",
  "HTML5 / CSS3": "🌐",
  TailwindCSS: "🎨",
  Bootstrap: "🅱️",
  "Node.js": "🟩",
  "Express.js": "🚂",
  "RESTful APIs": "🔗",
  MongoDB: "🍃",
  MySQL: "🐬",
  Redis: "🔴",
  Docker: "🐳",
  GCP: "☁️",
  Jenkins: "⚙️",
  Nginx: "🔁",
  Cloudflare: "🌩️",
  "CI/CD": "♾️",
  Git: "🐙",
  "C++": "➕",
  DSA: "🧮",
  "System Design": "🏗️",
  OOP: "🧩",
  GenAI: "🤖",
};

export const projects = [
  {
    id: 1,
    title: "NetResolve",
    subtitle: "DNS & Hosting Infrastructure",
    description:
      "Custom DNS resolver with recursive lookup, caching, and TTL-based record management. Multi-site web hosting with virtual hosts and reverse proxy setup achieving 99.99% uptime.",
    techStack: ["MERN", "Nginx", "Cloudflare", "GCP"],
    highlights: [
      "Custom DNS resolver with recursive lookup & TTL caching",
      "Multi-site hosting with virtual hosts & reverse proxy",
      "99.99% uptime via proactive monitoring & auto-recovery",
    ],
    period: "Oct 2025 – Nov 2025",
    color: "#6C63FF",
    icon: "🌐",
    github: "https://github.com/ranganivandan",
  },
  {
    id: 2,
    title: "Searchify",
    subtitle: "Custom Web Search Engine",
    description:
      "High-performance web search engine with inverted indexing, keyword scoring, and relevance ranking. Achieved sub-0.5s query response times while handling 10,000+ queries per second.",
    techStack: ["MERN", "Redis", "Docker"],
    highlights: [
      "Inverted indexing & relevance ranking algorithms",
      "Sub-0.5s response time for 10,000+ QPS",
      "Async web crawling & data processing pipelines",
    ],
    period: "Jul 2025 – Aug 2025",
    color: "#FF6584",
    icon: "🔍",
    github: "https://github.com/ranganivandan",
  },
  {
    id: 3,
    title: "ResQTrack",
    subtitle: "Roadside Assistance Platform",
    description:
      "Full-stack roadside assistance system with SOS alerts, accident detection, and location-based emergency services. QR-based ResQTag with credit transaction system.",
    techStack: ["MERN", "Flutter", "IoT", "Telegram API"],
    highlights: [
      "SOS alerts & real-time accident detection",
      "Location-based mechanics & emergency services",
      "QR-based ResQTag with credit transaction system",
    ],
    period: "Apr 2024 – May 2024",
    color: "#43E97B",
    icon: "🚨",
    github: "https://github.com/ranganivandan",
    achievement: "Top 50 @ SVNIT Hackathon (1,200+ teams)",
  },
  {
    id: 4,
    title: "AI Social Analytics",
    subtitle: "Social Media Dashboard",
    description:
      "Centralized multi-platform social media management with AI-driven content generation, automated scheduling for 5,000+ posts daily, and sentiment analysis across 50,000+ media assets.",
    techStack: ["MERN", "Python", "AI/ML", "Redis"],
    highlights: [
      "5,000+ automated daily posts across platforms",
      "AI Telegram bot for content generation",
      "50,000+ media assets with intelligent tagging",
      "43,000+ scheduled emails processed daily",
    ],
    period: "Jan 2024 – Feb 2024",
    color: "#FA8231",
    icon: "📊",
    github: "https://github.com/ranganivandan",
    achievement: "2nd Runner-Up @ CVMU Hackathon (700 teams)",
  },
  {
    id: 5,
    title: "Luxury Jewelry eCommerce",
    subtitle: "Freelance Project",
    description:
      "High-performance luxury jewelry eCommerce platform with dynamic pricing, real-time currency conversion, and SEO optimization achieving #1 ranking.",
    techStack: ["React.js", "Node.js", "MongoDB"],
    highlights: [
      "2ms rendering time (87% performance boost)",
      "50% user engagement increase",
      "Real-time currency conversion",
      "#1 SEO ranking achieved",
    ],
    period: "Nov 2025 – Present",
    color: "#FFD700",
    icon: "💎",
    github: "https://github.com/ranganivandan",
    achievement: "87% Performance Improvement",
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "InfinteCrazeGames",
    location: "Remote",
    period: "May 2026 – Jun 2026",
    type: "work",
    color: "#FA8231",
    points: [
      "Contributed to game development infrastructure and backend systems at InfinteCrazeGames",
      "Collaborated with engineering teams to build and optimise scalable features for production",
    ],
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "Aden (YC-backed)",
    location: "Remote",
    period: "Present",
    type: "work",
    color: "#38BDF8",
    points: [
      "Contributing to open-source projects at Aden, a Y Combinator–backed company",
      "Improving codebase quality, scalability, and developer experience across the platform",
    ],
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Self Employed",
    location: "Anand, India",
    period: "Nov 2025 – Present",
    type: "work",
    color: "#6C63FF",
    points: [
      "Built luxury jewelry eCommerce site achieving 2ms rendering (87% faster) and 50% user engagement boost",
      "Implemented dynamic pricing with real-time currency conversion and achieved #1 SEO ranking",
    ],
  },
  {
    id: 4,
    role: "Open Source Contributor",
    company: "Powered by Reskill",
    location: "Anand, India",
    period: "Apr 2024 – Jun 2024",
    type: "work",
    color: "#43E97B",
    points: [
      "Contributed 1,000+ lines of production code improving RaktConnect scalability and maintainability, reducing production bugs by 40%",
      "Implemented geo-fencing blood bank discovery with Telegram bot notifications and rate limiting for security",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "G H Patel College of Engineering & Technology",
    location: "Anand, Gujarat",
    period: "2023 – 2027",
    gpa: "8.54 / 10.0",
    type: "education",
    color: "#FF6584",
  },
];

export const achievements = [
  {
    icon: "🥉",
    title: "2nd Runner-Up",
    event: "CVMU Hackathon",
    detail: "Social Media Analytics Dashboard",
    metric: "700 finalist teams",
    color: "#CD7F32",
  },
  {
    icon: "🏆",
    title: "Top 50 Finalist",
    event: "SVNIT Hackathon 2025",
    detail: "ResQTrack Platform",
    metric: "1,200+ teams",
    color: "#6C63FF",
  },
  {
    icon: "🌟",
    title: "Selected",
    event: "SSOC'25 & GSSOC'25",
    detail: "Open Source Programs",
    metric: "7,000+ applicants",
    color: "#43E97B",
  },
  {
    icon: "🎯",
    title: "Top 50 Finalist",
    event: "IIT Gandhinagar Hackathon",
    detail: "Competitive Programming",
    metric: "2,000+ teams",
    color: "#FA8231",
  },
];

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Performance Boost", value: 87, suffix: "%" },
  { label: "Lines of Code", value: 1000, suffix: "+" },
  { label: "Uptime Achieved", value: 99.99, suffix: "%" },
];
