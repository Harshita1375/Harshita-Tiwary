import FinSyncImg from "./FinSync.png";
import JobPortalImg from "./JobPortal.png";
import DeepFakeImg from "./DepFake.png";
import RagProjectImg from "./RagProject.png";
import SalesDashboardImg from "./SalesDashboard.jpg";
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
  {
    id: 3,
    title: "AI powered Deepfake Detection",
    description: "Brief description of the project goes here.",
    tech: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "Streamlit"],
    github: "https://github.com/Harshita1375/AI-powered-Deepfake-Detection",
    live: "https://ai-powered-deepfake-detection.streamlit.app/",
    image: DeepFakeImg,
  },
  {
    id: 4,
    title: "RAG Project",
    description: "BA Document-Based Question Answering (RAG) System.",
    tech: ["FastAPI", "LangChain", "React", "LLM"],
    github: "https://github.com/Harshita1375/NoteAI", 
    live: "https://note-ai-beryl.vercel.app/",
    image: RagProjectImg,
  },
  {
    id: 5,
    title: "Sales DashBoard",
    description: "Interactive dashboard to track and analyze online sales data",
    tech: ["Power BI", "CSV Data Processing", "DAX", "Data Visualization"],
    github: "https://github.com/Harshita1375/Sales-Dashboard",
    image: SalesDashboardImg,
  },
];