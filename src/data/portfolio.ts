export const portfolioData = {
    personal: {
        name: "Dharun Balaji",
        role: "Full Stack Developer",
        tagline: "Building performant web experiences",
        bio: "CSE student who turns ideas into polished digital products. I specialize in React, Next.js, and Flutter — crafting interfaces that are as delightful to use as they are to build.",
        about: {
            story: "My coding journey started with curiosity about how websites work. That curiosity evolved into a passion for building things that solve real problems. Today, I focus on creating performant, accessible applications with clean code and thoughtful design.",
            interests: ["Full Stack Development", "AI/ML Integration", "Open Source"],
            currentFocus: "Exploring AI-powered applications and contributing to open source projects."
        },
        email: "hello@dharun.dev",
        github: "https://github.com/Dharun-Balaji",
        linkedin: "https://www.linkedin.com/in/dharunbalaji/",
        resume: "/resume.pdf",
    },
    skills: [
        // Proficient
        { name: "React", category: "Frontend", level: "proficient" as const },
        { name: "Next.js", category: "Frontend", level: "proficient" as const },
        { name: "TypeScript", category: "Languages", level: "proficient" as const },
        { name: "Tailwind CSS", category: "Frontend", level: "proficient" as const },
        { name: "JavaScript", category: "Languages", level: "proficient" as const },
        { name: "Git", category: "Tools", level: "proficient" as const },
        // Familiar
        { name: "Node.js", category: "Backend", level: "familiar" as const },
        { name: "PostgreSQL", category: "Backend", level: "familiar" as const },
        { name: "Flutter", category: "Mobile", level: "familiar" as const },
        { name: "Python", category: "Languages", level: "familiar" as const },
        { name: "Firebase", category: "Backend", level: "familiar" as const },
        { name: "Prisma", category: "Backend", level: "familiar" as const },
        // Learning
        { name: "Docker", category: "DevOps", level: "learning" as const },
        { name: "AWS", category: "Cloud", level: "learning" as const },
        { name: "GraphQL", category: "Backend", level: "learning" as const },
        { name: "Redis", category: "Backend", level: "learning" as const },
    ],
    projects: [
        {
            title: "Orbit",
            description: "Real-time chat platform with instant stranger matching. Features WebSocket-powered messaging, typing indicators, and seamless reconnection handling.",
            tech: ["Next.js", "Pusher", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://cipher-chat.vercel.app",
            githubUrl: "https://github.com/Dharun-Balaji/cipher-chat",
            metrics: ["Real-time", "WebSockets"],
            featured: true,
        },
        {
            title: "Mintora",
            description: "AI-powered personal finance tracker with smart expense categorization, spending insights, and budget recommendations powered by Gemini API.",
            tech: ["Flutter", "Dart", "Firebase", "Gemini API"],
            liveUrl: "#",
            githubUrl: "https://github.com/Dharun-Balaji/mintora",
            metrics: ["AI-Powered", "Cross-Platform", "Real-time Sync"],
            featured: true,
        },
        {
            title: "Core",
            description: "Project management board with drag-and-drop tasks, real-time updates, column customization, and team collaboration features.",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            liveUrl: "#",
            githubUrl: "https://github.com/Dharun-Balaji/saas-kanban",
            metrics: ["Drag & Drop", "Real-time", "Collaborative"],
            featured: true,
        },
        {
            title: "Portfolio v2",
            description: "This portfolio website built with Next.js 15 and Bun, featuring smooth animations, dark mode, and a modern glassmorphism design system.",
            tech: ["Next.js", "Bun", "shadcn/ui", "Framer Motion"],
            liveUrl: "https://dharun.dev",
            githubUrl: "https://github.com/Dharun-Balaji/portfolio",
            metrics: ["SSG", "Accessible", "Performant"],
            featured: false,
        },
    ],
    currentlyLearning: [
        {
            title: "Docker & Containerization",
            description: "Building containerized applications for consistent development and deployment environments.",
        },
        {
            title: "AWS Cloud Services",
            description: "Exploring serverless architectures with Lambda, S3, and DynamoDB.",
        },
        {
            title: "System Design",
            description: "Learning to architect scalable, distributed systems.",
        },
    ],
};
