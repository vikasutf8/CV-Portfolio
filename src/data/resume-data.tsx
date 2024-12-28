import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vikas Arya",
  initials: "VA",
  location: "Hanumangarh, Rajasthan India",
  locationLink: "",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Backend-focused Full Stack Engineer specializing in high-performance
      React, Next applications, scalable Node.js, Django services, and real-time collaboration
      systems. Experienced in technical architecture design and team
      leadership.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGBjp_41dYfvg/profile-displayphoto-shrink_400_400/B4DZPR4H82GoAg-/0/1734392972414?e=1740614400&v=beta&t=qq50hb70dcxShKg-N0gcDlO2D0XdkdA-4bsbn97zp8E",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "vikasarya1889@gmail.com",
    tel: "+919983340125",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vikasutf8/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vikas-arya-3a9177229/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "PDPM Indian Institute of Information Technology Design and Manufacturing, Jabalpur",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    //octanet
    {
      company: "OctaNet Services Pvt Ltd",
      link: "https://www.linkedin.com/company/octanetservices/",
      badges: ["Remote", "React.js", "TailwindCSS", "Redux Toolkit", "Node.js", "Mongoose"],
      title: "Full Stack Developer Intern",
      logo: ConsultlyLogo,
      start: "June 2024",
      end: "July 2024",
      description: (
        <>
          Contributed to full-stack development projects to optimize application performance and enhance user experience.
          <ul className="list-inside list-disc">
            <li>
              Implemented secure private routing for two key web routes using React.js, resulting in a 10% acceleration of search result delivery.
            </li>
            <li>
              Redesigned and optimized Mongoose data schemas, seamlessly integrating new categories into the application, which reduced page load time by 4%.
            </li>
            <li>
              Engineered dynamic and reusable user interface components with Redux Toolkit, enabling efficient state management and improved application scalability.
            </li>
          </ul>
        </>
      ),
    },
    //fusion
    {
      company: "IIITDMJ Fusion",
      link: "https://www.linkedin.com/company/iiitdmj-fusion/", // Update the link if necessary
      badges: ["On-site", "Django", "API Optimization", "Agile Methodologies", "Documentation", "Performance Tuning"],
      title: "Software Developer",
      location: "Jabalpur, Madhya Pradesh, India",
      start: "December 2023",
      end: "April 2024",
      description: (
        <>
          Played a pivotal role in enhancing the performance and usability of a web platform while ensuring stakeholder alignment.
          <ul className="list-inside list-disc">
            <li>
              Spearheaded the redesign of a website leveraging Agile methodologies, leading to a 15% increase in user engagement and satisfaction.
            </li>
            <li>
              Enhanced API performance by implementing advanced caching strategies, resulting in a 400% reduction in response times.
            </li>
            <li>
              Authored and maintained comprehensive documentation for 14 use cases, facilitating clarity and alignment among cross-functional teams.
            </li>
          </ul>
        </>
      ),
    },
 
  ],
  skills: [
    "React.js", 
    "Next.js", 
    "TypeScript", 
    "JavaScript (ES6+)", 
    "Tailwind CSS", 
    "Material UI",
    "Node.js", 
    "Express.js", 
    "Django", 
    "REST APIs", 
    "WebSockets", 
    "Prisma ORM", 
    "MySQL", 
    "PostgreSQL", 
    "MongoDB", 
    "Firebase", 
    "Docker", 
    "AWS", 
    "Cloudinary", 
    "Version Control (Git/Github)"
  ],
  
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
