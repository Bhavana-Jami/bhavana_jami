const SkillIcon = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-1.5 group">
    <div className="w-12 h-12 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 group-hover:border-slate-700 transition-all duration-200">
      <img src={icon || "/placeholder.svg"} alt={title} className="w-6 h-6" />
    </div>
    <span className="text-xs font-medium text-slate-400 text-center">{title}</span>
  </div>
)

const SkillCategory = ({ category, skills }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{category}</h3>
    <div className="flex flex-wrap gap-6">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </div>
)

const SkillsPage = () => {
  const categories = {
    Frontend: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: "JavaScript",
      },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML5" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS3" },
      { icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind CSS" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        title: "Material UI",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        title: "Bootstrap",
      },
    ],
    Backend: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        title: "TypeScript",
      },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", title: "GraphQL" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg", title: "REST API" },
    ],
    Database: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
    ],
    Cloud: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", title: "Firebase" },
    ],
    Testing: [{ icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", title: "Jest" }],
  }

  return (
    <div className="mt-12 w-full sm:px-20 px-7" id="skills">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-slate-100">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(categories).map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
