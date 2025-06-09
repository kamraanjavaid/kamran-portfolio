import project1 from "../../assets/portfolioImg.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/fitnessAppDesign.png";
import project4 from "../../assets/projectImg4.png";
import webitsol from "../../assets/webitsol.png";
import project5 from "../../assets/CARe.png";
import foodApp from "../../assets/food-app.png";

const projectsData = [
  {
    id: 0,
    name: "Webit Sol Website",
    description: "I designed and developed this responsive and modern website for WebitSol, a digital solutions company. The site showcases their services, client testimonials, and contact information with smooth animations and a clean UI. Built using Next.js and Framer Motion, the site reflects professional branding and performance optimization tailored to WebitSol’s business goals.",
    tech : "Next.js + framer-motion",
    imgURL: webitsol,
    link: "https://webit-sol.vercel.app/",
  },
  {
    id: 1,
    name: "Food Delivery Website",
    tech:"MERN",
    description: "Developed a full-stack food delivery app using MongoDB, Express.js, React.js, and Node.js. Users can browse dishes, add items to a cart, and place orders with authentication and authorization. Admins can view order details, total orders, order timings, and user-provided information through a dedicated dashboard",
    imgURL: foodApp,
    link: "https://bitee-nine.vercel.app/",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A sleek and modern portfolio website built with ReactJS, showcasing my skills, projects, and experience. The site features smooth animations, a responsive design, and an interactive user interface. It includes sections such as About Me, Projects, Skills, and Contact. Deployed on Vercel, it ensures fast performance and seamless navigation using React Router. Styled with CSS and Framer Motion for animations.",
    tech:"Reactjs + Custom css",
    imgURL: project1,
    link: "https://kamranjavaid-portfolio2025.vercel.app/",
  },
  {
    id: 3,
    name: "E-Learning Platform",
    description: "An interactive e-learning platform designed to provide users access to various online courses. Built with ReactJS, it features a structured course layout, video integration, quizzes, and progress tracking. Users can enroll in courses, leave reviews, and receive personalized recommendations. The platform uses React Router for seamless navigation and integrates Redux for efficient state management.",
    tech:"React.js",
    imgURL: project2,
    link: "https://learnify-divofybej-kamran-javaids-projects.vercel.app/",
  },
  {
    id: 4,
    name: "CARe Website",
    description: "CARe is a responsive one-page car rental website designed and developed for a client to showcase rental services. The website includes a sleek animated hero section, a navigation bar with mobile support, and a professional layout optimized for all screen sizes. The goal was to provide a clean, user-friendly interface that communicates trust and simplicity.",
    tech:"React.js + framer-motion",
    imgURL: project5,
    link: "https://car-rental-nine-weld.vercel.app/",
  },
  {
    id: 5,
    name: "Fitness App Design",
    description: "A creative fitness app UI/UX design created in Figma, focusing on user engagement and seamless navigation. This design includes workout tracking, diet plans, and progress monitoring with an intuitive and visually appealing interface. The layout is structured to provide an easy-to-use experience for fitness enthusiasts. The design emphasizes accessibility, vibrant colors, and minimalistic elements for an engaging experience.",
    tech:"Figma",
    imgURL: project3,
    link: "https://www.figma.com/design/XfNTHSrMt7hx2pSeqAsIw9/Fitness-App-UXD-Project?node-id=0-1&p=f&t=KHkye2RLYK9j251b-0",
  },
  {
    id: 6,
    name: "SKJ AutoX",
    description: "Skj-autoX is a modern and visually appealing car showcase website featuring high-end animations, a sleek UI, and smooth interactions. It provides an immersive experience for users looking for luxury cars.",
    tech:"React.js + framer-motion",
    imgURL: project4,
    link: "https://skj-autox.vercel.app/",
  },
];

export default projectsData;
