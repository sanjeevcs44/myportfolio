import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItem from "./WorksItem";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProject(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProject(newProjects);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filter">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container  grid ">
        {project.map((item, index) => {
          return <WorksItem item={item} v key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
