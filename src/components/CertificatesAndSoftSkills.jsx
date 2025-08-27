import React from 'react';

export default function CertificatesAndSoftSkills() {
  return (
    <section id="extras" className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Certificates */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">🎓 Certificates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            
            {/* Certificate 1: Cyber Security */}
            <div className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-md w-full max-w-sm hover:shadow-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 text-white">Cyber Security</h3>
              <p className="text-gray-400 mb-4">Cisco</p>
              <a
                href="https://www.credly.com/badges/84bf647d-d493-4791-8f14-9daaeb7cba0d/linked_in_profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium inline-flex items-center hover:underline"
              >
                View Certificate ↗
              </a>
            </div>

            {/* Certificate 2: Forage */}
            <div className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-md w-full max-w-sm hover:shadow-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Solutions Architecture Job Simulation
              </h3>
              <p className="text-gray-400 mb-4">Forage • 2024</p>
              <a
                href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_hvWpdvbmsvcZ5kiYP_1751966559090_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium inline-flex items-center hover:underline"
              >
                View Certificate ↗
              </a>
            </div>

            {/* Certificate 3: MongoDB */}
            <div className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-md w-full max-w-sm hover:shadow-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Introduction to MongoDB
              </h3>
              <p className="text-gray-400 mb-4">
                MongoDB University
              </p>
              <a
                href="https://learn.mongodb.com/c/_LaD1jHaSVOzUTJGTfTj7g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium inline-flex items-center hover:underline"
              >
                View Certificate ↗
              </a>
            </div>

          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">🧠 Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Communication',
              'Team Collaboration',
              'Problem Solving',
              'Time Management',
              'Critical Thinking',
              'Creativity',
              'Leadership',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-900 text-blue-200 border border-blue-500 px-4 py-2 rounded-full font-medium text-sm shadow-sm hover:border-blue-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
