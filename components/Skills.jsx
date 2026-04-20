import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "C#", "SQL", "MATLAB (Basic)", "PHP", "XML", "jQuery"],
      color: "blue"
    },
    {
      title: "Web Technologies",
      skills: ["React JS", "Angular", "Spring Boot", "Node.js", "REST APIs", "HTML", "CSS"],
      color: "gray"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "RDBMS", "NoSQL", "Microsoft Access"],
      color: "blue"
    },
    {
      title: "Tools & Cloud",
      skills: ["Azure", "Docker", "Kubernetes", "GitHub", "Postman", "Jira", "Azure DevOps", "Jest", "Quest", "Cypress", "Figma", "Atlassian", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook"],
      color: "gray"
    },
    {
      title: "AI & Data",
      skills: ["AI Fundamentals", "Machine Learning", "Prompt Engineering", "Data Modeling", "GPT", "Claude"],
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
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
        Technical Skills
      </h2>
      
      <div className="space-y-3 sm:space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
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
