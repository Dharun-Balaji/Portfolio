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
        email: "hello@dharunbalaji.me",
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
            description: "A real-time chat platform that connects you with strangers instantly. Built with WebSockets for seamless messaging and a polished, dark-themed interface.",
            tech: ["Next.js", "Pusher", "Tailwind CSS", "TypeScript"],
            liveUrl: "#",
            githubUrl: "https://github.com/Dharun-Balaji/Orbit",
            metrics: ["Real-time", "Pusher"],
            featured: true,
        },
        {
            title: "Mintora",
            description: "An AI-driven personal finance companion that intelligently categorizes expenses and provides personalized budget recommendations using the Gemini API.",
            tech: ["Flutter", "Dart", "Firebase", "Gemini API"],
            liveUrl: "#",
            githubUrl: "https://github.com/Dharun-Balaji/mintora",
            metrics: ["AI-Powered", "Gemini API", "Finance"],
            featured: true,
        },
        {
            title: "Core",
            description: "A high-performance project management tool focused on simplicity and speed. Features a dynamic Kanban board with drag-and-drop task organization and real-time state management.",
            tech: ["React 19", "Redux Toolkit", "Vite", "Lucide React"],
            liveUrl: "#",
            githubUrl: "https://github.com/Dharun-Balaji/Core",
            metrics: ["React 19", "Redux Toolkit", "Drag & Drop"],
            featured: true,
        },
    ],
};
