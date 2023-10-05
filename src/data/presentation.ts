type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  subtitle?: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "bscarpari.dev@gmail.com",
  title: "Olá, sou o Bruno Scarpari!",
  subtitle: "React / Tailwind / Node.js / Figma",
  profile: "/profile.png",
  description:
    "Sou <span class='font-bold text-white'>desenvolvedor web React</span> e atuo como freelancer. Com 2 anos de experiência, estou sempre buscando desenvolver as aplicações desde o rascunho visual até o seu resultado final. Além disso, curso Análise e Desenvolvimento de Sistemas no Instituto Federal de Gravataí",
  socials: [
    {
      label: "Github",
      link: "https://github.com/bscarpari",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/bscarpari/",
    },
    {
      label: "Behance",
      link: "https://www.behance.net/bscarpari",
    },
  ],
};

export default presentation;
