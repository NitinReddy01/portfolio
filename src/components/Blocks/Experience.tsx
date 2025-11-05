import Image, { StaticImageData } from "next/image";
import EksaqLogo from "../../assets/eksaqLogo.png";
import ArrowIcon from "../icons/arrowIcon";
import WebsiteLink from "../icons/websiteLink";

const experiences = [
  {
    name: "EKSAQ",
    role: "Associate Software Developer",
    duration: "June 2024 – Present",
    companyWebsite: "https://eksaq.in",
    description: [
      "Joined as an entry-level developer at a fast-paced startup and played a key role in designing and building <b>multiple products from scratch</b>, contributing to architecture, backend services, and deployment in the absence of senior engineers.",
      "<b>Co-led the technical team</b>, driving architecture, design, and development decisions across multiple products while mentoring peers, coordinating task assignments, and ensuring effective communication and collaboration in a fast-paced environment.",
      "Delivered the company's <b>first MVP within a month</b>, demonstrating rapid backend setup using <b>Supabase</b> integrated with <b>React Native</b> and <b>Node.js</b> APIs.",
      "Designed and implemented an <b>automated audio evaluation pipeline</b>, processing thousands of audio submissions monthly using <b>Azure Speech SDK</b> and <b>RabbitMQ</b> for distributed asynchronous task handling.",
      "Built a <b>real-time communication layer</b>, supporting live updates across clients through a custom WebSocket server later migrated to <b>Socket.IO</b> for improved scalability.",
      "Developed a <b>secure authentication service</b>, enforcing single-session logins across client platforms through centralized token validation and session management.",
      "Optimized content delivery, reducing database load and improving response times through a <b>Redis-based caching layer</b>.",
      "Architected scalable backend systems for <b>5+ products</b>, designed an Express-based <b>API Gateway</b> with auth, cache, and health-check middlewares, and created a template for registering new routes.",
      "Streamlined deployments, ensuring consistent and reliable releases by <b>Dockerizing all services</b> and managing infrastructure on <b>AWS ECS and EC2</b>.",
    ],
    imageLogo: EksaqLogo,
    techStack: [
      "Supabase",
      "Node.js",
      "Express",
      "React Native",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "RabbitMQ",
      "Socket.IO",
      "Azure Speech SDK",
      "Docker",
      "AWS ECS/EC2",
    ],
    deployedLinks: [],
  },
];

const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-[14px] md:text-[16px] text-[#ffffff]">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-[14px] md:text-[16px] text-[#ffffff]">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p id="Experience" className="text-2xl mb-2 heading-primary font-bold">
          Experience
        </p>
        <div className="w-[75px] h-[4px] rounded-full bg-[#64ffda]" />
      </div>
      {experiences.map((individualExperience, index) => (
        <ExperienceCard
          key={index}
          data={individualExperience}
        />
      ))}
    </div>
  );
}

interface ExperienceProps {
  imageLogo: StaticImageData;
  name: string;
  companyWebsite: string;
  role: string;
  duration: string;
  description: string[];
  techStack: string[];
  deployedLinks?: { title: string; link: string }[];
}

function ExperienceCard({
  data
}: { data: ExperienceProps }) {
  return (
    <div
      className="rounded-3xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] border-gray-800 experience-card cursor-pointer shadow-lg"
      onClick={() => window.open(data.companyWebsite, "mywindow")}
    >
      <div className="flex flex-col gap-4 w-full h-full bg-neutral-900/80 rounded-3xl p-4 md:p-6 shadow-lg">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-[100%]">
          <div className="flex flex-row items-start justify-start md:items-center md:justify-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl justify-start items-start">
              <Image src={data.imageLogo} alt="eksaq" width={100} height={100} className="rounded-md select-none" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row">
                <p className="text-sm md:text-lg font-bold text-hover group-hover:text-[#64ffda]">{data.role} &nbsp;</p>
                <div className="flex flex-row text-sm md:text-lg font-bold text-hover group-hover:text-[#64ffda]">
                    <p className="hidden text-hover md:flex">|&nbsp;</p> {data.name}
                    <div className="hidden w-7 h-7 md:flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px] skill-icon2" onClick={() => window.open(data.companyWebsite, "mywindow")}>
                    <div className="experience-icon w-5 h-5">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-lg font-bold text-[#ffffff]">{data.duration}</p>
            </div>
          </div>
        </div>

        <div>
          <ul className={"list-disc list-inside md:mt-2"}>
            {data.description.map((point, index) => (
              <li key={index} className="text-md">
                {HighlightedText(point)}
              </li>
            ))}
          </ul>
          <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${data.deployedLinks && data.deployedLinks.length > 0 ? "my-4" : "hidden"}`}>
            {data.deployedLinks &&
              data.deployedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 link-div cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(link.link, "mywindow");
                  }}
                >
                  <WebsiteLink />
                  <p className="text-websitelink text-[#ffffff]">{link.title}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-row gap-2 flex-wrap mt-2">
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
