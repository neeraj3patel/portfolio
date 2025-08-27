import React from "react";

const About = () => (
  <section className="py-20 bg-black px-6 md:px-12 text-center 
     
      text-white">
    {/* Heading in Blue */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">
      About Me
    </h2>

    {/* Paragraphs in White */}
    <p className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mb-6">
      I'm <span className="font-semibold">NeerajPatel</span>, a{" "}
      <span className="font-semibold">
        final-year Computer Science Engineering student
      </span>{" "}
      with strong expertise in{" "}
      <span className="font-semibold">full-stack development (MERN)</span> and{" "}
      <span className="font-semibold">AI-powered applications</span>. Over the
      past years, I’ve built and deployed{" "}
      <span className="font-semibold">4+ AI-driven projects</span> — from{" "}
      <span className="font-semibold">Ethical AI detection</span> to{" "}
      <span className="font-semibold">TextTune</span> and{" "}
      <span className="font-semibold">MovieSky</span> — serving{" "}
      <span className="font-semibold">Passwordclearer</span> — serving{" "}
      <span className="font-semibold">50+ active users</span>.
    </p>

    <p className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mb-6">
      My toolkit includes{" "}
      <span className="font-semibold">
        React, Node.js, Express, Firebase, Shadcn, and Tailwind
      </span>
      , along with AI APIs like{" "}
      <span className="font-semibold">Gemini</span> and{" "}
      <span className="font-semibold">Cohere</span>. With a strong foundation in{" "}
      <span className="font-semibold">Java</span> and{" "}
      <span className="font-semibold">DSA</span>, I enjoy solving real-world
      problems through{" "}
      <span className="italic">scalable architecture and responsive design</span>.
    </p>

    <p className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
      Beyond coding, I thrive on{" "}
      <span className="font-semibold">learning, experimenting, and sharing knowledge</span>. 
      Whether it’s <span className="font-semibold">building new projects</span>, contributing to{" "}
      <span className="font-semibold">open source</span>, or exploring{" "}
      <span className="font-semibold">AI.</span> 
    </p>
  </section>
);

export default About;
