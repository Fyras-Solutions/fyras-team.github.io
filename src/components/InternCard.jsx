import React from "react";
import { FiGithub } from "react-icons/fi";

export default function InternCard({ intern }) {
  return (
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between h-full">
          <div>
            {/* Image header with graceful fallback to gradient initial */}
            {intern.image ? (
              <div className="w-full h-36 rounded-2xl mb-6 overflow-hidden bg-gray-100">
                <img
                  src={
                    intern.image.startsWith("http")
                      ? intern.image
                      : `${process.env.PUBLIC_URL}/avatars/${intern.image}`
                  }
                  alt={`${intern.name} avatar`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full h-36 rounded-2xl mb-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center text-6xl text-white font-bold">
                {intern.name.charAt(0)}
              </div>
            )}

            {/* Name & Role */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-1">{intern.name}</h2>
            <p className="text-purple-600 font-semibold mb-2">{intern.role}</p>
            <p className="text-gray-500 text-sm mb-4">Joined: {intern.joined}</p>

            {/* About */}
            <p className="text-gray-700 mb-6">{intern.about}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {intern.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    skill.length > 6 ? "bg-purple-50 text-purple-700" : "bg-green-50 text-green-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Button */}
          {intern.github && (
            <a
              href={`https://github.com/${intern.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white bg-gray-800 rounded-full px-6 py-3 hover:bg-gray-700 transition-colors duration-300 font-semibold"
            >
              <FiGithub className="text-xl" /> GitHub
            </a>
          )}
        </div>
  );
}
