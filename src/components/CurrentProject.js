import React from "react";
import PROJECTS from "../data/current";
import Project from "./Project";

const CurrentProject = () => {
  return (
    <section className="latest section">
      <div className="section-inner">
        <h2 className="heading">Personal Projects</h2>
        <div className="content">
          {PROJECTS.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
