"use client"

import Image, { StaticImageData } from "next/image";
import ChessPreview from "../../assets/chess-preview.svg";
import CodingPlatformPreview from "../../assets/coding-platform-preview.svg";
import TextEditorImage from "../../assets/text_editor.png";
import WebsiteLink from "../icons/websiteLink";
export const projects: ProjectProps[] = [
  {
    name: "Coding Platform",
    description: [
      "Architected and developed a production-grade coding challenge platform in <b>Go</b>, featuring secure code execution, problem management, and role-based access control.",
      "Engineered a <b>Docker-sandboxed execution environment</b> to safely run untrusted user code with CPU, memory, and time isolation.",
      "Implemented a scalable <b>Executor–Worker architecture</b> to manage distributed code evaluation, aggregate results, and provide detailed performance insights per test case.",
    ],
    techStack: [
      "Go",
      "Docker",
      "PostgreSQL",
      "Goose",
      "REST APIs",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/NitinReddy01/Coding-Platform",
      },
    ],
    image: CodingPlatformPreview,
    category: "Full Stack",
  },
  {
    name: "Real-Time Collaborative Editor",
    description: [
      "Developed a real-time collaborative editor enabling simultaneous multi-user document editing via <b>Socket.IO</b> and <b>WebRTC</b> with low-latency synchronization.",
    ],
    techStack: [
      "Node.js",
      "React",
      "Socket.IO",
      "WebRTC",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/NitinReddy01/Real-Time-Collaborative-Editor",
      },
      {
        title: "Live",
        link: "https://sage-sunflower-a620d4.netlify.app",
      },
    ],
    image: TextEditorImage,
    category: "Full Stack",
  },
  {
    name: "Chess",
    description: [
      "Real-time multiplayer chess application with <b>Google OAuth authentication</b> using Passport.js, featuring cross-platform support for web and mobile via <b>React Native/Expo</b>.",
      "Implemented real-time game logic and synchronization using native <b>WebSocket</b> connections for low-latency multiplayer gameplay.",
    ],
    techStack: [
      "TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "WebSocket",
      "Passport.js",
      "Turborepo",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/NitinReddy01/chess",
      },
    ],
    image: ChessPreview,
    category: "Full Stack",
  },
];

export const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-[16px] text-[#ffffff] 2xl:text-[16px]">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-[16px] w-full text-[#ffffff]">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Projects() {

  return (
    <div className="project-card flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold mb-2" id="Projects">
          Projects
        </p>
        <div className="w-[75px] h-[6px] rounded-full bg-[#64ffda]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 w-full h-full">
        {projects.map((project, index) => (
          <div key={`index-${index}`} className="flex flex-col w-full h-full items-center justify-center"  >
            <ProjectCard
              key={index}
              data={{
                ...project,
                description: project.description,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export interface ProjectProps {
  name: string;
  description: string[];
  techStack: string[];
  deployedLinks?: { title: string; link: string }[];
  image: StaticImageData | string;
  category: string;
}

function ProjectCard({
  data
}: { data: ProjectProps }) {
  return (
    <div
      id="ProjectCard"
      className="rounded-3xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] border-gray-800 experience-card cursor-pointer shadow-lg w-full h-full"
    >
      <div className="flex flex-col gap-4 w-full h-full bg-neutral-900/90 rounded-3xl shadow-lg">
        <div className="flex flex-col h-full w-full">
          <Image src={data.image} alt={data.name} width={150} height={150} className="rounded-t-3xl w-full h-48 object-fit select-none" />
          <div className="flex flex-col items-center justify-center gap-4 mt-2 w-full px-6">
            <h3 className="text-xl font-bold text-[#ffffff] w-full text-left">{data.name}</h3>
            <ul className={"list-disc list-inside"}>
              {data.description.map((point, index) => (
                <li key={`${index}-${point}`}>
                  {HighlightedText(point)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center gap-4 my-4 px-6">
            {data.deployedLinks &&
              data.deployedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 link-div cursor-pointer"
                  onClick={() => {
                    window.open(link.link, "mywindow");
                  }}
                >
                  <div className="svg-icon">
                    <WebsiteLink />
                  </div>
                  <p className="text-[#ffffff] text-websitelink">{link.title}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-row gap-2 flex-wrap px-6 mb-4">
            {data.techStack.map((individualStack, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-800 w-auto px-2 py-1"
              >
                <p className="font-bold text-teal-300">{individualStack}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
