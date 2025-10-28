// import React, { useState } from "react";
// import projects from "../data/projects";
// import ProjectCard from "../components/ProjectCard";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Filter, X, Grid3X3, List } from 'lucide-react';

// export default function Projects() {
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid");
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Unique categories from projects
//   const categories = ["all", ...new Set(projects.flatMap(p => p.category))];

//   // Filter projects based on category and search term
//   const filteredProjects = projects.filter(project => {
//     const matchesCategory = filter === "all" || project.category.includes(filter);
//     const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500">
//       <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
//           >
//             Explore my portfolio of innovative projects combining cutting-edge technologies 
//             with creative problem-solving
//           </motion.p>
//         </motion.div>

//         {/* Filters and Search */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="mb-12"
//         >
//           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
            
//             {/* Search Bar */}
//             <div className="relative flex-1 w-full lg:max-w-md">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search projects by name, tech, or description..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
//               />
//               {searchTerm && (
//                 <button
//                   onClick={() => setSearchTerm("")}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               )}
//             </div>

//             {/* Category Filter */}
//             <div className="flex items-center gap-4 flex-wrap justify-center">
//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                 <Filter size={20} />
//                 <span className="font-semibold">Filter:</span>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setFilter(category)}
//                     className={`px-4 py-2 rounded-xl font-medium capitalize transition-all duration-300 ${
//                       filter === category
//                         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
//                         : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* View Toggle */}
//             <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   viewMode === "grid"
//                     ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <Grid3X3 size={20} />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   viewMode === "list"
//                     ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <List size={20} />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Projects Count */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mb-8"
//         >
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             Showing <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filteredProjects.length}</span> 
//             {filteredProjects.length === 1 ? " project" : " projects"}
//             {filter !== "all" && ` in ${filter}`}
//             {searchTerm && ` matching "${searchTerm}"`}
//           </p>
//         </motion.div>

//         {/* Project Cards Grid/List */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={viewMode + filter + searchTerm}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className={`${
//               viewMode === "grid" 
//                 ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" 
//                 : "grid gap-6 max-w-4xl mx-auto"
//             }`}
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 layout
//               >
//                 <ProjectCard 
//                   p={project} 
//                   viewMode={viewMode}
//                   onSelect={setSelectedProject}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* No Results Message */}
//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-16"
//           >
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
//               No projects found
//             </h3>
//             <p className="text-gray-500 dark:text-gray-500">
//               Try adjusting your search or filter criteria
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }












// import React, { useState } from "react";
// import projects from "../data/projects";
// import ProjectCard from "../components/ProjectCard";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Filter, X, Grid3X3, List } from 'lucide-react';

// export default function Projects() {
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid");

//   // Unique categories from projects - with safety check
//   const categories = ["all", ...new Set(projects
//     .filter(project => project.category) // Only projects with category
//     .flatMap(p => Array.isArray(p.category) ? p.category : [p.category]) // Handle both array and string
//   )];

//   // Filter projects based on category and search term - with safety checks
//   const filteredProjects = projects.filter(project => {
//     // Safety checks for project properties
//     const projectCategory = project.category || [];
//     const categoriesArray = Array.isArray(projectCategory) ? projectCategory : [projectCategory];
//     const projectTechStack = project.techStack || [];
//     const techStackArray = Array.isArray(projectTechStack) ? projectTechStack : [projectTechStack];
    
//     const matchesCategory = filter === "all" || categoriesArray.includes(filter);
//     const matchesSearch = 
//       (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       techStackArray.some(tech => tech && tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500">
//       <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
//           >
//             Explore my portfolio of innovative projects combining cutting-edge technologies 
//             with creative problem-solving
//           </motion.p>
//         </motion.div>

//         {/* Filters and Search */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="mb-12"
//         >
//           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
            
//             {/* Search Bar */}
//             <div className="relative flex-1 w-full lg:max-w-md">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search projects by name, tech, or description..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
//               />
//               {searchTerm && (
//                 <button
//                   onClick={() => setSearchTerm("")}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               )}
//             </div>

//             {/* Category Filter */}
//             <div className="flex items-center gap-4 flex-wrap justify-center">
//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                 <Filter size={20} />
//                 <span className="font-semibold">Filter:</span>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category} // ✅ Key prop added
//                     onClick={() => setFilter(category)}
//                     className={`px-4 py-2 rounded-xl font-medium capitalize transition-all duration-300 ${
//                       filter === category
//                         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
//                         : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* View Toggle */}
//             <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   viewMode === "grid"
//                     ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <Grid3X3 size={20} />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   viewMode === "list"
//                     ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <List size={20} />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Projects Count */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mb-8"
//         >
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             Showing <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filteredProjects.length}</span> 
//             {filteredProjects.length === 1 ? " project" : " projects"}
//             {filter !== "all" && ` in ${filter}`}
//             {searchTerm && ` matching "${searchTerm}"`}
//           </p>
//         </motion.div>

