// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import AdvanteFuelSystemlogo from './assets/company_logo/Advantek Fuel System.png'

// Education Section Logo's
import pdmLogo from './MyPhoto/PDM.jpg';
import nios from './MyPhoto/CBSE.png'
import cbse from './MyPhoto/CBSE.png'
import diploma from './MyPhoto/Nielit.png'

// Project Section Logo's
import QuizApplication from './MyPhoto/Quiz-Application.png'
import toDo from './MyPhoto/toDo.png'
import AnimeWebPage from './MyPhoto/AnimeWebPage.png'
import Portfolio from './MyPhoto/Portfolio.png'
import UserManagement from './MyPhoto/UserManagment.png';
import LoginSystem from './MyPhoto/Login Page.png';
import MyWeatherApp from './MyPhoto/MyWeatherApp.png';
import Note_Taking_Web_Application from './MyPhoto/NoteProject.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },


    ],
  },
];

export const experiences = [

  {
    id: 0,
    img: AdvanteFuelSystemlogo,
    role: "Service Enginner",
    company: "Advantek Fuel System",
    date: "november 2021 - june-2022",
    desc: " Service Engineer - Advantek Fuel Systems Responsible for flashing and updating Engine Control Modules (ECMs) to ensure optimal performance. Diagnose and troubleshoot ECMs to identify faults and implement solutions. Conduct testing and performance verification of ECMs and related fuel system components. Prepare Technical Evaluation & Maintenance Sheets (TEMS) to document inspections, tests, and repairs. Collaborate with the technical team to ensure quality service and adherence to safety standards.",
    skills: [
      "ECM flashing and programming",
      "Fuel system testing and calibration",
      "Electrical and electronic system understanding",
      "Use of diagnostic tools and software",
    ],
  },
];

export const education = [
  {
   id: 0,
  img: pdmLogo, // replace with your actual logo import or path
  school: "AryaBhatta College",
  date: "August 2023 - July 2026",
  grade: "7.65 CGPA",
  degree: "Bachelor of Arts (B.A.) in Political Science (Hons.)",
  desc: "I completed my Bachelor of Arts (B.A.) in Political Science (Hons.) from Aryabhatta College in July 2026 with a CGPA of 7.65. Throughout my academic journey, I developed strong analytical, research, communication, and critical thinking skills. My coursework included Political Theory, International Relations, Public Administration, Indian Politics, and Comparative Politics, which helped me gain a deeper understanding of political systems, governance, and social issues.This degree has provided me with a solid academic foundation and practical knowledge, preparing me for professional growth and future opportunities."
  },
  {
    id: 1,
    img: diploma,
    school: "National Institute of Electronics & Information Technology (NIELIT)",
    date: "Nov 2023 - Dec 2024",
    grade: "Successfully Completed O Level Certification",
    desc: "I completed the O Level certification from NIELIT, where I gained practical knowledge in Information Technology, Programming, Web Designing, and Computer Applications. During this course, I learned subjects such as Python Programming, Internet Technology, Web Development, Database Management Systems, and IoT fundamentals. I also worked on practical assignments and projects that improved my technical, problem-solving, and software development skills.",
    degree: "O Leve",
  },
  {
    id: 2,
    img: nios,
    school: "Sarvodaya Kanya Vidyalaya, Bharat Nagar",
    date: "Batch 2021 - 2022",
    grade: "60.2%",
    desc: "I completed my Senior Secondary education (10+2) in the Arts stream from the Central Board of Secondary Education (CBSE) with 60.2%. My subjects included Hindi, History, Economics, Political Science, and English. This academic foundation enhanced my understanding of social systems, communication, and critical thinking, preparing me for analytical and interdisciplinary approaches in my higher education journey.",
    degree: "Senior Secondary (10+2) – Arts Stream",
  },
  {
    id: 3,
    img: cbse,
    school: "Shaheed Udham Singh Co-ed Sec.School",
    date: "2019 - 2020",
    grade: "49%",
    desc: "I completed my 10th grade from Shaheed Udham Singh Co-ed Sec.School, a private institution. I was an average student but focused on building a good understanding of my subjects. My school years helped me develop discipline, consistency, and a balanced approach toward academics and personal growth.",
    degree: "Secondary School Certificate (SSC)",
  },
];

export const projects = [
  {
    id: 0,
    title: "PortFolio",
    description: "A personal portfolio website built with React.js featuring reusable components, responsive design, and clean UI to present projects, skills, and contact information.",
    image: Portfolio,
    tags: ["React","Tailwind","javaScript"],
    github: "https://github.com/hiirohit/myPortfolio",
    webapp: "https://my-portfolio-tau-ten-17.vercel.app/",
  },
   {
    id: 1,
    title: "User Management System",
    description: "Developed a dynamic User Management System using Java Servlets and JDBC, allowing administrators to manage user data efficiently. The application provides full CRUD (Create, Read, Update, Delete) functionality through a web interface and stores data securely in a MySQL database.",
    image: UserManagement,
    tags : ["Java","Servlet","MySQL","HTML","CSS","JDBC","Tomcat"],
    github:"https://github.com/hiirohit/user-Managment",
    webapp:"http://localhost:7083/userMgmt/"
  },
  {
    id: 2,
    title: "Login System",
    description: "Developed a simple Login Authentication System using Java Servlets.The system provides a user-friendly login page that validates user credentials entered in the form and redirects users to either a welcome page or an error page based on the input provided.",
    image: LoginSystem,
    tags : ["Java","Servlet","HTML","CSS","Tomcat"],
    github:"https://github.com/hiirohit/LoginSystem",
    webapp:"http://localhost:8082/ServletProject/" 
  },
  {
     id: 3,
    title: "WeatherApp web Application",
    description: "Developed a dynamic Weather Application using Java Servlets and JSP that provides real-time weather updates for any city worldwide.The application integrates with the OpenWeather API to fetch current weather data and displays it in a visually appealing and responsive user interface.",
    image: MyWeatherApp,
    tags : ["HTML","CSS","JS","Java","Servlet","JSP","OpenWeatherAPI","Tomcat"],
    github:"https://github.com/hiirohit/Web_WeatherApp",
    webapp:"http://localhost:8082/MyWeatherApp/" 
  },
];