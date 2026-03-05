import React from "react";

const Languages = () => {
  return (
    <aside className="languages aside section">
      <div className="section-inner">
        <h2 className="heading">Languages</h2>
        <div className="content">
          <ul className="list-unstyled">
            <li className="item">
              <span className="title">
                <strong>English:</strong>
              </span>
              <span className="level">
                {" "}
                Professional Proficiency <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Languages;
