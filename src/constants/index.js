import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  django,
  nextjs,
  dart,
  meta,
  starbucks,
  tesla,
  lenz_logo,
  hope_logo,
  reuzzi_logo,
  lt_logo,
  rtx_logo,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  localtreasure,
  gdmdirect,
  reuzzi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web/App Developer",
    icon: web,
  },
  {
    title: "Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Software Engineer",
    icon: backend,
  },
  {
    title: "Tools/Support Provider",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "dart",
    icon: dart,
  },
];

const experiences = [
  // {
  //   title: "Camp Counselor",
  //   company_name: "Cederdale",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "Jun 2018 - Aug 2022",
  //   points: [
  //     "Trained campers in daily courses to develop individual swimming techniques properly and safely, as well as understand proper water safety protocol.",
  //     "Developed & implemented learning techniques, including engaging and interactive indoor and outdoor activities/events, with campers ages 5-12.",
  //     "Created innovative camp film material to create a unified, connected, and collaborative camp environment.",
  //     "Demonstrated strong leadership and communication skills as a camp counselor, successfully guiding and mentoring a group of children through a variety of activities and experiences.",
  //     "Created a safe and welcoming environment for campers, fostering a sense of community and inclusion.",
  //   ],
  // },
  {
    title: "Website & Video Production Intern",
    company_name: "House of Possibilities(HOPe)",
    icon: hope_logo,
    iconBg: "#E6DEDD",
    date: "August 2021 - December 2021",
    points: [
      "Took part in the redesign of the company's website, resulting in a modern, user-friendly experience",
      "Developed informational materials and digital go-to-market initiatives to promote HOPe’s upcoming fundraisers",
      "Directed, filmed, and edited promotional content using Adobe Photo Shop and Premiere Pro for use on company marketing platforms"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Reuzzi",
    icon: reuzzi_logo,
    iconBg: "#383E56",
    date: "December 2021 - May 2022",
    points: [
      "Developed a full-stack QR code management/tracking application for web and mobile app using React, Flutter/Dart, Python/Flask, and MySQL",
      "Worked within Agile/SCRUM development process and used Pivotal Tracker to keep track of progress and prioritize tasks",
      "Improved the performance and scalability of the application by optimizing backend routing algorithms",
      "Directed, filmed, edited, and managed promotional content for campaign marketing initiatives"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Lenz Innovations",
    icon: lenz_logo,
    iconBg: "#E6DEDD",
    date: "August 2022 - Dec 2022",
    points: [
      "Developed a full-stack medical documentation application for web and app using React, Node.js, and MySQL",
      "Ensured best practices for securing personal medical information that adhered to HIPPA guidelines",
      "Implemented a CI/CD pipeline using Jenkins to automatically build, test, and deploy code changes",
      "Utilized Jest to write and maintain comprehensive unit tests for the application codebase. Created coverage reports to identify areas of the codebase that were not adequately tested and worked to improve coverage over time"
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Local Treasure",
    icon: lt_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Leading and mentoring a team of developers to successfully accomplish tasks, while concurrently architecting and implementing new features of the software",
      "Full integrated various AWS services to improve deployment of company systems",
      "Engineered a versatile website and mobile application utilizing a range of technologies, including but not limited to React/NextJS, React Native/Expo, Tailwind CSS, Python/Django, and PostgreSQL",
      "Managing and maintaining Linux servers, including user management, file system administration, and package management",
      "Led the comprehensive software lifecycle, spanning from conceptualization and design to meticulous implementation and successful public deployment of the software solutions"
    ],
  },

  {
    title: "Software Engineer",
    company_name: "Raytheon",
    icon: rtx_logo,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing, debugging, and maintaining C++, Python, and MATLAB code for radar systems, using multithreading to improve performance",
      "Implementing continuous integration and delivery (CI/CD) pipelines using Jenkins and ClearCase for version control management, all within a Linux environment",
      "Working with a team of engineers in AGILE environment to deliver high-quality software on time and within budget",
      "Utilizing MATLAB for data visualization and simulations"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Reuzzi",
    description:
      "Data-driven web and mobile app to track takeout food containers using QR codes. It ensures that students and other customers use and return reusable containers to your dining establishments.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: reuzzi,
    source_code_link: "https://www.reuzzi.com/",
  },
  {
    name: "Lenz Innovations",
    description:
    "Web application for pregnant women to track their blood levels and connect directly with their service provider. User-friendly interface allowing seamless monitoring of blood data, while real-time connectivity ensures instant communication for personalized support.", 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: gdmdirect,
    source_code_link: "https://www.gdmdirect.net/",
  },
  {
    name: "Local Treasure",
    description:
      "Welcome to a thrilling web app where shoppers can embark on exhilarating scavenger hunts for free prizes and coupons hidden by their local businesses. Explore a world of excitement as businesses strategically place exclusive offers for users to uncover. Unleash your inner adventurer, discover incredible savings, and experience the thrill of finding hidden prizes while navigating through the virtual treasure hunt.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: localtreasure,
    source_code_link: "https://local-treasure.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
