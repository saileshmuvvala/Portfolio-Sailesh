import React from "react";
import "./Education.css"; // Separate CSS file for styling

const Education = () => {
  return (
    <aside className="education aside section">
      <div className="section-inner">
        <h2 className="heading">Education</h2>
        <div className="content">
          <div className="item">
            <div className="icon" role="img" aria-label="graduation cap"></div>
            <div className="details">
              <h3 className="title">Master of Science</h3>
              <h4 className="university">
                CRR (Adikavi Nannaya University){" "}
                <span className="year">(2018-2020)</span>
              </h4>
            </div>
            <div className="details">
              <h3 className="title">Bachlore of Science</h3>
              <h4 className="university">
                CRR (Adikavi Nannaya University){" "}
                <span className="year">(2016-2018)</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Education;
