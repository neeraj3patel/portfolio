import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Passwordclearer",
      description:
        "Designed a secure, scalable password management application to store and encrypt user login credentials, ensuring high-level data protection via browser-based storage encryption.",
      tech: "React, Tailwind CSS, Local Storage, JavaScript",
      live: "https://passwordcelare.vercel.app/",
      github: "https://github.com/neeraj3patel/passwordcelare",
    },
    {
      title: "Ethical AI Detector",
      description:
        "AI-driven bias detection tool that analyzes cultural, political, and emotional biases in text. Provides real-time scoring and rewriting suggestions for inclusive communication.",
      tech: "TypeScript, React, Shadcn, Gemini API, Node.js, Express.js",
      live: "https://ai-baised-frontend.vercel.app/",
      github: "https://github.com/neeraj3patel/EthixAI-frontend",
    },
    {
      title: "TextTune",
      description:
        "AI writing assistant with grammar detection, contextual suggestions, and multilingual translation. Enhanced UI with optimized performance and real-time writing improvements.",
      tech: "React, Tailwind CSS, Gemini API, Express, Node.js, Firebase",
      live: "https://texttune-project.onrender.com",
      github: "https://github.com/neeraj3patel/AIChat",
    },
    {
      title: "MovieSky",
      description:
        "Built a responsive movie ticket booking interface using React and Tailwind CSS, enabling users to browse movies and simulate seat booking with an interactive UI.",
      tech: "React, Tailwind CSS",
      live: "https://sky-movie-peach.vercel.app/",
      github: "https://github.com/neeraj3patel/SkyMovie",
    },
    {
       title: "VirtuBoxTask",
       description:
         "A productivity-focused task management platform designed for structured planning and efficient workflow organization. Enables users to create, track, and manage tasks with real-time updates, secure authentication, and persistent cloud storage for seamless cross-session access.",
       tech:
        "React 19, Vite, Tailwind CSS, Firebase (Authentication, Firestore), React Router DOM",
       live: "https://virtu-task-app.vercel.app",
       github: "https://github.com/neeraj3patel/VirtuTaskApp",
    }, 
    {
       title: "ATM Management System",
       description:
         "A robust ATM simulation system developed using object-oriented principles to model real-world banking operations. The system enables account creation with user details, secure balance initialization, cash deposit and withdrawal processing, and real-time balance verification. Designed with a clear separation of concerns, the application ensures data encapsulation, operational consistency, and scalable business logic through abstraction, inheritance, and polymorphic behavior.",
        tech:
         "Java, Object-Oriented Programming (Encapsulation, Inheritance, Abstraction, Polymorphism)",
        github: "https://github.com/neeraj3patel/AtmProject/tree/main",
     },
     {
        title: "ChikitsalyaPrabandhan (95%)",
        description:
        "A role-based hospital management system that supports separate profiles for patients, doctors, and administrators. Patients can register, log in, and book appointments by selecting their health issues and required medical specialization. The system automatically assigns an available doctor; if a doctor is unavailable, the appointment is cancelled. Doctors can view assigned appointments, examine patients, and update the consultation status. Once the consultation is completed successfully, the appointment status is marked as completed, ensuring proper tracking and workflow management.",
         tech:
         "MERN Stack (MongoDB, Express.js, React.js, Node.js), RESTful APIs",
         github: "https://github.com/neeraj3patel/ChikitsalyaPrabandhan",
     }


  ];

  return (
    <section
      className="py-16 px-8 text-center text-white"
      id="projects"
    >
      <h2 className="text-3xl font-semibold mb-8 text-blue-500">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow bg-slate-800"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.title}
            </h3>

            <p className="mb-3 text-gray-300">
              {project.description}
            </p>

            <div className="text-sm text-gray-200 font-semibold mb-3">
              <strong className="text-blue-400">Tech Used:</strong> {project.tech}
            </div>

            <div className="flex justify-center gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline hover:text-blue-600 font-medium"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline hover:text-blue-600 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
