
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png'; 
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png'
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import arduino from './assets/tech_logo/arduino.png'

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import ssrLogo from './assets/education_logo/ssr_logo.png';
//import bsaLogo from './assets/education_logo/bsa_logo.png';
//mport vpsLogo from './assets/education_logo/vps_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'mysql', logo: htmlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Arduino', logo: arduino },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: agcLogo,
      role: "PCB Fabrication & Quadcopter Drone Assembler",
      company: "Innovation For You Group, Bhopal",
      date: "July 2025 - july 2025",
      desc: "Worked as a PCB Fabrication & Quadcopter Drone Assembler, where I was responsible for designing, fabricating, and assembling printed circuit boards (PCBs) for various electronic projects. Additionally, I assembled and tested quadcopter drones, ensuring their proper functionality and performance. This role involved hands-on experience with electronics, soldering, and drone technology.",
      skills: [
        "PCB Fabrication",
  "Circuit Design",
  "Soldering",
  "Testing & Debugging",
  "Quadcopter Assembly",
  "Drone Calibration",
  "IoT Integration",
  "Electronics Hardware"
      ],
    },
    {
     role:"Java Programming Intern",
      company: "Internpe",
      date: "July 2023 - August 2023",
      desc: "Completed a Java Programming internship focused on core and advanced Java concepts. Gained hands-on experience in object-oriented programming, data structures, exception handling, file handling, and multithreading. Worked on small projects and problem-solving exercises to strengthen coding skills and apply Java concepts in real-world scenarios.",
      skills: [
          "Java",
          "OOPs",
            "Data Structures",
          "Exception Handling",
          "File Handling",
          "Multithreading",

      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Samrat Ashok Technological Institute, Vidisha",
      date: "Sept 2022 - July 2026",
      grade: "8.59 SGPA",
      desc: " I am currently pursuing my Bachelor's degree in Internet of Things (B.Tech) from Samrat Ashok Technological Institute, Vidisha. My coursework includes a blend of core computer science subjects and specialized IoT topics, providing me with a solid foundation in both software development and hardware integration. I have engaged in various projects that involve sensor networks, embedded systems, and IoT applications, allowing me to apply theoretical knowledge to practical scenarios.",
      degree: "Bachelor of Technology - BTech (INTERNET OF THINGS)",
    },
    {
      id: 1,
   img: ssrLogo,
      school: "Saket Shishu Ranjana H.S. School  Vidisha M.P.",
      date: "april 2021 - feb  2022",
      grade: "80.2%",
      desc: "I completed my class 12 education from Saket Shishu Ranjana H.S. School, Vidisha, under the MPBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "XII - PCM",
    },
    {
      id: 2,
    img: ssrLogo,
      school: "Saket Shishu Ranjana H.S.School  Vidisha M.P.",
      date: "April 20219 - March 2020",
      grade: "92.25%",
      desc: " I completed my class 10 education from Saket Shishu Ranjana H.S. School, Vidisha, under the MPBSE board, achieving a strong academic record.",
      degree: "MPBE(X) ",
    },
  ];
  
  export const projects = [
    {
    id: 0,
    title: "Supermarket Billing System",
    description:
      "A C++ based console application designed to handle supermarket billing operations. It allows adding, updating, and deleting products, generating bills for customers, and maintaining records efficiently. This project is aimed at automating the manual billing process in small retail stores.",
    tags: ["C++", "OOPs", "File Handling"],
    github: "https://github.com/Shruti7869/supermarket-billing",
  },
  {
    id: 1,
    title: "Spotify Clone",
    description:
      "A music streaming web application that replicates the core features of Spotify. Built using HTML, CSS, and JavaScript, it includes features like play/pause, next/previous, volume control, seek bar, playlist creation, and a responsive UI for seamless user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Music Player", "Responsive Design"],
    github: "https://github.com/Shruti7869/Spotify-Clone",
  },
  {
    id: 2,
    title: "IoT-Based Women Safety Device",
    description:
      "An IoT-powered safety device designed for women's security. The system integrates sensors (GPS, accelerometer, panic button) with a microcontroller and IoT platform to detect emergency situations. On activation, it sends real-time location and alerts to predefined contacts, ensuring quick assistance in unsafe conditions.",
    tags: ["IoT", "Arduino/ESP32", "Sensors", "GPS", "Cloud", "Embedded Systems"],
     //github: "https://github.com/Shruti7869/IoT-Women-Safety-Device", // replace with actual link if different
  },
{
    id: 3,
    title: "MealDB Food Recipe App",
    description:
      "A web application that allows users to search and explore recipes using TheMealDB API. Users can view recipe details, ingredients, and cooking instructions. The app is built with React.js and Axios for API calls, and uses Context API for state management.",
    tags: ["React.js", "Axios", "Context API", "SCS", "TheMealDB API", "Web Development"],
    github: "https://github.com/Shruti7869/mealdb-food-recipe-app-with-axios",
},

    ];  
