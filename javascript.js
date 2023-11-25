const projects = [
    { name: "E-commerce Website", technology: "Java" },
    { name: "Real-time Chat Application", technology: "Node.js" },
    { name: "Inventory Management System", technology: "C#" },
    { name: "Machine Learning Recommendation Engine", technology: "Python" },
    { name: "Responsive Portfolio Website", technology: "React" },
    { name: "Task Management App", technology: "Angular" },
    { name: "Blog Platform with RESTful API", technology: "Express.js" },
    { name: "Personal Blog Theme", technology: "HTML/CSS" },
    { name: "Social Media Dashboard", technology: "MongoDB" },
    { name: "Online Quiz Application", technology: "SQL" },
  
  ];
  
  

  function filterProjects() {
    const filterValue = document.getElementById("technologyFilter").value.toLowerCase();
    const projectList = document.getElementById("projectList");
  
  
    projectList.innerHTML = "";
  
  
    projects.forEach((project) => {
      if (project.technology.toLowerCase().includes(filterValue)) {
        const li = document.createElement("li");
        li.textContent = project.name;
        projectList.appendChild(li);
      }
    });
  }
  
  
  function populateProjects() {
    const projectList = document.getElementById("projectList");
  
 
    projects.forEach((project) => {
      const li = document.createElement("li");
      li.textContent = project.name;
      projectList.appendChild(li);
    });
  }
  
 
  document.addEventListener("DOMContentLoaded", () => {
    populateProjects();
    filterProjects();
  });
  