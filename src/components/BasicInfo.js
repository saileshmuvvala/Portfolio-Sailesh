import React from "react";
import "./BasicInfo.css"; // Styling for basic info section

const BasicInfo = () => {
  return (
    <aside className="basic-info aside section">
      <div className="section-inner">
        <h2 className="heading">Basic Information</h2>
        <div className="content">
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-map-marker-alt icon"></i>
              <span className="label">Location:</span>
              <span className="value">Eluru, AP, India</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt icon"></i>
              <span className="label">Contact No:</span>
              <span className="value">
                <a href="tell:9908617686">9908617686</a>
              </span>
            </li>
            <li>
              <i className="fas fa-envelope icon"></i>
              <span className="label">Email:</span>
              <span className="value">
                <a href="mailto:muvvalasailesh6@gmail.com">
                  muvvalasailesh6@gmail.com
                </a>
              </span>
            </li>
            {/* Optional: Add website if needed */}
            {/*
            <li>
              <i className="fas fa-link icon"></i>
              <span className="label">Website:</span>
              <span className="value">
                <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                  https://www.website.com
                </a>
              </span>
            </li>
            */}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default BasicInfo;
