import React from "react";

import { Github } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center 
      text-white px-4"
    >
      <div className="text-center max-w-2xl">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-4
          animate-[fade-up_1s_ease-out_forwards]"
        >
          Hello, I'm <span className="text-green-400">&lt;NeerajPatel/&gt;</span>
        </h1>

        {/* Subheading */}
        <h2
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 
          animate-[fade-up_1s_ease-out_forwards] [animation-delay:200ms]"
        >
          Full-Stack Developer | AI-Driven Projects | CSE Student
        </h2>

        {/* Description */}
        <p
          className="text-gray-300 text-lg md:text-xl mb-8
          animate-[fade-up_1s_ease-out_forwards] [animation-delay:400ms]"
        >
          I specialize in building AI-powered full-stack apps using the MERN
          stack. Deployed 4+ real-world solutions with 50+ active users.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 
          animate-[fade-up_1s_ease-out_forwards] [animation-delay:600ms]"
        >
          {/* Contact Me */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold 
            hover:bg-green-700 transition shadow-lg"
          >
            📬 Contact Me
          </button>

          {/* View Projects */}
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold 
            hover:bg-purple-700 transition shadow-lg"
          >
            🚀 View Projects
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/neeraj3patel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 
            rounded-2xl font-semibold hover:bg-gray-900 transition shadow-lg"
          >
            <Github size={20} /> GitHub
          </a>

          {/* Resume */}
          <a
            href="/NeerajPatel_Resume%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold 
            hover:bg-blue-700 transition shadow-lg"
          >
            📄 Resume
          </a>
        </div>
      </div>
    </section>
  );
}
