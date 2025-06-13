import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    karu,
    edu,
    dil,
    diocese
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Data Integrated Limited",
      iconBg: "#383E56",
      icon: dil,
      date: " May 2024 - August 2024",
      points: [
        "Develop and maintain software features by writing clean, efficient, and testable code under the guidance of senior developers.",
        "Collaborate with cross-functional teams to understand project requirements and contribute to planning, development, and delivery of applications.",
        "Participate in code reviews and version control, ensuring best practices are followed and learning from peer feedback.",
        "Troubleshoot and debug applications, identifying issues and implementing reliable fixes to improve system performance.",
      ],
    },
    {
      title: "IT Consultant",
      company_name: "Ack St. James Cathedral Kiambu",
      iconBg: "#E6DEDD",
      icon: diocese,
      date: "October 2023 -",
      points: [
        "Set up and manage live streaming equipment and software for Sunday services and major church events.",
        "Update and manage the social media platforms to keep information current and engaging.",
        "Advise church leadership on IT solutions, system upgrades, and data security best practices.",
        "Provide technical support and basic IT training to clergy, staff, and ministry volunteers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Stanley proved me wrong.",
      name: "Revd. Ann Nduta",
      designation: "Ass. Provost",
      company: "Ack St. James Cathedral Kiambu",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Stanley does.",
      name: "Mr. James Mwangi",
      designation: "Dean of Studies",
      company: "Karuri High School",
    },
  ];
  
  const projects = [
    {
      name: "Karuri High School",
      description:
        "I developed a responsive and informative website for Karuri High School to enhance communication and accessibility for students, parents, and staff.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: karu,
      source_code_link: "https://github.com/StanMbatia/KARURI-HIGH-SCHOOL.git",
      demo_link: "https://karurihighschool.sc.ke/" ,
    },
    {
      name: "Education Inclusivity",
      description:
        "Education Inclusivity is a Kenya-based initiative that empowers teachers to create inclusive, ICT-integrated learning environments for all learners.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: edu,
      source_code_link: "https://github.com/StanMbatia/EDUCATION_INCLUSIVITY.git",
      demo_link: "https://www.educationinclusivity.org/" ,
    },
  
  ];
  
  export { services, technologies, experiences, testimonials, projects };