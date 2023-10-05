export type Project = {
  image: string;
  alt: string;
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    image: "/projects/protheus.sql.png",
    alt: "Protheus SQL",
    title: "Protheus SQL / TCC",
    techs: ["React.js", "TailwindCSS", "Node.js"],
    link: "https://github.com/bscarpari/protheusSQL",
  },
  {
    image: "/projects/ayos.dev.png",
    alt: "ayos.dev",
    title: "ayos.dev / Agência digital",
    techs: ["Next.js", "Typescript", "Framer Motion"],
    link: "https://www.ayos.dev/",
  },
  {
    image: "/projects/bscarpari.dev.jpg",
    alt: "bscarpari.dev",
    title: "bscarpari.dev / Portfolio",
    techs: ["React.js", "TailwindCSS", "Three.js"],
    link: "https://bscarpari.vercel.app/",
  },
];

export default projects;
