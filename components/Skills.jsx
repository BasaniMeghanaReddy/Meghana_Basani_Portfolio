import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C++", "C#", "Python", "JavaScript", "HTML", "CSS", "R", "Bash Scripting"],
      color: "blue"
    },
    {
      title: "Frameworks & Methodologies",
      skills: ["Angular", "Node.js", ".NET", "OOPS", "NumPy", "Pandas", "Agile", "SDLC", "Machine Learning", "Data Science & Analytics"],
      color: "gray"
    },
    {
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "SQL", "MySQL", "MongoDB", "REST APIs", "Swagger API", "Azure", "Azure VM", "Azure DevOps", "Docker", "Git", "GitHub"],
      color: "blue"
    },
    {
      title: "Tools & Technologies",
      skills: ["Jira", "Postman", "VS Code", "Putty", "Apache Web Servers", "CUDA", "Cypress"],
      color: "gray"
    }
  ];



  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-900",
      gray: "bg-gray-100 text-gray-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Technical Skills
      </h2>
      
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getColorClasses(category.color)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
