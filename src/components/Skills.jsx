const SkillIcon = ({ icon, title }) => (
  <div className="flex flex-col items-start gap-1 group">
    <div className="w-12 h-12 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 group-hover:border-slate-700 transition-all duration-200">
      <img
        src={icon || "/placeholder.svg"}
        alt={`${title} icon`}
        className="w-6 h-6"
        loading="lazy"
        decoding="async"
        width="24"
        height="24"
      />
    </div>
    <span className="text-xs font-medium text-slate-400 text-start">{title}</span>
  </div>
)

const SkillCategory = ({ category, skills }) => (
  <div className="flex flex-col gap-2.5">
    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
      {category}
    </h3>

{/* -   <div className="flex flex-wrap gap-4"> */}
 <div className="grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-4 justify-items-start">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </div>
)


const SkillsPage = () => {
  const categories = {
    "Frontend Engineering": [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML5" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS3" },
      { icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind CSS" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", title: "Material UI" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", title: "Bootstrap" },
    ],
  
    "Backend & Platform": [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", title: "GraphQL" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg", title: "REST API" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", title: "Firebase" },
    ],
  
    "GenAI & Tooling": [
      { 
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41'/%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3C/svg%3E", 
        title: "Prompting" 
      },
      { 
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/%3E%3Cpath d='M3 12c0 1.66 4 3 9 3s9-1.34 9-3'/%3E%3C/svg%3E", 
        title: "RAG" 
      },
      { 
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5Z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E", 
        title: "Open AI" 
      },
    ],
  }
  

  return (
    <section className="mt-12 w-full px-16" id="skills" aria-labelledby="skills-heading">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 id="skills-heading" className="text-3xl font-bold text-left mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
            Skills & Technologies</h2>
          {/* <div className="w-12 h-1 bg-cyan-500 rounded-full" /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {Object.entries(categories).map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsPage
