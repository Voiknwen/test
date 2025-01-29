import stonks from "../assets/images/portfolio.png";
import srms from "../assets/images/srms.png";
import ayush from "../assets/images/ayush.png";
import cf from "../assets/images/cf.png";
import a2048 from "../assets/images/a2048.jpg";
import sec from "../assets/images/sec.png";
import tab from "../assets/images/tab.png";

export const projects = [
  {
    title: "Ayush Portal",
    image: ayush,
    github: "https://github.com/GodOfZap/Ayush/",
    description:
      "The AYUSH Hub unite startups, investors, and government entities in a centralized platform for AYUSH projects.",
  },
  {
    title: "Smart Result Management System",
    description:
      "A web application in which the user can find their marks and the teacher's can declare results.",
    image:srms,
        github: "https://github.com/GodOfZap/Student-Result-Management-System/",
  },
  {
    title: "Secure Cloud File Storage",
    description: "Built a node CLI interface and an web app which support most cloud platforms.",
    image:cf,
     link: "https://github.com/GodOfZap/Cloud-Fortress",
  },
  {
    title: "Offline mobile games",
    description: "Built several offline mobile games like 2048, tic tac toe, snake game.",
    image:a2048,
  },
  {
    title: "Testing of cryptographic algorithms",
    description: "Formal Testing of Algorithm through which the validity and integrity are accessed.",
    image:sec,
     link: "https://docs.google.com/presentation/d/1dBK4kWiODB7epSuRjdVOAIFZfGHnTqhK/edit?usp=sharing&ouid=103701871477822752350&rtpof=true&sd=true",
  },
  {
    title: "Portfolio v1",
    description: "Personal Portfolio built using ReactJS, ThreeJS and CSS3.",
    image:stonks,
    github: "https://github.com/GodOfZap/Portfolio-v1",
  },
  {
    title: "Auto Tab Reload",
    description: "A browser extension which allows you to automatically refresh specific tabs at customizable intervals.",
    image:tab,
    link: "https://addons.mozilla.org/en-US/firefox/addon/auto-tab-reload/",
    github: "https://github.com/GodOfZap/TabReloader",
  }
];
