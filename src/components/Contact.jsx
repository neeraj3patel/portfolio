import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">📬 Get in Touch</h2>
        <p className="text-gray-300 mb-10 text-lg">
          I'm always open to new collaborations! Connect with me on any platform below.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a
             href="mailto:neerajpatel6749@gmail.com"
             className="flex items-center justify-center gap-3 bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
          <Mail className="w-6 h-6 text-blue-400" />
          <span className="font-medium">Email</span>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/neeraj-patel-5b63b231a/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-500" />
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/neeraj3patel"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <Github className="w-6 h-6 text-gray-300" />
            <span className="font-medium">GitHub</span>
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com/NeerajPatel8170"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <Twitter className="w-6 h-6 text-sky-400" />
            <span className="font-medium">Twitter (X)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
