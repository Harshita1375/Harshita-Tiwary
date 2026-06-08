import FinSyncImg from "./FinSync.png";
import JobPortalImg from "./JobPortal.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FinSync",
    description:
      "Personal finance management platform with expense tracking and analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Harshita1375/MultiAgent-Finance-Manager",
    live: "https://multi-agent-finance-manager.vercel.app/",
    image: FinSyncImg,
  },
  {
    id: 2,
    title: "Multi-Agent Recruitment Management System",
    description:
      "AI-driven recruitment platform optimizing candidate sourcing and hiring processes.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API","Python", "Microservices"],
    github: "https://github.com/Harshita1375/MultiAgent-Recruitment-Management-System",
    live: "https://multi-agent-recruitment-management.vercel.app/",
    image: JobPortalImg,
  },
];