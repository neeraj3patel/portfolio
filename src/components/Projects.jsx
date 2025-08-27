import React from "react";

const Projects = () => (
  
  <section
    className="py-16  px-8 text-center text-white"
    id="projects"
  >
    <h2 className="text-3xl font-semibold mb-8 text-blue-500">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Passwordclearer */}
      <div className="p-6 border rounded-xl shadow bg-slate-800">
        <h3 className="text-2xl font-bold mb-2 text-white">Passwordclearer</h3>
        <p className="mb-3 text-gray-300">
          Designed a secure, scalable password management application to store and encrypt user login credentials, ensuring high-level
          data protection via browser-based storage encryption.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> React, Tailwind CSS, Local Storage, JavaScript
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://passwordcelare.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/neeraj3patel/passwordcelare"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Ethical AI Detector */}
      <div className="p-6 border rounded-xl shadow bg-slate-800">
        <h3 className="text-2xl font-bold mb-2 text-white">Ethical AI Detector</h3>
        <p className="mb-3 text-gray-300">
          AI-driven bias detection tool that analyzes cultural, political, and emotional biases in text.
          Provides real-time scoring and rewriting suggestions for inclusive communication.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> TypeScript, React, Shadcn, Gemini API, Express
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://ai-baised-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/neeraj3patel/EthixAI-frontend"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* TextTune */}
      <div className="p-6 border rounded-xl shadow bg-slate-800">
        <h3 className="text-2xl font-bold mb-2 text-white">TextTune</h3>
        <p className="mb-3 text-gray-300">
          AI writing assistant with grammar detection, contextual suggestions, and multilingual translation.
          Enhanced UI with optimized performance and real-time writing improvements.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> React, Tailwind CSS, Gemini API, Express, Node.js, Firebase
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://texttune-project.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/neeraj3patel/AIChat"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* MovieSky */}
      <div className="p-6 border rounded-xl shadow bg-slate-800">
        <h3 className="text-2xl font-bold mb-2 text-white">MovieSky</h3>
        <p className="mb-3 text-gray-300">
          Built a responsive movie ticket booking interface using React and Tailwind CSS, enabling users to browse movies, and simulate
          seat booking with an interactive UI.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> React, Tailwind Css
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://sky-movie-peach.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/neeraj3patel/SkyMovie"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
