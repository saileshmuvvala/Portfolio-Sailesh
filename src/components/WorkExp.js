import React from "react";
import "./WorkExperience.css"; // Import a separate CSS file for styling

const WorkExperience = () => {
  return (
    <aside className="work-experience aside section">
      <div className="section-inner">
        <h2 className="heading">Work Experience</h2>
        <div className="content">
          <div className="item">
            <div className="icon">&#128188;</div>
            <div className="details">
              <h4 className="designation">Senior Process Executive</h4>
              <h5 className="company">
                Cognizant Technology & Solutions Pvt Ltd, Remote
              </h5>
              <span className="year">(Mar '2020 - Oct '2024)</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WorkExperience;
