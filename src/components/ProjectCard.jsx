import React from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ p }) {
  return (
    <div className="bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-2">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {p.title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {p.desc}
      </p>
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-medium transition"
      >
        View Project <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
