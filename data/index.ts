import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects: {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  sourceCode: string;
}[] = [
  {
    id: 1,
    title: "FigPro - Collaborative Design Tool",
    des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "", //"https://github.com/sanidhyy/figma-clone",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://clone-yoom.netlify.app",
    sourceCode: "", //"https://github.com/sanidhyy/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "", // "https://github.com/sanidhyy/imaginify",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "", // "https://github.com/sanidhyy/apple-clone",
  },
  {
    id: 5,
    title: "Quran lake website",
    des: "A web application for listening to quran.",
    img: "/hamza/quran_project.svg",
    iconLists: ["/ts.svg", "/next.svg", "/hamza/openai.svg"],
    link: "https://quran-clone-app.vercel.app",
    sourceCode: "https://github.com/hamzaMissewi/quran-next-clone-app",
  },
  // {
  //   id: 6,
  //   title: "Hamza Uber Clone",
  //   des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
  //   img: "/hamza/project1.svg",
  //   iconLists: ["/ts.svg", "/hamza/openai.svg", "/hamza/mongodb.svg", "/hamza/koa.svg", "/hamza/reactJs.svg", "/hamza/javascript.svg"],
  //   link: "https://clone-figmaa.netlify.app",
  //   sourceCode: "https://github.com/sanidhyy/figma-clone",
  // },
] as const;

// clients review
export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Philippe",
    title: "CEO of B2B Alive Ltd",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Florent",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was a game changer. Not only his expertise in web development but also his speed in delivering results for demanded tasks in application. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Mohamed",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `As director of globalnet 3s i worked with ${links.ownerName} for his internship project and i can say he's a hard worker, competent and fast learner throughout the period of project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. I rcommend him as web developer for any entreprise, ${links.ownerName} is a good option.`,
    name: "Akrem aalani",
    title: "Director of Tunisia Globalnet 3s",
  },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Sofrecom",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "B2B Alive LTD",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    skills: [
      "Proven Expertise: Experienced software developer with 2 years in web developing,including cloud-based" +
      " solutions.",
      "Innovation and Efficiency: Implemented automated testing frameworks and CI/CD pipelines that" +
      " reduced deployment time by 40% and increased code quality.",
      "Leadership and Mentoring: Experienced in mentoring junior developers and leading technical teams, fostering" +
      " a collaborative environment that encourages innovation and professional growth.",
      "Workflow",
      "Communication",
    ],
  },
  {
    id: 2,
    title: "Hybrid App Dev - MERN Tech", //JSM Tech",
    desc:
      "Designed and developed hybrid app for both iOS & Android & web using Next, React, MongoDb, Graphql," +
      " Elasticsearch and React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    skills: ["I finish tasks on demand fast, work with react, next, graphql"],
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    // desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Senior Fullstack Developer",
    desc: "Developed and maintained quran web app using next js and modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/hamza/project2.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/hamzaMissewi",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/hamzaOstouri",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hamza-missaoui/",
  },
  {
    name: "Facebook",
    img: "/facebook.svg",
    link: "https://www.facebook.com/hamza-missaoui/",
  },
  {
    name: "Youtube",
    img: "/youtube.svg",
    link: "https://www.youtube.com/hamzatopg/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript", "GraphQl"],
  stack2: ["NodeJs Koa", "ElasticSearch", "NodeJs Express", "MongoDB"],
  stack3: ["MongoDB", "PostgresSql", "MySQL"],
  stack4: ["Spring boot", "Django", "Java", "Python"],
} as const;