//         {/* Project Cards Grid/List */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={viewMode + filter + searchTerm}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className={viewMode === "grid" 
//               ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" 
//               : "grid gap-6 max-w-4xl mx-auto"
//             }
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id || index} // ✅ Key prop with fallback
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 layout
//               >
//                 <ProjectCard 
//                   p={project} 
//                   viewMode={viewMode}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* No Results Message */}
//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-16"
//           >
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
//               No projects found
//             </h3>
//             <p className="text-gray-500 dark:text-gray-500">
//               Try adjusting your search or filter criteria
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }










// import React, { useState } from "react";
// import projects from "../data/projects";
// import ProjectCard from "../components/ProjectCard";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Filter, X, Grid3X3, List } from 'lucide-react';

// export default function Projects() {
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid"); // ✅ View mode state wapas add kiya

//   // Unique categories from projects - with safety check
//   const categories = ["all", ...new Set(projects
//     .filter(project => project.category) // Only projects with category
//     .flatMap(p => Array.isArray(p.category) ? p.category : [p.category]) // Handle both array and string
//   )];

//   // Filter projects based on category and search term - with safety checks
//   const filteredProjects = projects.filter(project => {
//     // Safety checks for project properties
//     const projectCategory = project.category || [];
//     const categoriesArray = Array.isArray(projectCategory) ? projectCategory : [projectCategory];
//     const projectTechStack = project.techStack || [];
//     const techStackArray = Array.isArray(projectTechStack) ? projectTechStack : [projectTechStack];
    
//     const matchesCategory = filter === "all" || categoriesArray.includes(filter);
//     const matchesSearch = 
//       (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       techStackArray.some(tech => tech && tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500">
//       <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
//           >
//             Explore my portfolio of innovative projects combining cutting-edge technologies 
//             with creative problem-solving
//           </motion.p>
//         </motion.div>

//         {/* Filters and Search */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="mb-12"
//         >
//           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
            
//             {/* Search Bar */}
//             <div className="relative flex-1 w-full lg:max-w-md">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search projects by name, tech, or description..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
//               />
//               {searchTerm && (
//                 <button
//                   onClick={() => setSearchTerm("")}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               )}
//             </div>

//             {/* Category Filter */}
//             <div className="flex items-center gap-4 flex-wrap justify-center">
//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                 <Filter size={20} />
//                 <span className="font-semibold">Filter:</span>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setFilter(category)}
//                     className={`px-4 py-2 rounded-xl font-medium capitalize transition-all duration-300 ${
//                       filter === category
//                         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
//                         : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* ✅ View Toggle Buttons - WAPAS ADD KIYE */}
//             <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   viewMode === "grid"
//                     ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <Grid3X3 size={20} />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   viewMode === "list"
//                     ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <List size={20} />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Projects Count */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mb-8"
//         >
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             Showing <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filteredProjects.length}</span> 
//             {filteredProjects.length === 1 ? " project" : " projects"}
//             {filter !== "all" && ` in ${filter}`}
//             {searchTerm && ` matching "${searchTerm}"`}
//           </p>
//         </motion.div>

//         {/* Project Cards Grid/List */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={viewMode + filter + searchTerm}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className={viewMode === "grid" 
//               ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" 
//               : "grid gap-6 max-w-4xl mx-auto"
//             }
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id || index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 layout
//               >
//                 <ProjectCard 
//                   p={project} 
//                   viewMode={viewMode} // ✅ View mode pass kiya
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* No Results Message */}
//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-16"
//           >
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
//               No projects found
//             </h3>
//             <p className="text-gray-500 dark:text-gray-500">
//               Try adjusting your search or filter criteria
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }









import React, { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
/* eslint-disable no-unused-vars */
//import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, Grid3X3, List } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Categories based on your actual projects
  const categories = ["all", "Full Stack", "AI/ML", "Data Science", "Python", "Computer Vision", "Database", "Web App"];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const projectCategories = project.category || [];
    const matchesCategory = filter === "all" || projectCategories.includes(filter);
    
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore my journey through software development - from AI/ML solutions to full-stack web applications
          </motion.p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
            
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by technology or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Filter size={20} />
                <span className="font-semibold">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-xl font-medium capitalize transition-all duration-300 ${
                      filter === category
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-white dark:bg-gray-600 text-indigo-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filteredProjects.length}</span> 
            {filteredProjects.length === 1 ? " project" : " projects"}
            {filter !== "all" && ` in ${filter}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode + filter + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={viewMode === "grid" 
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "grid gap-6 max-w-4xl mx-auto"
            }
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProjectCard 
                  p={project} 
                  viewMode={viewMode}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}